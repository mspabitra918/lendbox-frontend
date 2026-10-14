import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does Lendbox manage the risk of default?",
    answer:
      "Lendbox follows a robust credit assessment policy to bring only the most creditworthy borrowers to the platform. We categorize borrowers by risk in a manner that reduces the risk of capital erosion for our lenders.",
  },
  {
    question: "How much fees will I have to pay?",
    answer:
      "Platform fees for this issue would be deducted from the 1st EMI repayment and the net amount will be settled into your bank account.",
  },
  {
    question: "What if Lendbox closes its doors?",
    answer:
      "We are committed to long-term operation and clear borrower and investor documentation. In the event of an unexpected closure, all contractual loan terms and servicing obligations remain governed by the applicable agreements and operating procedures in place at the time.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
            Any questions?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            If you need help getting started, managing your portfolio or if
            you're wondering whether Lendbox is the right choice for you, these
            frequently asked questions may help.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Read More Link */}
        <div>
          <Link
            href="/faqs"
            className="inline-flex items-center text-base font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4 transition-colors"
          >
            Read more FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
