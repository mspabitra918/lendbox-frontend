import Link from "next/link";

export default function Partner() {
  return (
    <section id="partner" className="scroll-mt-28 bg-slate-50 py-20">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-100">
          <p className="eyebrow">Partner with us</p>
          <h2 className="section-title">Help your users lend their money</h2>
          <p className="mt-4 text-slate-600">
            Fintech platforms, wealth managers, and advisors can offer consumer loan and investment
            opportunities to their users through our partner integrations.
          </p>
          <Link href="#" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:gap-3 transition-all">
            Learn More <span aria-hidden>→</span>
          </Link>
        </div>

        <figure className="flex flex-col justify-between rounded-3xl bg-navy p-10 text-white">
          <svg viewBox="0 0 24 24" className="h-10 w-10 text-accent" fill="currentColor" aria-hidden>
            <path d="M9.6 6C6.5 7.4 4.6 10 4.6 13.4V18h6v-6H7.4c.2-2 1.4-3.5 3.3-4.4L9.6 6zm9 0c-3.1 1.4-5 4-5 7.4V18h6v-6h-3.2c.2-2 1.4-3.5 3.3-4.4L18.6 6z" />
          </svg>
          <blockquote className="mt-6 text-lg leading-relaxed text-slate-200">
            “Lendbox is transparent and very easy to use. I can see exactly where my money is
            and the returns have been consistent.”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent font-bold text-navy">KK</span>
            <span>
              <span className="block font-semibold">Dr. Karishma Khosla</span>
              <span className="block text-sm text-slate-400">New York, NY</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
