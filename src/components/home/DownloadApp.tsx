function StoreButton({ store, label }: { store: string; label: string }) {
  return (
    <a href="#" className="flex items-center gap-3 rounded-xl bg-navy px-5 py-3 text-white hover:bg-black">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        {store === "App Store" ? (
          <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.7 2.84-.7 1.32 0 1.7.7 2.86.68 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.32-3.5zM14.2 6.1c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.65-1.05 1.68-.92 2.67.97.08 1.96-.49 2.56-1.22z" />
        ) : (
          <path d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.7-9.7L3.6 2.3zm10.7 10.7l2.9 2.9-11 6.3 8.1-9.2zm0-2L6.2 1.8l11 6.3-2.9 2.9zm3.9-2.2l3.1 1.8c.9.5.9 1.3 0 1.8l-3.1 1.8-3.2-3.2 3.2-2.2z" />
        )}
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-slate-300">{label}</span>
        <span className="block text-base font-semibold">{store}</span>
      </span>
    </a>
  );
}

export default function DownloadApp() {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-brand-600 p-10 text-white md:grid-cols-[1.4fr_1fr] md:p-14">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Lend on the go with the Lendbox app</h2>
            <p className="mt-4 max-w-lg text-blue-100">
              Monitor your portfolio, reinvest repayments and withdraw earnings — all from your phone.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <StoreButton store="Google Play" label="Get it on" />
              <StoreButton store="App Store" label="Download on the" />
            </div>
          </div>
          <div className="mx-auto hidden h-72 w-40 rounded-[2rem] border-4 border-white/30 bg-white/10 p-3 md:block">
            <div className="h-full rounded-[1.4rem] bg-white/90 p-3">
              <div className="h-3 w-12 rounded bg-brand/30" />
              <div className="mt-4 h-16 rounded-xl bg-brand/15" />
              <div className="mt-3 h-3 w-full rounded bg-slate-200" />
              <div className="mt-2 h-3 w-3/4 rounded bg-slate-200" />
              <div className="mt-4 h-10 rounded-lg bg-accent/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
