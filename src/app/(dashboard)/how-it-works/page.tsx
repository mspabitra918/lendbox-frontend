import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "How It Works | Simple 4-Step Loan Process | Lendbox",
  description:
    "Learn how easy it is to secure a loan on Lendbox. From online application to instant approval and fast bank disbursal in 4 simple steps.",
};

const steps = [
  {
    stepNumber: "01",
    title: "Apply for a Personal Loan",
    description:
      "Complete the application form with your personal details and required documents.",
  },
  {
    stepNumber: "02",
    title: "Review by Our Team",
    description:
      "Our team will review your application and verify the information provided.",
  },
  {
    stepNumber: "03",
    title: "Get Your Funds",
    description:
      "Once your loan is approved, the funds will be disbursed to your bank account.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Banner Section */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-white">
            Simple & Fast
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            How It Works
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Experience hassle-free digital lending designed to get you funds
            when you need them most in just 4 straightforward steps.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "How It Works",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-10 leading-relaxed text-[#4A4A4A] text-base space-y-16">
        {/* Overview & Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              A Streamlined Digital Lending Journey
            </h2>
            <p>
              At Lendbox, we have removed the friction, paperwork, and long wait
              times associated with traditional banks. Our platform connects you
              with the right financial product using advanced automation.
            </p>
            <p>
              Whether you are applying for a small personal loan, debt
              consolidation, or a consumer durable loan, our steps remain fast,
              secure, and transparent.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTL-C8ZdFauClTAkJUR0mfdNLZlfhHdX8WCOAPVMCuyx-yQOgco2nO5LeitcgyoBjDQMRSS4AmVW_t-is4"
              alt="Digital loan application process steps"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Step-by-Step Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              4 Easy Steps to Your Loan
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              From application to cash in your bank account.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4 hover:shadow-md transition-shadow relative"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1458ea] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                  {item.stepNumber}
                </div>
                <h4 className="text-lg font-bold text-[#111827]">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#1458ea] to-[#679cf6] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Calculate your monthly EMIs or apply online in less than 5
              minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/borrower/register"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-[#1458ea] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
            >
              Apply Now
            </Link>
            <Link
              href="/emi-calculator"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              EMI Calculator
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
