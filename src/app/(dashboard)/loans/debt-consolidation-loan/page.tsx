import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Debt Consolidation Loan Online | Simplify Your EMIs | Lendbox",
  description:
    "Combine multiple high-interest debts, credit card balances, and personal loans into one single manageable EMI with lower interest rates using Lendbox Debt Consolidation Loans.",
};

const consolidationFeatures = [
  {
    title: "Single Monthly Payment",
    description:
      "Merge multiple credit cards and personal loans into one easy, predictable monthly EMI payment.",
    icon: (
      <svg
        className="w-6 h-6 text-[#1458ea]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Lower Overall Interest Rates",
    description:
      "Replace high credit card interest rates (up to 36-42% p.a.) with competitive, fixed peer-to-peer personal loan rates.",
    icon: (
      <svg
        className="w-6 h-6 text-[#1458ea]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
    ),
  },
  {
    title: "Improved Credit Score",
    description:
      "Paying off multiple credit cards and maintaining structured repayments boosts your credit profile over time.",
    icon: (
      <svg
        className="w-6 h-6 text-[#1458ea]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Tenure Options",
    description:
      "Choose a repayment duration from 12 to 60 months that suits your current monthly budget and income stream.",
    icon: (
      <svg
        className="w-6 h-6 text-[#1458ea]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function DebtConsolidationLoanPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Header Banner with Hero Image */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-white">
              Take Control of Your Finances
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Debt Consolidation Loans Made Simple
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Consolidate your existing loans and credit card debts into one
              single low-interest loan with a fixed EMI and clear payoff
              timeline.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/borrower/register"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#1458ea] font-semibold text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                Apply for Consolidation
              </Link>
              <Link
                href="/emi-calculator"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-white/40 text-white font-medium text-base hover:bg-white/10 transition-colors"
              >
                Calculate Monthly EMI
              </Link>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <Image
              src="/images/debt-consolidation-hero.jpg"
              alt="Debt Consolidation Loan Overview"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Debt Consolidation Loan",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-12 leading-relaxed text-[#4A4A4A] text-base">
        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              How Debt Consolidation Works
            </h2>
            <p>
              Managing multiple loan repayments across different dates, banks,
              and interest rates can lead to missed payments, late fees, and
              financial anxiety. A debt consolidation loan aggregates all your
              existing debts into a single structured balance.
            </p>
            <p>
              By paying off your existing high-cost loans or credit cards with a
              single Lendbox loan, you gain immediate clarity with one monthly
              payment, transparent terms, and zero hidden charges.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/financial-planning.jpg"
              alt="Financial Planning and Debt Management"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Benefits of Consolidating Your Debt
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consolidationFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 bg-blue-50 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Documentation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-[#111827]">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 marker:text-[#1458ea] text-sm md:text-base">
              <li>
                <strong className="text-[#111827]">Residency:</strong> Must be a
                US resident.
              </li>
              <li>
                <strong className="text-[#111827]">Age:</strong> Must be at
                least 18 years old or the age of majority in your state.
              </li>
              <li>
                <strong className="text-[#111827]">Employment:</strong> Employed
                or self-employed with a verifiable source of income.
              </li>
              <li>
                <strong className="text-[#111827]">Income:</strong> Must meet
                the lender's minimum income requirements.
              </li>
              <li>
                <strong className="text-[#111827]">Bank Account:</strong> An
                active US bank account that supports electronic transactions.
              </li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-[#111827]">
              Required Documents
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 marker:text-[#1458ea] text-sm md:text-base">
              <li>
                <strong className="text-[#111827]">
                  Social Security Number (SSN):
                </strong>{" "}
                For identity verification and applicable credit checks.
              </li>
              <li>
                <strong className="text-[#111827]">
                  Government-Issued ID:
                </strong>{" "}
                A valid driver's license, state ID, or other accepted
                identification.
              </li>
              <li>
                <strong className="text-[#111827]">Proof of Address:</strong> A
                recent utility bill, lease agreement, or bank statement.
              </li>
              <li>
                <strong className="text-[#111827]">Bank Statements:</strong>{" "}
                Your latest three months of bank statements.
              </li>
              <li>
                <strong className="text-[#111827]">Income Proof:</strong> Recent
                pay stubs, W-2 forms, or other accepted income verification
                documents.
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1458ea] to-[#679cf6] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Simplify Your Finances?
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Check your eligibility in 2 minutes and take the first step toward
              financial freedom.
            </p>
          </div>
          <Link
            href="/borrower/register"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1458ea] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
          >
            Apply Now
          </Link>
        </div>
      </main>
    </div>
  );
}
