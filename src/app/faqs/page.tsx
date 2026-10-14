"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How is the monthly EMI calculated for my loan?",
    answer:
      "EMI is calculated using the standard formula: E = [P x R x (1+R)^N]/[(1+R)^N-1], where P is the Principal amount, R is the monthly interest rate, and N is the tenure in months. Our calculator automates this calculation instantly.",
  },
  {
    id: 2,
    question: "Can I adjust the interest rate or is it fixed at 10%?",
    answer:
      "The base calculator uses our standard fixed 10% APR rate. However, actual approved rates may vary depending on your credit score, income verification, and chosen tenure.",
  },
  {
    id: 3,
    question: "Are there any hidden charges or processing fees?",
    answer:
      "No. All applicable processing fees, prepayment penalties, and service terms are clearly outlined in your loan offer before you sign.",
  },
  {
    id: 4,
    question: "Can I choose custom loan tenures like 18 or 30 months?",
    answer:
      "Our standard plan options offer structured 12, 24, 36, 48, and 60-month tenures to give you optimal repayment rates. Custom tenures can be discussed with an advisor during final processing.",
  },
  {
    id: 5,
    question: "How quickly will I receive the funds after applying?",
    answer:
      "Once your application and verification documents are submitted, loan approvals typically take less than 24 hours, with funds disbursed directly to your account shortly after.",
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Banner Section */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Frequently Asked Questions",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-10 leading-relaxed text-[#4A4A4A] text-base">
        <div className="max-w-6xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50 border-[#1458ea]/30 shadow-md ring-1 ring-[#1458ea]/20"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#111827] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#1458ea] text-white rotate-180"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6 px-5 sm:px-6"
                      : "grid-rows-[0fr] opacity-0 pb-0 px-5 sm:px-6"
                  }`}
                >
                  <div className="overflow-hidden text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Still have questions?{" "}
            <a
              href="/contact"
              className="font-bold text-[#1458ea] hover:underline"
            >
              Contact our loan support team
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
