import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Security Policy | Lendbox",
  description:
    "Security practices, data protection measures, and information security standards at Lendbox.",
};

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Blue Header Banner */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Security Policy
          </h1>
          <p className="mt-2 text-blue-100 text-base md:text-lg">
            Our commitment to safeguarding your data and financial
            infrastructure
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Security Policy",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-12 leading-relaxed text-[#4A4A4A] text-base">
        {/* Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Security Commitment
          </h2>
          <p>
            Lendbox USA, Inc. prioritizes the security and privacy of user data
            above all else. As a platform handling financial and sensitive
            personal information, we employ industry-leading defense-in-depth
            strategies, robust encryption protocols, and strict access controls
            to protect our systems from unauthorized access, data loss, or
            disclosure.
          </p>
        </div>

        {/* Security Pillars */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Core Security Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
              <h3 className="text-lg font-semibold text-[#111827]">
                Data Encryption
              </h3>
              <p className="text-sm text-[#4A4A4A]">
                All data transmitted between your browser or app and our servers
                is protected using Secure Sockets Layer (SSL) / TLS 1.3
                encryption. Sensitive data stored at rest is protected using
                strong AES-256 bit encryption algorithms.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
              <h3 className="text-lg font-semibold text-[#111827]">
                Access Controls & Authentication
              </h3>
              <p className="text-sm text-[#4A4A4A]">
                We implement multi-factor authentication (MFA) and secure OTP
                verifications for user login. Employee access to operational
                systems is restricted via least-privilege principles and
                protected by strict NDAs.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
              <h3 className="text-lg font-semibold text-[#111827]">
                Infrastructure & Network Safeguards
              </h3>
              <p className="text-sm text-[#4A4A4A]">
                Our cloud architecture resides in secure, industry-standard data
                centers operated in the United States. We utilize Web
                Application Firewalls (WAF), DDoS protection, and network
                segmentation to mitigate external threats.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
              <h3 className="text-lg font-semibold text-[#111827]">
                Continuous Monitoring & Audits
              </h3>
              <p className="text-sm text-[#4A4A4A]">
                We perform regular Vulnerability Assessment and Penetration
                Testing (VAPT) and maintain comprehensive audit logs to ensure
                timely detection and response to anomalous activity.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Regulatory & Statutory Compliance
          </h2>
          <p>
            Our security procedures are aligned with applicable U.S. regulatory
            and industry standards, including:
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#1458ea]">
            <li>
              <strong className="text-[#111827]">
                Gramm-Leach-Bliley Act (GLBA):
              </strong>{" "}
              Safeguards to protect the confidentiality and integrity of
              customer financial information.
            </li>
            <li>
              <strong className="text-[#111827]">
                FTC Safeguards Rule:
              </strong>{" "}
              Security requirements for financial institutions handling
              consumer information.
            </li>
            <li>
              <strong className="text-[#111827]">
                State Privacy and Data Security Laws:
              </strong>{" "}
              Strict safeguards ensuring sensitive identifiers and account
              information are never improperly disclosed or stored in plain text.
            </li>
          </ul>
        </div>

        {/* User Responsibilities */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Your Role in Security
          </h2>
          <p>
            While we maintain rigorous security standards on our platform, you
            also play an essential role in safeguarding your account:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#1458ea]">
            <li>
              Never share your One-Time Password (OTP) or password with anyone.
            </li>
            <li>
              Always log out of your account when using shared or public
              devices.
            </li>
            <li>
              Maintain updated antivirus and OS security patches on your device.
            </li>
            <li>
              Report any suspicious activity or unrecognized alerts immediately.
            </li>
          </ul>
        </div>

        {/* Reporting Vulnerabilities */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">
            Reporting a Security Issue
          </h2>
          <p>
            If you discover a security vulnerability or suspect unauthorized
            activity on your account, please reach out immediately to our
            security team:
          </p>
          <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl space-y-2">
            <p>
              <strong className="text-[#111827]">
                Security Contact Email:
              </strong>{" "}
              <a
                href="mailto:support@lendbox.us"
                className="text-[#1458ea] hover:underline font-medium"
              >
                support@lendbox.us
              </a>
            </p>
            <p>
              <strong className="text-[#111827]">Support Line:</strong>{" "}
              +1 (800) 555-0199
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
