"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { loanProducts, grievanceItems } from "@/data/site";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 transition-transform duration-300 ease-in-out ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden
    >
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01-.02-1.06z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "loans" | "grievance" | null
  >(null);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleDropdown = (name: "loans" | "grievance") => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`
        sticky top-0 z-50
        bg-white/95
        backdrop-blur-md
        transition-all duration-300 ease-in-out
        ${scrolled ? "shadow-md" : "border-b border-slate-100"}
      `}
    >
      {/* Main Navbar */}
      <nav
        ref={dropdownRef}
        className={`
          container-x
          flex items-center justify-between
          transition-all duration-300 ease-in-out
          ${scrolled ? "h-16" : "h-16 lg:h-20"}
        `}
      >
        {/* Logo */}
        <div className="shrink-0 transition-all duration-300 ease-in-out">
          <Logo />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 lg:flex transition-all duration-300 ease-in-out">
          <Link
            href="/about"
            className="text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/rates-and-fees"
            className="text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
          >
            Rates & Fees
          </Link>
          <Link
            href="/how-it-works"
            className="text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
          >
            How it Works
          </Link>

          {/* Loans Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("loans")}
              aria-expanded={activeDropdown === "loans"}
              aria-haspopup="true"
              className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
            >
              Loans
              <ChevronDown open={activeDropdown === "loans"} />
            </button>

            <div
              className={`
                absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2
                rounded-xl border border-slate-100 bg-white p-2 shadow-xl
                transition-all duration-200 ease-out
                ${
                  activeDropdown === "loans"
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >
              {loanProducts.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  onClick={() => setActiveDropdown(null)}
                  className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/borrower/status"
            className="text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
          >
            Loan Status
          </Link>

          <Link
            href="/faqs"
            className="text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
          >
            FAQ
          </Link>

          {/* Grievance Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("grievance")}
              aria-expanded={activeDropdown === "grievance"}
              aria-haspopup="true"
              className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
            >
              Grievance
              <ChevronDown open={activeDropdown === "grievance"} />
            </button>

            <div
              className={`
                absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2
                rounded-xl border border-slate-100 bg-white p-2 shadow-xl
                transition-all duration-200 ease-out
                ${
                  activeDropdown === "grievance"
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >
              {grievanceItems?.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveDropdown(null)}
                  className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              )) || (
                <>
                  <Link
                    href="/grievance-redressal"
                    onClick={() => setActiveDropdown(null)}
                    className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    Grievance Redressal
                  </Link>
                  <Link
                    href="/complaint"
                    onClick={() => setActiveDropdown(null)}
                    className="block rounded-lg px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    Raise a Complaint
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Buttons (Login / Sign Up) */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/borrower/register"
            className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Apply for a Loan
            {/* <ChevronDown open={false} /> */}
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-all duration-300 hover:bg-slate-50 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
              mobileOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
              mobileOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`
          overflow-hidden border-t border-slate-100 bg-white
          transition-all duration-300 ease-in-out lg:hidden
          ${mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="container-x flex flex-col gap-1 overflow-y-auto py-4">
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-50"
          >
            About
          </Link>

          <Link
            href="/lending"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-50"
          >
            Lending
          </Link>

          <details className="group rounded-md">
            <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-50">
              Loans
              <ChevronDown open={false} />
            </summary>
            <div className="ml-3 border-l border-slate-200 pl-3">
              {loanProducts.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="/partner"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-50"
          >
            Partner
          </Link>

          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-50"
          >
            Blog
          </Link>

          <Link
            href="/careers"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-50"
          >
            Careers
          </Link>

          <details className="group rounded-md">
            <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-50">
              Grievance
              <ChevronDown open={false} />
            </summary>
            <div className="ml-3 border-l border-slate-200 pl-3">
              <Link
                href="/grievance-redressal"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600"
              >
                Grievance Redressal
              </Link>
              <Link
                href="/complaint"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600"
              >
                Raise a Complaint
              </Link>
            </div>
          </details>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              href="/borrower/register"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-blue-50 py-2.5 text-center text-sm font-semibold text-blue-600"
            >
              Apply for a Loan
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
