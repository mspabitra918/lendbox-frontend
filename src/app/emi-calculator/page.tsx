"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function EmiCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [tenureMonths, setTenureMonths] = useState<number>(24);
  const interestRate = 10; // Fixed interest rate at 10%

  // Calculate monthly EMI, total payment, and total interest
  const calculation = useMemo(() => {
    const principal = Number(loanAmount) || 0;
    const monthlyRate = interestRate / 12 / 100;
    const months = Number(tenureMonths) || 1;

    if (principal <= 0 || monthlyRate <= 0 || months <= 0) {
      return {
        emi: 0,
        totalInterest: 0,
        totalAmount: 0,
        interestPercentage: 0,
      };
    }

    // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayable = emiValue * months;
    const interestPayable = totalPayable - principal;
    const interestRatio = (interestPayable / totalPayable) * 100;

    return {
      emi: emiValue,
      totalInterest: interestPayable,
      totalAmount: totalPayable,
      interestPercentage: interestRatio,
    };
  }, [loanAmount, tenureMonths]);

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Banner Header */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-12 md:py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-white">
            Financial Planning Tool
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Personal Loan EMI Calculator
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Plan your monthly budget with precision. Adjust your loan amount and
            tenure to calculate your exact monthly installments at a fixed 10%
            APR.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "EMI Calculator",
            },
          ]}
        />
      </section>

      {/* Calculator Section */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-10 leading-relaxed text-[#4A4A4A] text-base">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calculator Inputs */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#111827] border-b border-slate-200 pb-3">
              Calculate Your Loan Repayment
            </h2>

            {/* Loan Amount Input & Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#111827]">
                  Loan Amount ($)
                </label>

                <div className="w-28 px-3 py-1.5 border border-slate-200 bg-slate-100 rounded-lg text-right font-semibold text-[#1458ea] cursor-not-allowed">
                  ${loanAmount.toLocaleString()}
                </div>
              </div>

              <input
                type="range"
                min="2000"
                max="50000"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-[#1458ea] cursor-pointer"
              />

              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>$2,000</span>
                <span>$50,000</span>
              </div>
            </div>

            {/* Fixed Interest Rate Display */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#111827]">
                  Interest Rate (% p.a.)
                </label>
                <div className="w-28 px-3 py-1.5 border border-slate-200 bg-slate-100 rounded-lg text-right font-semibold text-[#1458ea] cursor-not-allowed">
                  10%
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Fixed standard rate of 10% APR applied.
              </p>
            </div>

            {/* Tenure Input & Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#111827]">
                  Loan Tenure
                </label>
                <span className="text-sm font-semibold text-[#1458ea]">
                  {tenureMonths} Months ({tenureMonths / 12}{" "}
                  {tenureMonths / 12 === 1 ? "Yr" : "Yrs"})
                </span>
              </div>

              {/* Allowed Tenure Option Buttons */}
              <div className="grid grid-cols-5 gap-2">
                {[12, 24, 36, 48, 60].map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setTenureMonths(months)}
                    className={`py-2 px-1 text-xs sm:text-sm font-semibold rounded-lg border transition-all ${
                      tenureMonths === months
                        ? "bg-[#1458ea] text-white border-[#1458ea] shadow-sm"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {months} M
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1458ea] to-[#1242ac] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Calculation Output
              </span>

              <div className="space-y-1">
                <p className="text-sm text-blue-100">Monthly EMI Payable</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">
                  ${calculation.emi.toFixed(2)}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/20 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Principal Amount</span>
                  <span className="font-bold text-white">
                    ${loanAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Total Interest Payable</span>
                  <span className="font-bold text-white">
                    ${calculation.totalInterest.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Total Amount Payable</span>
                  <span className="font-bold text-white">
                    ${calculation.totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Breakdown Progress Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-blue-100">
                  <span>
                    Principal:{" "}
                    {100 - Number(calculation.interestPercentage.toFixed(2))}%
                  </span>
                  <span>
                    Interest: {calculation.interestPercentage.toFixed(2)}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden flex">
                  <div
                    style={{
                      width: `${100 - Number(calculation.interestPercentage.toFixed(2))}%`,
                    }}
                    className="bg-white"
                  ></div>
                  <div
                    style={{
                      width: `${calculation.interestPercentage.toFixed(2)}%`,
                    }}
                    className="bg-blue-300"
                  ></div>
                </div>
              </div>
            </div>

            <Link
              href="/borrower/register"
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-white text-[#1458ea] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md text-center"
            >
              Apply For This Loan
            </Link>
          </div>
        </div>

        {/* Informational Guidance */}
        <div className="mt-16 space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#111827]">
              Understanding Loan Equated Monthly Installments (EMI)
            </h2>
            <p>
              An Equated Monthly Installment (EMI) is a fixed payment amount
              made by a borrower to a lender at a specified date each calendar
              month. EMIs are applied to both interest and principal each month
              so that over a specified number of years, the loan is paid off in
              full.
            </p>
          </div>

          {/* How Formula Works */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-[#111827]">
              How is EMI Calculated?
            </h3>
            <p className="text-sm md:text-base">
              The standard mathematical formula used to calculate EMI is:
            </p>
            <div className="p-4 bg-white rounded-lg border border-slate-200 font-mono text-center text-sm md:text-base text-[#1458ea] font-bold overflow-x-auto">
              E = P × r × (1 + r)^n / ((1 + r)^n - 1)
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base marker:text-[#1458ea]">
              <li>
                <strong className="text-[#111827]">E:</strong> Equated Monthly
                Installment
              </li>
              <li>
                <strong className="text-[#111827]">P:</strong> Principal Loan
                Amount
              </li>
              <li>
                <strong className="text-[#111827]">r:</strong> Monthly interest
                rate (Annual Interest Rate / 12 / 100)
              </li>
              <li>
                <strong className="text-[#111827]">n:</strong> Loan tenure
                expressed in total number of months
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
