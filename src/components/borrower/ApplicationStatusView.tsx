"use client";

import Link from "next/link";
import { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import type { ApplicationStatus, StoredApplication } from "@/types/application";
import { PURPOSES, formatCurrency, getApiBaseUrl, labelOf } from "@/lib/application";

type StatusMeta = {
  label: string;
  title: string;
  message: string;
  badge: string;
  dot: string;
};

const STATUS: Record<ApplicationStatus, StatusMeta> = {
  submitted: {
    label: "Submitted",
    title: "Application submitted",
    message:
      "We've received your application and it's under review. Most decisions are made within one business day.",
    badge: "bg-brand-50 text-brand ring-brand/20",
    dot: "bg-brand",
  },
  approved: {
    label: "Approved",
    title: "You're approved!",
    message:
      "Congratulations — your loan has been approved. Funds are being prepared for transfer to your bank account.",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    dot: "bg-emerald-500",
  },
  funded: {
    label: "Funded",
    title: "Your loan is funded",
    message:
      "The money has been sent to your bank account. Depending on your bank it may take 1–2 business days to appear.",
    badge: "bg-accent/15 text-emerald-800 ring-accent/30",
    dot: "bg-accent",
  },
  declined: {
    label: "Declined",
    title: "Application declined",
    message:
      "We're unable to approve your application at this time. You'll receive an adverse action notice by email explaining why. You may reapply after 30 days.",
    badge: "bg-red-50 text-red-700 ring-red-600/20",
    dot: "bg-red-500",
  },
  withdrawn: {
    label: "Withdrawn",
    title: "Application withdrawn",
    message:
      "You've withdrawn this application and it will not be processed further. You can start a new application at any time.",
    badge: "bg-slate-100 text-slate-700 ring-slate-500/20",
    dot: "bg-slate-400",
  },
};

const HAPPY_PATH: ApplicationStatus[] = ["submitted", "approved", "funded"];
type TimelineNode = {
  status: ApplicationStatus;
  state: "done" | "current" | "upcoming" | "terminal";
};

function normalizeStatus(status: string): ApplicationStatus {
  // The backend uses "received"; the current UI calls this "submitted".
  const normalized = status === "received" ? "submitted" : status;

  if (normalized in STATUS) {
    return normalized as ApplicationStatus;
  }

  throw new Error(`Unsupported application status: ${status}`);
}

function mapApplication(data: StoredApplication): StoredApplication {
  return {
    id: data.id ?? data.id ?? "",
    status: normalizeStatus(data.status),
    submittedAt: data.submittedAt,
    bankName: data.bankName ?? "",
    accountLast4: data.accountLast4 ?? "",
    // Older history may contain retired statuses (e.g. agreement steps); skip them.
    history: data.history
      .filter((item) => ((item.status as string) === "received" ? "submitted" : item.status) in STATUS)
      .map((item) => ({
        status: normalizeStatus(item.status),
        at: item.at,
      })),
    applicant: {
      firstName: data.applicant.firstName,
      lastName: data.applicant.lastName ?? "",
      email: data.applicant.email ?? "",
      phone: data.applicant.phone ?? "",
    },
    loan: {
      amount: Number(data.loan.amount),
      purpose: data.loan.purpose,
      otherPurpose: data.loan.otherPurpose ?? "",
    },
  };
}

function buildTimeline(app: StoredApplication): TimelineNode[] {
  const idx = HAPPY_PATH.indexOf(app.status);
  if (idx >= 0) {
    return HAPPY_PATH.map((status, i) => ({
      status,
      state:
        i < idx
          ? "done"
          : i === idx
            ? status === "funded"
              ? "done"
              : "current"
            : "upcoming",
    }));
  }
  const reached = app.history
    .map((h) => HAPPY_PATH.indexOf(h.status))
    .reduce((max, i) => Math.max(max, i), 0);
  return [
    ...HAPPY_PATH.slice(0, reached + 1).map((status) => ({
      status,
      state: "done" as const,
    })),
    { status: app.status, state: "terminal" as const },
  ];
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

function ApplicationStatusContent() {
  const searchParams = useSearchParams();
  const [searchId, setSearchId] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [app, setApp] = useState<StoredApplication | null>(null);
  const [confirmWithdraw, setConfirmWithdraw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Core lookup logic
  const performLookup = useCallback(async (id: string, email: string) => {
    const cleanId = id.trim();
    const cleanEmail = email.trim();

    setHasSearched(true);
    setApp(null);
    setError("");

    if (!cleanId || !cleanEmail) {
      setError("Enter both your Application ID and registered email.");
      return;
    }

    setLoading(true);

    try {
      const baseUrl = getApiBaseUrl();

      const params = new URLSearchParams({
        applicationId: String(cleanId),
        email: cleanEmail,
      });

      const response = await fetch(
        `${baseUrl}/api/v1/applications/status-lookup`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
          cache: "no-store",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error?.message ||
            result?.message ||
            "Unable to find your application.",
        );
      }

      // Supports APIs returning either the object directly or { data: object }.
      const data = result?.data ?? result;

      setApp(mapApplication(data));
    } catch (err) {
      setApp(null);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Pre-fill inputs and auto-search if query params exist in URL
  useEffect(() => {
    const queryId = searchParams.get("id") || "";
    const queryEmail = searchParams.get("email") || "";

    if (queryId || queryEmail) {
      setSearchId(queryId);
      setSearchEmail(queryEmail);
      void performLookup(queryId, queryEmail);
    }
  }, [searchParams, performLookup]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    void performLookup(searchId, searchEmail);
  };

  const handleClear = () => {
    setSearchId("");
    setSearchEmail("");
    setHasSearched(false);
    setApp(null);
    setError("");
    setConfirmWithdraw(false);
  };

  const updateApplicationStatus = async (applicationId: string) => {
    setError("");
    setLoading(true);

    try {
      const baseUrl = "http://localhost:4100";

      const response = await fetch(
        `${baseUrl}/api/v1/withdraw/withdraw-application`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            applicationId: String(applicationId),
          }),
          cache: "no-store",
        },
      );

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result?.message ||
            result?.error?.message ||
            "Unable to withdraw your application.",
        );
      }

      // Refresh the application status from the backend.
      await performLookup(applicationId, searchEmail);
      setConfirmWithdraw(false);
      setError("");
    } catch (error) {
      console.error("Error withdrawing application:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to withdraw your application. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const meta = app ? STATUS[app.status] : null;
  const timeline = app ? buildTimeline(app) : [];
  const canWithdraw =
    app && (app.status === "submitted" || app.status === "approved");
  const isClosed =
    app && (app.status === "declined" || app.status === "withdrawn");
  const purpose =
    app?.loan.purpose === "other"
      ? app.loan.otherPurpose
      : app
        ? labelOf(PURPOSES, app.loan.purpose)
        : "";

  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white min-h-screen">
      <div className="container-x py-10 lg:py-14">
        <div className="mx-auto max-w-4xl">
          {/* Dual Search Card */}
          <div className="mb-10 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8">
            <h2 className="text-xl font-bold text-navy">
              Track Application Status
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Enter your Application ID and registered email address to search.
            </p>

            <form
              onSubmit={handleSearch}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              <div>
                <label
                  htmlFor="app-id"
                  className="block text-xs font-semibold text-slate-600 mb-1"
                >
                  Application ID
                </label>
                <input
                  id="app-id"
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="e.g. 7NY1FD"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <div>
                <label
                  htmlFor="app-email"
                  className="block text-xs font-semibold text-slate-600 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="app-email"
                  type="email"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  placeholder="e.g. pabitra@gmail.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <div className="sm:col-span-2 flex items-center justify-end gap-3 mt-2">
                {hasSearched && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="rounded-full px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition"
                  >
                    Clear
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-brand px-8 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-600 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Searching..." : "Search Application"}
                </button>
              </div>
            </form>
          </div>

          {/* Initial State Prompt */}
          {!hasSearched && (
            <div className="py-12 text-center">
              <p className="text-slate-500">
                Please enter your Application ID or Email address above to view
                details.
              </p>
            </div>
          )}

          {/* Search Result - Not Found */}
          {hasSearched && app === null && (
            <div className="py-16 text-center">
              <h2 className="section-title">No application found</h2>
              <p className="mt-3 text-slate-600">
                We couldn&apos;t find an application matching your search
                criteria.
              </p>
              <Link
                href="/borrower/register"
                className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-600"
              >
                Apply now
              </Link>
            </div>
          )}

          {loading && (
            <div className="py-12 text-center text-slate-500">
              Loading application details...
            </div>
          )}

          {error && !loading && (
            <div
              role="alert"
              className="my-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {/* Search Result - Found */}
          {app && meta && (
            <div>
              <p className="eyebrow">Application status</p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
                  {meta.title}
                </h1>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold ring-1 ${meta.badge}`}
                >
                  <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                  {meta.label}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-slate-600">{meta.message}</p>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_18rem]">
                <div className="space-y-6">
                  {/* Progress tracker */}
                  <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8">
                    <h2 className="font-bold text-navy">Progress</h2>
                    <ol className="mt-6 flex items-start">
                      {timeline.map((node, i) => (
                        <TimelineStep
                          key={node.status}
                          node={node}
                          first={i === 0}
                        />
                      ))}
                    </ol>
                  </div>

                  {/* History */}
                  <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-100 sm:p-8">
                    <h2 className="font-bold text-navy">Activity</h2>
                    <ul className="mt-4 space-y-4">
                      {[...app.history].reverse().map((h, i) => (
                        <li
                          key={`${h.status}-${h.at}-${i}`}
                          className="flex items-start gap-3"
                        >
                          <span
                            className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${STATUS[h.status].dot}`}
                          />
                          <div>
                            <p className="text-sm font-semibold text-navy">
                              {STATUS[h.status].title}
                            </p>
                            <p className="text-xs text-slate-500">
                              {formatDate(h.at)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <aside className="space-y-4">
                  <div className="rounded-3xl bg-navy p-6 text-white shadow-xl">
                    <p className="text-sm text-slate-300">Loan amount</p>
                    <p className="mt-1 text-3xl font-extrabold">
                      {formatCurrency(app.loan.amount)}
                    </p>
                    <dl className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
                      <Detail label="Application ID" value={app.id} mono />
                      <Detail
                        label="Applicant"
                        value={`${app.applicant.firstName} ${app.applicant.lastName}`}
                      />
                      <Detail label="Email" value={app.applicant.email} />
                      <Detail label="Purpose" value={purpose} />
                      <Detail
                        label="Deposit to"
                        value={`${app.bankName} •••• ${app.accountLast4}`}
                      />
                      <Detail
                        label="Submitted"
                        value={formatDate(app.submittedAt)}
                      />
                    </dl>
                  </div>

                  {canWithdraw && (
                    <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-100">
                      {confirmWithdraw ? (
                        <>
                          <p className="text-sm font-semibold text-navy">
                            Withdraw this application?
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            This can&apos;t be undone.
                          </p>
                          <div className="mt-4 flex gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                updateApplicationStatus(app.id);
                              }}
                              disabled={loading}
                              className="flex-1 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                            >
                              Withdraw
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmWithdraw(false)}
                              className="flex-1 rounded-full px-4 py-2.5 text-sm font-semibold text-navy ring-1 ring-slate-300 hover:bg-slate-50"
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-slate-500">
                            Changed your mind? You can withdraw before funding.
                          </p>
                          <button
                            type="button"
                            onClick={() => setConfirmWithdraw(true)}
                            className="mt-3 w-full rounded-full px-4 py-2.5 text-sm font-semibold text-red-600 ring-1 ring-red-200 hover:bg-red-50"
                          >
                            Withdraw application
                          </button>
                        </>
                      )}
                    </div>
                  )}

                  {isClosed && (
                    <Link
                      href="/borrower/register"
                      className="block rounded-full bg-brand px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-600"
                    >
                      Start a new application
                    </Link>
                  )}
                </aside>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ApplicationStatusView() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <ApplicationStatusContent />
    </Suspense>
  );
}

function TimelineStep({ node, first }: { node: TimelineNode; first: boolean }) {
  const meta = STATUS[node.status];
  const filled = node.state === "done" || node.state === "terminal";
  const circle =
    node.state === "terminal"
      ? `${meta.dot} text-white`
      : node.state === "done"
        ? "bg-brand text-white"
        : node.state === "current"
          ? "bg-white text-brand ring-4 ring-brand"
          : "bg-white text-slate-300 ring-2 ring-slate-200";

  return (
    <li className="relative flex flex-1 flex-col items-center text-center">
      {!first && (
        <span
          className={`absolute right-1/2 top-5 h-0.5 w-full -translate-y-1/2 ${
            node.state === "upcoming"
              ? "bg-slate-200"
              : node.state === "terminal"
                ? meta.dot
                : "bg-brand"
          }`}
        />
      )}
      <span
        className={`relative z-10 grid h-10 w-10 place-items-center rounded-full ${circle}`}
      >
        {node.state === "terminal" ? (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path d="M6.3 5.3a1 1 0 011.4 0L10 7.6l2.3-2.3a1 1 0 111.4 1.4L11.4 9l2.3 2.3a1 1 0 01-1.4 1.4L10 10.4l-2.3 2.3a1 1 0 01-1.4-1.4L8.6 9 6.3 6.7a1 1 0 010-1.4z" />
          </svg>
        ) : filled ? (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <span
            className={`h-2.5 w-2.5 rounded-full ${node.state === "current" ? "animate-pulse bg-brand" : "bg-slate-300"}`}
          />
        )}
      </span>
      <span
        className={`mt-2 text-sm font-semibold ${node.state === "upcoming" ? "text-slate-400" : "text-navy"}`}
      >
        {meta.label}
      </span>
    </li>
  );
}

function Detail({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-slate-400">{label}</dt>
      <dd className={`text-right font-semibold ${mono ? "font-mono" : ""}`}>
        {value}
      </dd>
    </div>
  );
}
