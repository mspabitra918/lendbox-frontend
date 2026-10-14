import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Terms & Conditions | Lendbox",
  description: "Terms and conditions of use for Lendbox",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Blue Header Banner */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Privacy Policy
          </h1>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            {
              label: "Privacy Policy",
            },
          ]}
        />
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-12 leading-relaxed text-[#4A4A4A] text-base">
        <div className="my-10 space-y-6">
          <p>
            Lendbox USA, Inc. is committed to protecting your privacy and the
            personal information you entrust to us. This Privacy Policy explains
            our commitment and how we collect, retain, and use information in
            connection with our lending and financial services. It applies to all
            users and should be read alongside our Terms & Conditions. In the
            event of a conflict, this Privacy Policy governs the handling of
            personal data. We may update this policy from time to time, and your
            continued use of our services indicates your acceptance of the current
            version.
          </p>
        </div>

        {/* Eligibility Section */}
        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            What information do we collect and how is it used?
          </h2>

          <p>
            We collect personal and financial information about you when you
            provide it to us. For example, when you create a borrower or investor
            account, we may collect your name, date of birth, Social Security
            number or ITIN, mailing address, email address, phone number, bank
            account details, employment information, income documentation,
            identity verification records, credit profile data, and any other
            information provided in the application or servicing process.
          </p>

          <p>
            This information is necessary to provide our services, assess
            financial stability, verify identity, complete credit evaluation, and
            administer accounts in compliance with applicable law.
          </p>

          <p>
            We may also request supporting documentation such as a driver's
            license, passport, utility bill, tax documents, bank statements, or
            other information needed to complete verification and underwriting.
          </p>
          <p>
            Some information is required for account creation and servicing,
            while other information may be provided voluntarily. We also collect
            information about account balances, payment history, and program
            activity to manage your relationship and meet legal obligations.
          </p>
          <p>
            We may also collect technical information such as IP addresses,
            browser type, device information, and operating system details to
            improve the platform, prevent fraud, and support troubleshooting and
            security monitoring.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            We may also collect certain information from your device through our
            mobile application/s. The details of information collected is as
            follows:
          </h2>

          <ol className="list-decimal pl-5 space-y-6 text-[#374151]">
            {/* 2. Contact Information */}
            <li className="pl-2">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Contact Information
              </h3>
              <div className="space-y-3">
                <p>
                  Up to three reference contacts are required prior to loan
                  approval and disbursement. To facilitate quick form
                  autofilling and conduct risk assessments, our app asks for
                  consent to gather contact details such as name, phone number,
                  last modified timestamp, account type, favorites, and optional
                  fields like address and relationship.
                </p>
                <p>
                  Additionally, this information enables seamless sharing of
                  application invitations through our referral program.
                </p>
              </div>
            </li>

            {/* 3. Device Location and Device Information */}
            <li className="pl-2">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Device Location and Device Information
              </h3>
              <div className="space-y-3">
                <p>
                  Location monitoring permission is requested to confirm service
                  availability, verify address details, and streamline the
                  identity verification (KYC) procedure.
                </p>
                <p>
                  Data gathering preferences can be managed directly via system
                  settings. Collected details are bound to unique device
                  identifiers following user approval.
                </p>
                <p>
                  Technical metrics captured include hardware specs (model, RAM,
                  storage, build), persistent identifiers (IMEI, serial number,
                  SSAID), network details (carrier, roaming state, MNC/MCC
                  codes), and connectivity attributes (MAC address, Wi-Fi info).
                </p>
                <p>
                  This hardware profile protects against unauthorized access,
                  prevents fraudulent activity, facilitates system updates, and
                  ensures account integrity.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Sensitive personal data or information
          </h2>

          <p>
            For the purposes of this Privacy Policy, information that qualifies
            for specialized protection includes passwords, financial account
            information, health information, biometric information, and other
            data we collect to provide lending and account servicing.
          </p>

          <p>
            Information that is lawfully available in the public domain or
            otherwise disclosed under applicable U.S. law shall not be treated
            as sensitive personal data and will not be subject to the same
            safeguards and protections.
          </p>

          <p>
            The user, by providing us with the details (while registration etc.)
            shall be assumed to have expressly consented to furnish such
            information to us of his/her own free will and also that he/she
            acknowledges the fact that the data furnished shall be retained in
            our database for as long as it is required for the purpose for which
            the information has been furnished. By providing the sensitive
            personal information, the user also acknowledges to be aware of the
            purpose for which the information has been furnished and will be
            utilized as such.
          </p>
          <p>
            We will not be responsible for the authenticity of the personal
            information or sensitive personal data or information supplied by
            the user to us.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Disclosure of information
          </h2>

          <p>
            We do not disclose the sensitive personal data or information
            provided to us, to any third party, except i) with express prior
            permission of the user whose information is being disclosed; ii) if
            such disclosure is necessary for compliance of a legal obligation.
          </p>

          <p>
            The information can only be shared by us without prior consent when
            required by law, court order, regulatory inquiry, or government
            authority acting within the scope of applicable legal authority.
          </p>

          <p>
            Information provided by users may be viewed or accessed by us, our
            affiliates, our service providers, or our auditors for legitimate
            operational, compliance, or security purposes. Our staff can also
            access this information to resolve a problem, address a support
            issue, investigate a suspected violation of the Terms & Conditions,
            or as otherwise required by law.
          </p>
          <p>
            We may provide certain information to our channel partners and
            third-party intermediaries that manage credit or debit card
            processing and perform financial analysis and credit assessment.
            Such intermediaries are solely a link in the distribution chain, and
            are not permitted to store, retain, or use the information provided,
            except for the sole purpose of credit card and/or debit card
            processing.
          </p>
          <p>
            Our employees and any third-party intermediaries that have access to
            information described herein are subject to a non-disclosure
            agreement or policy consistent with the terms in this Privacy
            Statement.
          </p>
          <p>
            We undertake that the information of the users shall be used, only
            for purposes related to the services provided by us and nothing
            else. We will stop using the information and will either terminate
            or return the said information, as agreed, within thirty days of the
            termination of the agreement between us and a user.
          </p>
          <p>
            Whenever we obtain your personal information, we use commercially
            reasonable efforts to protect it from unauthorized access or
            disclosure. However, we are not insurers of the security of your
            personal information. Accordingly, we assume no liability for any
            disclosure of data due to errors in transmission, unauthorized third
            party access or other acts of third parties, or acts or omissions
            beyond our reasonable control.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            How can you correct or update your information?
          </h2>

          <p>
            Users can update or change their information by contacting us or by
            following the instructions provided on our website for updating or
            changing the information furnished by them.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Your Privacy Controls
          </h2>

          <p>
            For the purposes of this Privacy Policy, information that qualifies
            for protection includes passwords, financial account details, health
            information, biometric identifiers, and other sensitive data we
            collect in connection with lending, account servicing, and identity
            verification.
          </p>

          <p>
            Information that is lawfully available in the public domain or
            otherwise disclosed under applicable U.S. law shall not be treated
            as sensitive personal data and will not be subject to the same
            safeguards and protection measures.
          </p>

          <p>
            By providing information during registration or account setup, you
            confirm that the information is accurate and authorize us to retain,
            process, and use it for the purposes described in this Privacy
            Policy. We will not be responsible for the authenticity of personal
            information supplied by the user to us.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Withdrawal Of Consent
          </h2>

          <p>
            A user can anytime withdraw his/her consent for the retention and
            usage of his/her personal information by us. However, the user shall
            then, not be eligible to avail the service/s for which the
            information was furnished.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">Security</h2>

          <p>
            We are committed to having security measures in place to help
            protect against the loss, misuse and alteration of the data in our
            database. We have complied with reasonable security practices and
            procedures, and have a comprehensively documented information
            security programme and information securing policies. We intend to
            protect your information and to maintain its accuracy as confirmed
            by you. We implement reasonable physical, administrative and
            technical safeguards to help us protect your information from
            unauthorized access, use and disclosure. For example, we encrypt all
            information when we transmit over the internet. We also require that
            our registered third party service providers protect such
            information from unauthorized access, use and disclosure.
          </p>
          <p>
            Our platform maintains stringent security measures to protect data
            from loss, misuse, and alteration. We endeavor to safeguard the
            information provided by you and use secure transport and storage
            controls consistent with industry standards and applicable law.
          </p>
          <p>
            We blend security at multiple steps within our products with the
            state of the art technology to ensure our systems maintain strong
            security measures and the overall data and privacy security design
            allow us to defend our systems ranging from low hanging issues up to
            sophisticated attacks.
          </p>

          <p>
            We work hard to protect you from unauthorized access, alteration,
            disclosure or destruction of information we hold, including:
          </p>

          <ol className="list-decimal pl-5 space-y-6 text-[#374151]">
            {/* 2. Contact Information */}
            <li className="pl-2">
              <div className="space-y-3">
                <p>
                  We use encryption to keep your data private while in transit;
                </p>
              </div>
            </li>

            {/* 3. Device Location and Device Information */}
            <li className="pl-2">
              <div className="space-y-3">
                <p>We ensure that SSN number is not disclosed in any manner</p>
              </div>
            </li>
            <li className="pl-2">
              <div className="space-y-3">
                <p>
                  We review our information collection, storage, and processing
                  practices, including physical security measures, to prevent
                  unauthorized access to our systems;
                </p>
              </div>
            </li>
          </ol>

          <p>
            We or our affiliates maintain information on servers located in the
            United States and may use service providers in other jurisdictions
            when necessary to support operations. We take reasonable steps to
            protect data in transit and at rest and comply with applicable U.S.
            privacy and data protection requirements.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">Cookies</h2>
          <p>
            We use cookies, which are small files that are stored by your
            browser on your computer's hard drive. This information allows us to
            process your online transactions and requests and to help us make
            sure you are who you say you are after you've signed into a
            password-protected area of one of our websites. Cookies are required
            in order to use password-protected services on our website.
          </p>
        </div>
      </main>
    </div>
  );
}
