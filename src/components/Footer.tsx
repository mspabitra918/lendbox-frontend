import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { contact, footerColumns } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      {/* Newsletter band */}

      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        {/* Brand + contact */}
        <div className="space-y-5">
          <Logo light />
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>{contact.address}</span>
            </li>
            <li className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
              </svg>
              <a href={`tel:${contact.phone}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              {col.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © Lendbox USA, Inc. {new Date().getFullYear()}. All Rights
            Reserved.
          </p>
          <p className="max-w-xl md:text-right">
            Lending involves risk, and investments are not guaranteed. Returns
            and principal are subject to borrower performance and market risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
