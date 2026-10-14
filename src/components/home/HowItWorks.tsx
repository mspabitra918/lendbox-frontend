const steps = [
  {
    title: "Apply for a Personal Loan",
    text: "Complete the application form with your personal details and required documents.",
  },
  {
    title: "Review by Our Team",
    text: "Our team will review your application and verify the information provided.",
  },
  {
    title: "Get Your Funds",
    text: "Once your loan is approved, the funds will be disbursed to your bank account.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">Start lending in 4 simple steps</h2>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-lg font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
