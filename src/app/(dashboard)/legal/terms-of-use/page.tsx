import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Terms & Conditions | Lendbox",
  description:
    "Terms and conditions of use for the Lendbox online peer-to-peer lending platform.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Blue Header Banner */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-blue-100 text-sm md:text-base">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Terms of Use",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-12 leading-relaxed text-[#4A4A4A] text-base space-y-12">
        {/* Intro Bullet List */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            1. Overview &amp; Introduction
          </h2>
          <ul className="list-disc pl-5 space-y-6">
            <li>
              <a
                href="https://www.lendbox.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A0DAB] underline hover:text-blue-700"
              >
                www.lendbox.us
              </a>{" "}
              &quot;Lendbox&quot;, &quot;We&quot;, &quot;Website&quot; or
              &quot;our&quot; is an online platform to bring together lenders
              and borrowers. The website is operated and owned by Lendbox USA,
              Inc.
            </li>

            <li>
              On this Website, a visitor could browse and search for persons who
              are willing to lend, persons who are willing to borrow, details of
              service providers such as verification agencies, collection agents
              and other such service providers that would provide services to
              either lenders or to borrowers. For the avoidance of doubt, we
              shall merely facilitate a transaction of borrowing and lending
              between two such persons. We neither lend nor borrow through the
              website. Lendbox is neither a financial institution, nor runs a
              collective investment scheme or a chit fund or any other such
              financial scheme.
            </li>

            <li>
              As a user (&quot;User&quot;, &quot;You&quot; or &quot;Your&quot;)
              of this Website, it is implied that you have read, understood and
              agreed to abide by following, disclaimer, terms &amp; conditions
              (&quot;Terms &amp; Conditions&quot;). These Terms &amp; Conditions
              together with our privacy policy as provided on the Website
              (&quot;Privacy Policy&quot;) govern your usage of the Website. By
              using the Website, you signify that you have read, understood and
              are agreeing to these Terms of Use, regardless of whether you are
              a registered member of our services. If you disagree with any part
              of these terms and conditions, please do not use the Website. The
              content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>

            <li>
              You consent to receive transactional, informational, and
              promotional communications from Lendbox via SMS, email, phone, or
              WhatsApp. You may opt out anytime using the unsubscribe
              instructions provided.
            </li>
          </ul>
        </section>

        {/* Eligibility Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            2. User Eligibility
          </h2>

          <p>
            The User of this Website declares and agrees that the User is a
            natural / legal person who has attained the age of at least 23
            years.
          </p>

          <p>
            Persons who cannot enter into a legally binding contract under
            applicable U.S. law, including persons of unsound mind or
            individuals otherwise restricted from borrowing or lending in their
            jurisdiction, are not entitled to use the Website. The User must be
            legally eligible to apply for credit or investment opportunities in
            the relevant jurisdiction and must maintain a valid bank account.
            The User is allowed to utilize the services of the Website in
            accordance with the Terms and Conditions detailed hereinafter.
          </p>

          <p>
            If the User violates any of these Terms &amp; Conditions, or
            otherwise violate an agreement entered into through the medium of
            the Website, Lendbox may, delete User&apos;s profile and any content
            or information posted by the User on the Website and/or prohibit the
            User from using or accessing the Website at any time in its sole
            discretion, with or without notice, including without limitation if
            it believes that you are under 23.
          </p>
        </section>

        {/* Account Registration & Security */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            3. Account Registration &amp; Security
          </h2>
          <p>
            To access certain features of the platform, you are required to
            register an account with Lendbox. During registration, you agree to
            provide true, accurate, current, and complete information about
            yourself as requested by the registration forms.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials (username, passwords, OTPs) and for
              restricting unauthorized access to your computer or mobile device.
            </li>
            <li>
              You agree to accept responsibility for all activities that occur
              under your account or password.
            </li>
            <li>
              You must notify Lendbox immediately upon becoming aware of any
              breach of security or unauthorized use of your account.
            </li>
            <li>
              Lendbox reserves the right to refuse service, terminate accounts,
              or edit content in its sole discretion if fraudulent activity or
              misrepresentation is detected.
            </li>
          </ul>
        </section>

        {/* Mobile Application & Device Information Collection */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            4. Information Collected Through Mobile Application
          </h2>
          <p>
            We may also collect certain information from your device through our
            mobile application/s. The details of information collected are as
            follows:
          </p>

          <ol className="list-decimal pl-5 space-y-6">
            {/* Financial SMS Information */}
            <li className="pl-2">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Financial SMS Information
              </h3>
              <div className="space-y-3">
                <p>
                  We do not read or collect your personal SMS messages from your
                  inbox.
                </p>
                <p>
                  After obtaining your explicit consent, we may collect and
                  monitor financial SMS messages you receive from 5–6 digit
                  alphanumeric senders. This assists us in assessing the
                  different bank accounts you hold and your cash flow patterns,
                  allowing us to accurately evaluate credit risk and offer
                  appropriate loan services tailored to your profile.
                </p>
                <p>
                  While using the Lendbox application, financial SMS data is
                  periodically sent to our secure servers and affiliate systems
                  for credit scoring and fraud prevention.
                </p>
              </div>
            </li>

            {/* Contact Information */}
            <li className="pl-2">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Contact Information
              </h3>
              <div className="space-y-3">
                <p>
                  Up to three references are required prior to approval and
                  disbursement of a loan. For this purpose, our app requires
                  your permission to collect and monitor contact information
                  (including contact name, phone number, last modified date,
                  account type, favorites, and optional fields such as
                  relationship and address) to enable auto-filling during the
                  loan application process and complete credit risk evaluations.
                </p>
                <p>
                  We also utilize contact details to allow seamless sharing of
                  application referral invites with your contacts when
                  requested.
                </p>
              </div>
            </li>

            {/* Device Location & Information */}
            <li className="pl-2">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Device Location &amp; Device Information
              </h3>
              <div className="space-y-3">
                <p>
                  We require your consent for collecting and monitoring location
                  data from your device to determine loan application
                  serviceability, verify your submitted physical address, and
                  expedite the Know-Your-Customer (KYC) verification workflow.
                </p>
                <p>
                  Collected technical parameters include hardware model, build
                  model, RAM, storage details, unique device identifiers (IMEI,
                  serial number, SSAID), network operator, roaming status,
                  MNC/MCC codes, MAC address, and Wi-Fi network information.
                </p>
                <p>
                  This telemetry uniquely identifies your device, provides
                  security against unauthorized account usage across unverified
                  hardware, and delivers critical product feedback.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Service Fees, Payments & Charges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            5. Fees, Commissions &amp; Charges
          </h2>
          <p>
            Lendbox charges platform registration, processing, and
            administrative fees to borrowers and lenders for accessing
            marketplace services. All applicable fees, interest rates, repayment
            schedules, and processing charges will be transparently presented to
            users prior to loan agreement execution.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              Fees paid to Lendbox for platform services, credit evaluation, or
              verification are non-refundable unless explicitly stated otherwise
              in writing.
            </li>
            <li>
              Delay in loan repayments by borrowers may incur late payment
              charges, penal interest, and recovery costs as stipulated in
              individual loan agreements.
            </li>
          </ul>
        </section>

        {/* User Conduct & Prohibited Activities */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            6. User Conduct &amp; Prohibited Actions
          </h2>
          <p>
            You agree to use the platform solely for lawful purposes. You are
            strictly prohibited from:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              Submitting false, inaccurate, misleading, or fraudulent financial
              or identity documents.
            </li>
            <li>
              Attempting to circumvent, breach, or compromise platform security,
              encryption systems, or user authentication mechanisms.
            </li>
            <li>
              Using automated scrapers, bots, or data-extraction tools to
              harvest information from the platform.
            </li>
            <li>
              Harassing, impersonating, or threatening other registered lenders,
              borrowers, or platform support personnel.
            </li>
          </ul>
        </section>

        {/* Intellectual Property Rights */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            7. Intellectual Property Rights
          </h2>
          <p>
            All content, trade names, logos, software, source code, visual
            design, graphics, and trademarks featured on Lendbox are the
            exclusive property of Lendbox USA, Inc. or its licensors.
            Unauthorized copying, modification, distribution, or reproduction of
            any material from this website without explicit written consent is
            strictly prohibited.
          </p>
        </section>

        {/* Disclaimer of Warranties & Limitation of Liability */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            8. Limitation of Liability &amp; Disclaimer
          </h2>
          <p>
            Lendbox acts strictly as a peer-to-peer marketplace connecting
            borrowers and lenders. We do not guarantee loan fulfillment, credit
            repayments, or investment returns.
          </p>
          <p>
            Under no circumstances shall Lendbox USA, Inc., its directors,
            employees, or partners be liable for direct, indirect, incidental,
            consequential, or punitive damages resulting from your use or
            inability to use the platform, including financial loss, system
            downtime, or unauthorized data access.
          </p>
        </section>

        {/* Governing Law & Dispute Resolution */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            9. Governing Law &amp; Dispute Resolution
          </h2>
          <p>
            These Terms &amp; Conditions shall be governed by and construed in
            accordance with the laws of the state and federal government of the
            United States, without regard to conflict-of-laws principles. Any
            disputes, claims, or legal actions arising out of or relating to
            your use of Lendbox shall be subject to the exclusive jurisdiction
            of the competent courts located in the United States.
          </p>
        </section>

        {/* Contact & Grievances */}
        <section className="space-y-6 pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#111827]">
            10. Grievance Redressal &amp; Contact Information
          </h2>
          <p>
            If you have any questions, concerns, or legal grievances regarding
            these Terms of Use, please reach out to our team:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-2 text-sm md:text-base">
            <p className="font-semibold text-[#111827]">
              Lendbox USA, Inc.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@lendbox.us"
                className="text-[#1A0DAB] underline"
              >
                support@lendbox.us
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.lendbox.us"
                className="text-[#1A0DAB] underline"
              >
                www.lendbox.us
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
