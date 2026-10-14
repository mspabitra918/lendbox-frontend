import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Direct Lender Disclosure | Lendbox",
  description:
    "Direct Lender Disclosure and Lending Operations Policy for Creek Lend",
};

export default function DirectLenderDisclosurePage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Blue Header Banner */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Direct Lender Disclosure
          </h1>
          <p className="mt-2 text-blue-100 text-base md:text-lg">
            Transparency about who we are and how we lend
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Direct Lender Disclosure",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-12 leading-relaxed text-[#4A4A4A] text-base">
        {/* Lendbox is a Direct Lender */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Lendbox is a Direct Lender
          </h2>
          <p>
            Lendbox is a direct lender that makes its own credit decisions and
            funds loans directly. We are NOT a loan broker, loan marketplace,
            lead generator, or aggregator. When you apply with Lendbox, your
            application is reviewed and processed entirely by us.
          </p>
        </div>

        {/* What "Direct Lender" Means for You */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            What &quot;Direct Lender&quot; Means for You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
              <h3 className="text-lg font-semibold text-[#111827]">
                One Application, One Lender
              </h3>
              <p className="text-sm text-[#4A4A4A]">
                Your application is reviewed only by Lendbox. We do not sell or
                share your application with other lenders.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
              <h3 className="text-lg font-semibold text-[#111827]">
                Faster Decisions
              </h3>
              <p className="text-sm text-[#4A4A4A]">
                Because we make our own credit decisions, you get faster
                responses without waiting for third-party reviews.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
              <h3 className="text-lg font-semibold text-[#111827]">
                Direct Communication
              </h3>
              <p className="text-sm text-[#4A4A4A]">
                You deal directly with us throughout the entire process — from
                application to funding to repayment.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
              <h3 className="text-lg font-semibold text-[#111827]">
                Data Privacy
              </h3>
              <p className="text-sm text-[#4A4A4A]">
                Your personal and financial information stays with us. We never
                sell your data to other lenders or lead buyers.
              </p>
            </div>
          </div>
        </div>

        {/* Loan Details */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Loan Details</h2>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#1458ea]">
            <li>
              <strong className="text-[#111827]">Loan amounts:</strong> $2,000
              to $10,000
            </li>
            <li>
              <strong className="text-[#111827]">APR range:</strong> 10% to 10%
            </li>
            <li>
              <strong className="text-[#111827]">Repayment terms:</strong> 24 to
              60 months
            </li>
            <li>
              <strong className="text-[#111827]">Loan type:</strong> Fixed-rate
              unsecured personal loans
            </li>
            <li>
              <strong className="text-[#111827]">Origination fee:</strong> 1% to
              6% of loan amount
            </li>
            <li>
              <strong className="text-[#111827]">Prepayment penalties:</strong>{" "}
              No prepayment penalties
            </li>
          </ul>
        </div>

        {/* Licensing */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Licensing</h2>
          <p>
            Creek Lend is licensed to lend in the states where it operates. Our
            NMLS number is XXXXXXX. You can verify our licensing status through
            the NMLS Consumer Access website.
          </p>
        </div>

        {/* Questions */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Questions?</h2>
          <p>
            If you have any questions about our status as a direct lender,
            please contact us at{" "}
            <a
              href="mailto:support@lendbox.us"
              className="text-[#1458ea] hover:underline font-medium"
            >
              support@lendbox.us
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
