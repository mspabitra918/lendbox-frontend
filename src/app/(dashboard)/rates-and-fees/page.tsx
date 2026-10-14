import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Rates & Fees | Transparent Loan Pricing | Lendbox",
  description:
    "Explore Lendbox's transparent interest rates, processing fees, repayment tenures, and zero hidden charges for all loan products.",
};

const feeStructure = [
  {
    category: "Interest Rate (APR)",
    details: "Fixed at 10% per annum across standard approved loans",
    notes: "Subject to credit evaluation and risk profiling",
  },
  {
    category: "Processing Fee",
    details: "1% to 3% of the sanctioned loan amount + GST",
    notes: "Deducted upfront from disbursal amount",
  },
  {
    category: "Prepayment / Foreclosure",
    details: "0% to 4% depending on tenure completed",
    notes: "Nil charges after 12 successful EMI payments",
  },
  {
    category: "Late Payment Charges",
    details: "$5 or 2% per month on overdue EMI (whichever is higher)",
    notes: "Applied strictly on delayed installments",
  },
  {
    category: "Loan Tenure Options",
    details: "Strictly 12, 24, 36, 48, and 60 months",
    notes: "Flexible selection aligned with your monthly budget",
  },
];

export default function RatesAndFeesPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Banner Section */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-white">
            Transparent Pricing
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Rates and Fees
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Complete transparency on every interest rate, fee structure, and
            repayment charge. No hidden costs, ever.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Rates and Fees",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-10 leading-relaxed text-[#4A4A4A] text-base space-y-12">
        {/* Overview & Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Fair, Predictable Financial Terms
            </h2>
            <p>
              At Lendbox, we believe that borrowing should be straightforward.
              Our standard lending model operates on a fixed{" "}
              <strong className="text-[#1458ea]">
                10% annual interest rate
              </strong>{" "}
              with standardized tenures of 12, 24, 36, 48, and 60 months.
            </p>
            <p>
              Every fee, statutory charge, and prepayment condition is
              explicitly outlined in your Key Fact Statement (KFS) before you
              sign your loan agreement.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/076/165/097/non_2x/handshake-documents-and-business-people-meeting-partnership-and-b2b-in-thank-you-success-or-finance-deal-corporate-man-or-manager-shaking-hands-in-financial-agreement-or-stats-collaboration-above-photo.jpg"
              alt="Transparent financial agreement partnership"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Rates & Fees Table */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#111827]">
            Detailed Fee Schedule
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white text-sm md:text-base">
              <thead>
                <tr className="bg-slate-100 text-[#111827] border-b border-slate-200 font-bold">
                  <th className="p-4 sm:p-5">Fee / Parameter</th>
                  <th className="p-4 sm:p-5">Structure</th>
                  <th className="p-4 sm:p-5">Terms & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {feeStructure.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-[#111827]">
                      {row.category}
                    </td>
                    <td className="p-4 sm:p-5 text-[#1458ea] font-medium">
                      {row.details}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 text-sm">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#1458ea] to-[#679cf6] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Calculate Your Monthly EMI?
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Use our interactive calculator with our fixed 10% rate and allowed
              12-60 month tenures.
            </p>
          </div>
          <Link
            href="/emi-calculator"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1458ea] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
          >
            Open EMI Calculator
          </Link>
        </div>
      </main>
    </div>
  );
}
