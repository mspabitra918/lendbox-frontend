import type { ReactNode } from "react";

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const benefits = [
  {
    title: "One app, full visibility",
    text: "Track your lending progress, repayments and payouts from a single app.",
    icon: icon(<><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>),
  },
  {
    title: "Consistent returns",
    text: "Steady, predictable returns across a range of curated lending products.",
    icon: icon(<><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>),
  },
  {
    title: "Dedicated relationship manager",
    text: "A real person to guide you whenever you need help with your portfolio.",
    icon: icon(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></>),
  },
  {
    title: "Top-quality borrowers",
    text: "Access borrowers vetted through a rigorous credit methodology.",
    icon: icon(<><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></>),
  },
];

export default function WhyLendbox() {
  return (
    <section id="why-lendbox" className="scroll-mt-28 bg-slate-50 py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why Lendbox</p>
          <h2 className="section-title">Lending made simple, transparent and rewarding</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">{b.icon}</span>
              <h3 className="mt-5 text-lg font-bold text-navy">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
