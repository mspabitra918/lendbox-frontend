import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Fair Lending Statement | Lendbox",
  description:
    "Fair Lending Statement and Equal Opportunity Policy for Lendbox",
};

export default function FairLendingPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Blue Header Banner */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Fair Lending Statement
          </h1>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Fair Lending Statement",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-12 leading-relaxed text-[#4A4A4A] text-base">
        {/* Equal Opportunity Lender */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Equal Opportunity Lender
          </h2>
          <p>
            Creek Lend is an Equal Opportunity Lender and is committed to fair
            lending practices. We provide equal access to credit for all
            qualified borrowers regardless of race, color, religion, national
            origin, sex, marital status, age (provided the applicant has the
            capacity to enter into a binding contract), familial status,
            disability, or because all or part of the applicant's income derives
            from any public assistance program.
          </p>
        </div>

        {/* Compliance with Fair Lending Laws */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Compliance with Fair Lending Laws
          </h2>
          <p>
            We comply with all applicable fair lending laws and regulations,
            including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#1458ea]">
            <li>
              <strong className="text-[#111827]">
                Equal Credit Opportunity Act (ECOA):
              </strong>{" "}
              Prohibits discrimination in any aspect of a credit transaction.
            </li>
            <li>
              <strong className="text-[#111827]">Fair Housing Act:</strong>{" "}
              Prohibits discrimination in residential real estate-related
              transactions.
            </li>
            <li>
              <strong className="text-[#111827]">
                Community Reinvestment Act (CRA):
              </strong>{" "}
              Encourages financial institutions to meet the credit needs of all
              communities they serve.
            </li>
            <li>
              <strong className="text-[#111827]">
                Home Mortgage Disclosure Act (HMDA):
              </strong>{" "}
              Requires collection and reporting of lending data.
            </li>
          </ul>
        </div>

        {/* Our Lending Principles */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Our Lending Principles
          </h2>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#1458ea]">
            <li>
              <strong className="text-[#111827]">Objective Criteria:</strong>{" "}
              All lending decisions are based on objective, credit-related
              factors including credit history, income, employment stability,
              and debt-to-income ratio.
            </li>
            <li>
              <strong className="text-[#111827]">
                Consistent Application:
              </strong>{" "}
              We apply the same lending standards to all applicants regardless
              of protected characteristics.
            </li>
            <li>
              <strong className="text-[#111827]">Transparent Terms:</strong> All
              loan terms, rates, and fees are clearly disclosed before you
              accept an offer.
            </li>
            <li>
              <strong className="text-[#111827]">Responsible Lending:</strong>{" "}
              We assess each borrower's ability to repay and do not make loans
              that we believe a borrower cannot reasonably repay.
            </li>
          </ul>
        </div>

        {/* Filing a Complaint */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Filing a Complaint
          </h2>
          <p>
            If you believe you have been discriminated against in connection
            with a credit transaction, you may file a complaint with:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#1458ea]">
            <li>
              <strong className="text-[#111827]">
                Consumer Financial Protection Bureau (CFPB):
              </strong>{" "}
              <a
                href="https://www.consumerfinance.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1458ea] hover:underline"
              >
                consumerfinance.gov
              </a>
            </li>
            <li>
              <strong className="text-[#111827]">
                U.S. Department of Housing and Urban Development (HUD)
              </strong>
            </li>
            <li>
              <strong className="text-[#111827]">
                Your state's Attorney General office
              </strong>
            </li>
            <li>
              <strong className="text-[#111827]">Lendbox directly:</strong>{" "}
              <a
                href="mailto:support@lendbox.us"
                className="text-[#1458ea] hover:underline"
              >
                support@lendbox.us
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
