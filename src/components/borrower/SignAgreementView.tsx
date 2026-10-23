"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  PURPOSES,
  formatCurrency,
  getApiBaseUrl,
  labelOf,
} from "@/lib/application";

type LoanSummary = {
  amount: number;
  purpose: string;
  otherPurpose: string | null;
};

type SigningSession = {
  agreementId: string;
  applicationId: string;
  firstName: string;
  expiresAt: string;
  loan: LoanSummary;
  mode: "internal";
  document: { html: string; sha256: string };
};

type SignedResult = {
  agreementId: string;
  status: string;
  signedAt: string;
  applicationId: string;
  signerName: string;
  loan: LoanSummary;
  message: string;
};

type ApiFailure = { code?: string; message: string };

async function post<T>(path: string, body: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${getApiBaseUrl()}/api/v1${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
  } catch {
    throw {
      message:
        "We couldn't reach our servers. Check your connection and try again.",
    } satisfies ApiFailure;
  }
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success === false) {
    throw {
      code: result?.error?.code,
      message:
        result?.error?.message ?? "Something went wrong. Please try again.",
    } satisfies ApiFailure;
  }
  return (result?.data ?? result) as T;
}

/** Link problems the borrower can't fix by retrying. */
const LINK_ERRORS: Record<string, string> = {
  INVALID_SIGNING_LINK:
    "This signing link is invalid. Please use the link from your most recent email.",
  SIGNING_LINK_EXPIRED:
    "This signing link has expired. Please contact support and we'll send you a new one.",
  AGREEMENT_VOIDED:
    "This agreement is no longer valid. Please check your email for a newer link or contact support.",
  AGREEMENT_ALREADY_SIGNED:
    "This agreement has already been signed. No further action is needed.",
  SIGNING_LOCKED:
    "This link has been locked after too many unsuccessful attempts. Please contact support.",
  VALIDATION_ERROR:
    "This signing link is invalid. Please use the link from your most recent email.",
};

const purposeLabel = (loan: LoanSummary) =>
  loan.purpose === "other"
    ? loan.otherPurpose || "Other"
    : labelOf(PURPOSES, loan.purpose);

const formatDateTime = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(value));

const inputClass =
  "w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8">
      {children}
    </div>
  );
}

function LoanDetails({
  applicationId,
  loan,
}: {
  applicationId: string;
  loan: LoanSummary;
}) {
  return (
    <dl className="grid gap-4 rounded-2xl bg-brand-50 p-5 sm:grid-cols-3">
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Loan amount
        </dt>
        <dd className="mt-1 text-2xl font-extrabold text-navy">
          {formatCurrency(loan.amount)}
        </dd>
      </div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Purpose
        </dt>
        <dd className="mt-1 text-sm font-semibold text-navy">
          {purposeLabel(loan)}
        </dd>
      </div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Application ID
        </dt>
        <dd className="mt-1 text-sm font-semibold text-navy">
          {applicationId}
        </dd>
      </div>
    </dl>
  );
}

