const faqs = [
  {
    q: "How does Lendbox manage the risk of lending?",
    a: "Every borrower goes through a multi-step credit assessment. Your funds are diversified across many borrowers in the risk category you choose, which limits the impact of any single default.",
  },
  {
    q: "Are there any fees for lenders?",
    a: "Lendbox charges a transparent platform fee that is shown upfront before you lend. Refer to the Pricing & Fees document for the complete schedule.",
  },
  {
    q: "What happens to my money if the platform shuts down?",
    a: "Loan agreements and servicing arrangements are managed through transparent legal documentation and regulated third-party payment infrastructure. We prioritize disclosures, record retention, and borrower servicing continuity across all operating scenarios.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 py-20">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Frequently asked questions</h2>
        </div>
        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
