import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Marriage Loan Online | Flexible Wedding Financing | Lendbox",
  description:
    "Finance your dream wedding with Lendbox Marriage Loans. Fast approval, competitive interest rates, flexible repayment tenures, and zero physical paperwork.",
};

const marriageLoanFeatures = [
  {
    title: "High Loan Value",
    description:
      "Get instant wedding funding up to $10,00,000 to manage venue bookings, catering, jewelry, and event arrangements.",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Tenures",
    description:
      "Repay comfortably with flexible repayment options ranging from 6 months up to 36 months tailored to your budget.",
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
  {
    title: "100% Digital Process",
    description:
      "Complete your loan application, document verification, and KYC fully online without visiting any physical branch.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Disbursal",
    description:
      "Once approved, the funds are directly transferred into your bank account within 24 hours so you never miss a deadline.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function MarriageLoanPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Header Banner with Hero Image */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-white">
              Hassle-Free Wedding Financing
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Make Your Dream Wedding a Reality
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Plan your grand celebration without financial stress. Get quick
              marriage loans with low interest rates, flexible EMI plans, and
              instant bank transfer.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/borrower/register"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#1458ea] font-semibold text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                Apply for Marriage Loan
              </Link>
              <Link
                href="/emi-calculator"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-white/40 text-white font-medium text-base hover:bg-white/10 transition-colors"
              >
                Calculate EMI
              </Link>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <Image
              src="/images/marriage-loan-hero.jpg"
              alt="Marriage Loan Financing"
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
              label: "Marriage Loan",
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
              Why Opt for a Lendbox Marriage Loan?
            </h2>
            <p>
              Weddings are once-in-a-lifetime events filled with unforgettable
              moments, but managing multiple vendors, venues, attire, and guests
              can strain your immediate cash flow. Lendbox offers tailor-made
              wedding loans designed to ease your financial burden.
            </p>
            <p>
              With our transparent P2P credit evaluation, you can secure loan
              amounts with fair interest rates, zero collateral requirements,
              and no hidden fees.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/wedding-planning.jpg"
              alt="Wedding Planning & Budgeting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Loan Features Grid */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Key Features & Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marriageLoanFeatures.map((feature, idx) => (
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
              Ready to Plan Your Special Day?
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Check your loan eligibility online in 2 minutes with no commitment
              required.
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