function SignAgreementContent() {
  const token = useSearchParams().get("token") ?? "";
  const [session, setSession] = useState<SigningSession | null>(null);
  const [linkError, setLinkError] = useState<string | null>(
    token ? null : LINK_ERRORS.INVALID_SIGNING_LINK,
  );
  const [signed, setSigned] = useState<SignedResult | null>(null);

  const [fullName, setFullName] = useState("");
  const [ssnLast4, setSsnLast4] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [consent, setConsent] = useState(false);
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const opened = useRef(false);

  useEffect(() => {
    if (!token || opened.current) return;
    opened.current = true;
    post<SigningSession>("/agreements/session", { token })
      .then(setSession)
      .catch((err: ApiFailure) =>
        setLinkError((err.code && LINK_ERRORS[err.code]) || err.message),
      );
  }, [token]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    if (!/^\d{4}$/.test(ssnLast4))
      return setFormError("Enter the last 4 digits of your SSN.");
    if (!dateOfBirth) return setFormError("Enter your date of birth.");
    if (!consent || !agree)
      return setFormError("Please tick both boxes to sign.");

    setSubmitting(true);
    try {
      const result = await post<SignedResult>("/agreements/sign", {
        token,
        fullName: fullName.trim(),
        ssnLast4,
        dateOfBirth,
        consentToElectronicRecords: true,
        agreeToTerms: true,
      });
      setSigned(result);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      const { code, message } = err as ApiFailure;
      if (code === "IDENTITY_VERIFICATION_FAILED") {
        setFormError(
          "The details you entered don't match your application. Check your full legal name, SSN and date of birth.",
        );
      } else if (code && LINK_ERRORS[code] && code !== "VALIDATION_ERROR") {
        setLinkError(LINK_ERRORS[code]);
      } else {
        setFormError(message);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (signed) {
    return (
      <Card>
        <div className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-emerald-600">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <h1 className="mt-4 text-2xl font-extrabold text-navy">
            Agreement signed
          </h1>
          <p className="mt-2 max-w-lg text-sm text-slate-600">
            {signed.message}
          </p>
        </div>
        <div className="mt-8">
          <LoanDetails
            applicationId={signed.applicationId}
            loan={signed.loan}
          />
        </div>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-slate-500">Signed by</dt>
            <dd className="font-semibold text-navy">{signed.signerName}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Signed on</dt>
            <dd className="font-semibold text-navy">
              {formatDateTime(signed.signedAt)}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm text-slate-500">
          We&apos;ve emailed you a confirmation. You can check your application
          at any time.
        </p>
        <Link
          href="/borrower/status"
          className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Check application status
        </Link>
      </Card>
    );
  }

  if (linkError) {
    return (
      <Card>
        <h1 className="text-xl font-bold text-navy">
          We can&apos;t open this agreement
        </h1>
        <p className="mt-2 text-sm text-slate-600">{linkError}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/borrower/status"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Check application status
          </Link>
          <Link
            href="/complaint"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-slate-50"
          >
            Contact support
          </Link>
        </div>
      </Card>
    );
  }

  if (!session || session.mode !== "internal") {
    return (
      <Card>
        <p className="py-10 text-center text-sm text-slate-500">
          Loading your agreement…
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <p className="eyebrow">Loan agreement</p>
        <h1 className="mt-2 text-2xl font-extrabold text-navy">
          Hi {session.firstName}, please review and sign
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          This link expires on {formatDateTime(session.expiresAt)} and can be
          used once.
        </p>
        <div className="mt-6">
          <LoanDetails
            applicationId={session.applicationId}
            loan={session.loan}
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-bold text-navy">Agreement</h2>
        <iframe
          title="Loan agreement document"
          sandbox=""
          srcDoc={session.document.html}
          className="mt-4 h-[28rem] w-full rounded-2xl border border-slate-200 bg-white"
        />
      </Card>

      <Card>
        <h2 className="text-lg font-bold text-navy">Sign</h2>
        <p className="mt-1 text-sm text-slate-500">
          Confirm your identity and type your full legal name exactly as on your
          application.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="fullName"
              className="mb-1 block text-xs font-semibold text-slate-600"
            >
              Full legal name
            </label>
            <input
              id="fullName"
              required
              minLength={3}
              maxLength={201}
              autoComplete="name"
              className={`${inputClass} font-semibold`}
              placeholder="First Last"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="ssnLast4"
              className="mb-1 block text-xs font-semibold text-slate-600"
            >
              Last 4 digits of SSN
            </label>
            <input
              id="ssnLast4"
              required
              inputMode="numeric"
              autoComplete="off"
              maxLength={4}
              className={inputClass}
              value={ssnLast4}
              onChange={(e) =>
                setSsnLast4(e.target.value.replace(/\D/g, "").slice(0, 4))
              }
            />
          </div>
          <div>
            <label
              htmlFor="dob"
              className="mb-1 block text-xs font-semibold text-slate-600"
            >
              Date of Birth (MM/DD/YYYY)
            </label>
            <input
              id="dob"
              type="text"
              required
              autoComplete="bday"
              placeholder="MM/DD/YYYY"
              className={`${inputClass} appearance-none`}
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-slate-700 sm:col-span-2">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 accent-brand"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            I consent to receive and sign this agreement electronically.
          </label>
          <label className="flex items-start gap-3 text-sm text-slate-700 sm:col-span-2">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 accent-brand"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            I have read the agreement above and agree to its terms. Typing my
            name is my electronic signature.
          </label>

          {formError && (
            <p
              role="alert"
              className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2"
            >
              {formError}
            </p>
          )}

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting || !consent || !agree}
              className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {submitting ? "Signing…" : "Sign agreement"}
            </button>
            <p className="mt-3 text-xs text-slate-500">
              Signing does not by itself mean your loan is approved or funded.
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default function SignAgreementView() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-x py-10 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            <SignAgreementContent />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
