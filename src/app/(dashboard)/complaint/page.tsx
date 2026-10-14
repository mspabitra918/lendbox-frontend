"use client";

import React, { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function RaiseComplaintPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    loanId: "",
    category: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission handling
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Banner Section */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-white">
            Customer Support
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Raise a Complaint / Grievance
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            We are committed to resolving your concerns promptly. Submit your
            issue below, and our support team will get back to you within 24–48
            hours.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Raise a Complaint",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-10 leading-relaxed text-[#4A4A4A] text-base">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Complaint Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#111827]">
                  Complaint Registered Successfully
                </h3>
                <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto">
                  Thank you for reaching out. Your ticket has been logged and
                  assigned reference ID{" "}
                  <strong className="text-[#1458ea]">
                    #LB-{Math.floor(100000 + Math.random() * 900000)}
                  </strong>
                  . Our team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#1458ea] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Raise Another Complaint
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-bold text-[#111827] border-b border-slate-200 pb-3">
                  Submit Your Grievance Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#111827]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1458ea] bg-white text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#111827]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1458ea] bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#111827]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1458ea] bg-white text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#111827]">
                      Loan ID / Application Ref (Optional)
                    </label>
                    <input
                      type="text"
                      name="loanId"
                      value={formData.loanId}
                      onChange={handleChange}
                      placeholder="E.g., LB-12345"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1458ea] bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#111827]">
                    Issue Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1458ea] bg-white text-sm cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Loan Disbursement">
                      Loan Disbursement Issue
                    </option>
                    <option value="EMI & Repayment">
                      EMI & Repayment Query
                    </option>
                    <option value="Document Verification">
                      Document & KYC Verification
                    </option>
                    <option value="Unauthorized Transaction">
                      Unauthorized Transaction
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#111827]">
                    Detailed Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your issue in detail..."
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1458ea] bg-white text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1458ea] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Submit Complaint
                </button>
              </form>
            )}
          </div>

          {/* Grievance Escalation Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRniirLgdeAnkKo1_J_O_CamKO5gMaJgmT3OPcDbNbnASO0ysKRlmjcC_-b1eF5ZC1HjoRpjG6dZJ9jbmk"
                alt="Customer Support Assistance"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-[#111827]">
                Grievance Escalation Matrix
              </h3>
              <p className="text-sm text-slate-600">
                If your issue is not resolved to your satisfaction through the
                standard form, you can escalate it through our multi-tier
                redressal structure:
              </p>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                  <p className="font-bold text-[#111827]">
                    Level 1: Customer Support
                  </p>
                  <p className="text-slate-600">
                    support@lendbox.example | Response within 24 hours
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                  <p className="font-bold text-[#111827]">
                    Level 2: Grievance Officer
                  </p>
                  <p className="text-slate-600">
                    grievance@lendbox.example | Response within 3 business days
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                  <p className="font-bold text-[#111827]">
                    Level 3: Nodal Officer
                  </p>
                  <p className="text-slate-600">
                    nodal@lendbox.example | Response within 7 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
