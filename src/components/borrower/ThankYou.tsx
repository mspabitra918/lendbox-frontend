"use client";

import Link from "next/link";
import {
  PURPOSES,
  formatCurrency,
  labelOf,
  useStoredApplication,
} from "@/lib/application";
import { ApplicationStatus } from "@/types/application";

const NEXT_STEPS = [
  {
    title: "Application review",
    body: "Our team verifies your details — usually within a few minutes.",
  },
  {
    title: "Decision",
    body: "We'll email and text you once a decision is made.",
  },
  {
    title: "Funding",
    body: "If approved, funds can arrive as soon as the next business day.",
  },
];

export default function ThankYou() {
  const app = {
    status: "submitted" as ApplicationStatus,
    applicant: {
      firstName: "John",
      lastName: "Doe",
      email: "pabitra@gmail.com",
    },
    id: "1234567890",
    loan: {
      amount: 50000,
      purpose: "personal",
      otherPurpose: "",
    },
  };

  // if (app === undefined) return <div className="min-h-[60vh]" />;

  // if (app === null) {
  //   return (
  //     <section className="container-x py-24 text-center">
  //       <h1 className="section-title">No application found</h1>
  //       <p className="mt-3 text-slate-600">It looks like you haven&apos;t submitted an application yet.</p>
  //       <Link
  //         href="/borrower/register"
  //         className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-600"
  //       >
  //         Start application
  //       </Link>
  //     </section>
  //   );
  // }

  const purpose =
    app.loan.purpose === "other"
      ? app.loan.otherPurpose
      : labelOf(PURPOSES, app.loan.purpose);

  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-x py-14 lg:py-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 sm:p-12">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent/15">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-accent text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                className="h-7 w-7"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-navy sm:text-4xl">
            Thank you, {app.applicant.firstName}!
          </h1>
          <p className="mt-3 text-slate-600">
            Your application has been submitted. A confirmation was sent to{" "}
            <span className="font-semibold text-navy">
              {app.applicant.email}
            </span>
            .
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-slate-50 p-5 text-left sm:grid-cols-3">
            <div>
              <dt className="text-xs text-slate-500">Application ID</dt>
              <dd className="mt-1 font-mono text-sm font-bold text-navy">
                {app.id}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Amount requested</dt>
              <dd className="mt-1 text-sm font-bold text-navy">
                {formatCurrency(app.loan.amount)}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Purpose</dt>
              <dd className="mt-1 text-sm font-bold text-navy">{purpose}</dd>
            </div>
          </dl>

          <ol className="mt-8 space-y-4 text-left">
            {NEXT_STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-navy">{s.title}</p>
                  <p className="text-sm text-slate-500">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={`/borrower/status?id=${app.id}&email=${app.applicant.email}`}
              className="rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-600"
            >
              Track application status
            </Link>
            <Link
              href="/"
              className="rounded-full px-8 py-3.5 font-semibold text-navy ring-1 ring-slate-300 hover:bg-slate-50"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
