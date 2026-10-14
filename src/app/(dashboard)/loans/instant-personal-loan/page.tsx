import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Instant Personal Loan Online | Fast Approval & Disbursal | Lendbox",
  description:
    "Apply for instant personal loans up to $10,00,000 with low interest rates, minimal documentation, and fast approval directly to your bank account with Lendbox.",
};

const loanFeatures = [
  {
    title: "100% Paperless Process",
    description:
      "Apply online, upload digital KYC documents, and complete your verification in minutes without visiting any physical branch.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Instant Disbursal",
    description:
      "Once approved, your loan amount is transferred directly to your registered savings bank account within 24 hours.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Repayment",
    description:
      "Choose repayment tenures ranging from 3 to 36 months with affordable EMIs tailored to your monthly cash flows.",
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "No Hidden Charges",
    description:
      "Complete transparency with zero hidden costs. All processing fees and interest rates are clearly disclosed upfront in your KFS.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function InstantPersonalLoanPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans antialiased">
      {/* Header Banner with Hero Image */}
      <section className="bg-gradient-to-b from-[#679cf6] from-[5%] to-[#1458ea] to-[95%] text-white py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase text-white">
              Fast & Secure Funding
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Instant Personal Loans Up To $10,00,000
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Get fast digital approvals, competitive interest rates, and direct
              bank transfers for medical emergencies, travel, education, or debt
              consolidation.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/borrower/register"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#1458ea] font-semibold text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                href="/emi-calculator"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-white/40 text-white font-medium text-base hover:bg-white/10 transition-colors"
              >
                Calculate EMI
              </Link>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
              alt="Instant Personal Loan Application"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="max-w-6xl mx-auto px-6 md:px-2 pt-6">
        <Breadcrumb
          items={[
            {
              label: "Instant Personal Loan",
            },
          ]}
        />
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-2 py-12 leading-relaxed text-[#4A4A4A] text-base">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Why Choose Lendbox for Personal Loans?
            </h2>
            <p>
              Lendbox provides access to instant credit with transparent
              pricing, minimal documentation, and zero physical paperwork.
              Whether you need funds for urgent home repairs, medical expenses,
              or personal milestones, our digital platform guarantees a smooth
              experience.
            </p>
            <p>
              Our automated credit risk assessment engine verifies your details
              rapidly, allowing us to extend credit solutions tailored to your
              financial profile.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              alt="Digital Personal Loan Approval"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Core Features Grid */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-bold text-[#111827]">
            Key Loan Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 bg-blue-50 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria & Required Documents */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-[#111827]">
              Eligibility Criteria
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 marker:text-[#1458ea] text-sm md:text-base">
              <li>
                <strong className="text-[#111827]">Residency:</strong> Must be a
                US resident.
              </li>
              <li>
                <strong className="text-[#111827]">Age:</strong> Must be at
                least 18 years old or the age of majority in your state.
              </li>
              <li>
                <strong className="text-[#111827]">Employment:</strong> Employed
                or self-employed with a verifiable source of income.
              </li>
              <li>
                <strong className="text-[#111827]">Income:</strong> Must meet
                the lender's minimum income requirements.
              </li>
              <li>
                <strong className="text-[#111827]">Bank Account:</strong> An
                active US bank account that supports electronic transactions.
              </li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-[#111827]">
              Required Documents
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 marker:text-[#1458ea] text-sm md:text-base">
              <li>
                <strong className="text-[#111827]">
                  Social Security Number (SSN):
                </strong>{" "}
                For identity verification and applicable credit checks.
              </li>
              <li>
                <strong className="text-[#111827]">
                  Government-Issued ID:
                </strong>{" "}
                A valid driver's license, state ID, or other accepted
                identification.
              </li>
              <li>
                <strong className="text-[#111827]">Proof of Address:</strong> A
                recent utility bill, lease agreement, or bank statement.
              </li>
              <li>
                <strong className="text-[#111827]">Bank Statements:</strong>{" "}
                Your latest three months of bank statements.
              </li>
              <li>
                <strong className="text-[#111827]">Income Proof:</strong> Recent
                pay stubs, W-2 forms, or other accepted income verification
                documents.
              </li>
            </ul>
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="mt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              How to Apply in 4 Simple Steps
            </h2>
            <p className="text-slate-600">
              Complete your loan application online in under 10 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 space-y-2 bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1458ea] text-white flex items-center justify-center font-bold mx-auto text-lg">
                1
              </div>
              <h4 className="font-semibold text-[#111827]">
                Apply for a Personal Loan
              </h4>
              <p className="text-xs text-[#4A4A4A]">
                Complete the loan application form with your personal details
                and required documents.
              </p>
            </div>

            <div className="text-center p-6 space-y-2 bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1458ea] text-white flex items-center justify-center font-bold mx-auto text-lg">
                2
              </div>
              <h4 className="font-semibold text-[#111827]">
                Review by Our Team
              </h4>
              <p className="text-xs text-[#4A4A4A]">
                Our team reviews your application and verifies the information
                provided before making a lending decision.
              </p>
            </div>

            <div className="text-center p-6 space-y-2 bg-white rounded-xl border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1458ea] text-white flex items-center justify-center font-bold mx-auto text-lg">
                3
              </div>
              <h4 className="font-semibold text-[#111827]">Get Your Funds</h4>
              <p className="text-xs text-[#4A4A4A]">
                Once your loan is approved, the funds are transferred directly
                to your bank account.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1458ea] to-[#679cf6] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Get Your Instant Loan?
            </h3>
            <p className="text-blue-100 text-sm md:text-base">
              Check your eligibility in less than 2 minutes without impacting
              your credit score.
            </p>
          </div>
          <Link
            href="/borrower/register"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1458ea] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md whitespace-nowrap"
          >
            Apply Instantly
          </Link>
        </div>
      </main>
    </div>
  );
}
