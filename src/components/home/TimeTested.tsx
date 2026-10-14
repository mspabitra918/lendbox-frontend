const milestones = [
  { year: "2015", text: "Lendbox founded" },
  { year: "2019", text: "U.S. market expansion" },
  { year: "New York", text: "Headquartered" },
];

export default function TimeTested() {
  return (
    <section id="about" className="scroll-mt-28 bg-navy py-20 text-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-accent!">Time tested</p>
          <h2 className="section-title text-white!">The ultimate boost for your lending portfolio</h2>
          <p className="mt-5 max-w-lg text-slate-300">
            Founded in 2015, Lendbox has built a strong track record in digital underwriting,
            borrower screening, and transparent loan servicing for the U.S. market.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.year} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-2xl font-extrabold text-accent">{m.year}</p>
              <p className="mt-2 text-sm text-slate-300">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
