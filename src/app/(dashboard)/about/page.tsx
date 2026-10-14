import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "About Us | Lendbox - Smart Digital Lending Platform",
  description:
    "Learn about Lendbox's mission to revolutionize peer-to-peer lending and personal finance through cutting-edge technology, transparency, and trust.",
};

const stats = [
  { label: "Registered Borrowers", value: "500,000+" },
  { label: "Total Disbursed", value: "$1,500+ Cr" },
  { label: "Partner Investors", value: "50,000+" },
  { label: "Average Approval Time", value: "24 Hours" },
];

const values = [
  {
    title: "Complete Transparency",
    description:
      "No hidden fees, no opaque terms. We ensure full clarity across all interest rates, repayment schedules, and processing fees.",
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "Our proprietary credit underwriting algorithms assess risk dynamically, enabling instant approvals and secure digital KYC.",
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
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Fair Lending Standards",
    description:
      "We champion inclusive credit access, empowering credit-deserving individuals and investors with balanced, equitable financial growth.",
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
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Banner Section */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-white">
            About Lendbox
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Transforming the Future of Lending
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            We are building a transparent, technology-driven ecosystem
            connecting credit-worthy borrowers with smart investors.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "About Us",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-12 leading-relaxed text-[#4A4A4A] text-base space-y-16">
        {/* Story & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Our Mission & Vision
            </h2>
            <p>
              Founded with the belief that traditional financial institutions
              often overlook reliable individuals and high-potential borrowers,
              Lendbox leverages peer-to-peer (P2P) architecture to make lending
              efficient, direct, and mutually beneficial.
            </p>
            <p>
              By eliminating heavy institutional middlemen, we pass on better
              interest rates to borrowers while generating attractive
              risk-adjusted returns for investors.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQE5EveiDyE-RdC21moRk-aen8yimE5dShJS1T5KFJmA_AOatQZXD7bc6wnlOnCMMCFn7DjzmIrOwePk3U"
              alt="Lendbox Team Collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1458ea]">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Core Values Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              What Drives Us Forward
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Core pillars guiding every product we build and every loan we
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 bg-blue-50 rounded-lg inline-block">
                  {val.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1458ea] to-[#679cf6] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Experience Smarter Lending?
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Join thousands of satisfied borrowers and investors on Lendbox
              today.
            </p>
          </div>
          <Link
            href="/borrower/register"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1458ea] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
