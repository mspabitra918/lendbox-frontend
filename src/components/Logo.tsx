import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Lendbox home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2}>
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 7v10l9 4 9-4V7" />
          <path d="M12 11v10" />
        </svg>
      </span>
      <span className={`text-2xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        lend<span className="text-accent">box</span>
      </span>
    </Link>
  );
}
