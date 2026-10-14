export type NavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

// src/data/site.ts

// Add the 'export' keyword here
export const grievanceItems = [
  { label: "Grievance Redressal", href: "/grievance-redressal" },
  { label: "Raise a Complaint", href: "/complaint" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Lending", href: "/how-it-works" },
  // { label: "Partner", href: "#partner" },
  // { label: "Blog", href: "#" },
  // { label: "Careers", href: "#" },
];

export const loanProducts: NavLink[] = [
  { label: "Instant Personal Loan", href: "/loans/instant-personal-loan" },
  { label: "Short Term Loan", href: "/loans/short-term-loan" },
  { label: "Marriage Loan", href: "/loans/marriage-loan" },
  { label: "Debt Consolidation Loan", href: "/loans/debt-consolidation-loan" },
  {
    label: "Credit Card Repayment Loan",
    href: "/loans/credit-card-repayment-loan",
  },
  { label: "Small Personal Loan", href: "/loans/small-personal-loan" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "About Lendbox",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      // { label: "Rates & Fees", href: "/rates-and-fees" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "Lenders",
    links: [
      // { label: "Why Lend with us", href: "/why-lendbox" },
      { label: "Rates & Fees", href: "/rates-and-fees" },
      { label: "Lenders FAQ", href: "/faqs" },
    ],
  },
  {
    title: "Loans for Borrowers",
    links: [
      { label: "Instant Personal Loan", href: "/loans/instant-personal-loan" },
      { label: "Short Term Loan", href: "/loans/short-term-loan" },
      { label: "Marriage Loan", href: "/loans/marriage-loan" },
      {
        label: "Debt Consolidation Loan",
        href: "/loans/debt-consolidation-loan",
      },
      {
        label: "Credit Card Repayment Loan",
        href: "/loans/credit-card-repayment-loan",
      },
      { label: "Small Personal Loan", href: "/loans/small-personal-loan" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of use", href: "/legal/terms-of-use" },
      { label: "Privacy policy", href: "/legal/privacy-policy" },
      {
        label: "Fair Lending Statement",
        href: "/legal/fair-lending-statement",
      },
      {
        label: "Direct Lender Disclosure",
        href: "/legal/direct-lender-disclosure",
      },
      { label: "Security Policy", href: "/legal/security-policy" },
      // { label: "Grievance Redressal", href: "/legal/grievance-redressal" },
      // { label: "Raise a complaint", href: "/legal/raise-a-complaint" },
      // { label: "Portfolio Performance", href: "#" },
    ],
  },
];

export const contact = {
  address:
    "345 Park Avenue, 10th Floor, New York, NY 10154, United States",
  email: "support@lendbox.us",
  phone: "+1 (800) 555-0199",
};
