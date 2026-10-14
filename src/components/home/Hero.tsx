"use client";

import React, { useState } from "react";
import Link from "next/link";

const stats = [
  { value: "10%", label: "Fixed Interest p.a." },
  { value: "$10K", label: "Minimum lending" },
  { value: "2015", label: "Lending since" },
];

export default function Hero() {
  const [amount, setAmount] = useState<number>(10000);
  const [tenure, setTenure] = useState<number>(36); // Default 36 months

  // Fixed 10% annual interest rate conversion
  const annualInterestRate = 0.1;
  const monthlyInterestRate = annualInterestRate / 12;

  // EMI Calculation: [P x R x (1+R)^N] / [(1+R)^N - 1]
  const calculateEMI = () => {
    const principal = amount;
    const n = tenure;
    if (principal <= 0 || n <= 0) return 0;
    const emi =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, n)) /
      (Math.pow(1 + monthlyInterestRate, n) - 1);
    return emi;
  };

  const monthlyEMI = calculateEMI();
  const totalPayment = monthlyEMI * tenure;
  const totalInterest = Math.max(0, totalPayment - amount);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#1458ea]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#1458ea] shadow-sm ring-1 ring-[#1458ea]/15">
            <span className="h-2 w-2 rounded-full bg-blue-600" /> U.S. Lending Marketplace
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Access <span className="text-[#1458ea]">trusted credit</span> with
            Lendbox
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Flexible financing and investor opportunities designed for the U.S.
            market. Curated options for every risk profile, with transparent terms
            and competitive returns.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/borrower/register"
              className="rounded-full bg-[#1458ea] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#1458ea]/30 hover:bg-blue-700 transition-colors"
            >
              Start Lending
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full px-6 py-3.5 font-semibold text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50 transition-colors"
            >
              How it works →
            </Link>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-extrabold text-slate-900">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Interactive Calculator Card */}
        <div className="relative mx-auto w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-extrabold text-slate-900">
              Quick EMI Calculator
            </h3>
            <span className="px-3 py-1 bg-blue-50 text-[#1458ea] text-xs font-bold rounded-full">
              Fixed 10% APR
            </span>
          </div>

          <div className="space-y-6">
            {/* Loan Amount Input */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold text-slate-700">
                <span>Loan Amount</span>
                <span className="text-[#1458ea]">${amount}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="500"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-[#1458ea] cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>$2,000</span>
                <span>$50,000</span>
              </div>
            </div>

            {/* Tenure Selection (Restricted strictly to 12, 24, 36, 48, 60 months) */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold text-slate-700">
                <span>Repayment Tenure</span>
                <span className="text-[#1458ea]">
                  {tenure} Months ({tenure / 12} Yrs)
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {[12, 24, 36, 48, 60].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTenure(m)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                      tenure === m
                        ? "bg-[#1458ea] text-white border-[#1458ea] shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {m}M
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation Output Summary */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 font-medium">
                  Monthly EMI
                </span>
                <span className="text-2xl font-black text-[#1458ea]">
                  ${monthlyEMI.toFixed(2)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500">Total Interest</span>
                  <p className="font-semibold text-slate-900 mt-0.5">
                    ${totalInterest.toFixed(2)}
                  </p>
                </div>
                <div>
                  <span className="text-slate-500">Total Payable</span>
                  <p className="font-semibold text-slate-900 mt-0.5">
                    ${totalPayment.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/borrower/register"
              className="w-full block text-center py-3.5 bg-[#1458ea] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md"
            >
              Apply With This Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
