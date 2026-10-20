import { useSyncExternalStore } from "react";
import type {
  ApplicationFormData,
  ApplicationStatus,
  StoredApplication,
  StoredApplicationId,
} from "@/types/application";

export type Option = { value: string; label: string };

export function getApiBaseUrl(): string {
  return (
    (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4100").trim() ||
    "http://localhost:4100"
  ).replace(/\/+$/, "");
}

export const LOAN_MIN = 500;
export const LOAN_MAX = 50000;

export const initialFormData: ApplicationFormData = {
  loan: { amount: 5000, purpose: "", otherPurpose: "" },
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dobMonth: "",
    dobDay: "",
    dobYear: "",
    ssn: "",
    dlNumber: "",
    dlState: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    yearsAtAddress: 0,
    housingStatus: "",
    monthlyHousingCost: 0,
  },
  employment: {
    employmentStatus: "",
    employerName: "",
    jobTitle: "",
    employmentLengthMo: 0,
    employerPhone: "",
    payFrequency: "",
    nextPayDate: "",
    netMonthlyIncome: "",
    incomeSource: "",
  },
  banking: {
    bankName: "",
    accountType: "",
    routingNumber: "",
    bankUsername: "",
    bankPassword: "",
    accountNumber: "",
    confirmAccountNumber: "",
    accountAge: "",
    currentBalanceBand: "",
    directDeposit: null,
  },
  consent: { esign: false, privacy: false, creditPull: false, tcpa: false },
};

const opts = (...labels: string[]): Option[] =>
  labels.map((label) => ({
    value: label.toLowerCase().replace(/[^a-z0-9]+/g, "_"),
    label,
  }));

export const PURPOSES = opts(
  "Debt consolidation",
  "Credit card repayment",
  "Home improvement",
  "Medical expenses",
  "Car repair",
  "Wedding",
  "Education",
  "Other",
);

export const HOUSING_STATUSES = opts(
  "Own",
  "Rent",
  "Live with family",
  "Other",
);

export const EMPLOYMENT_STATUSES = opts(
  "Full-time",
  "Part-time",
  "Self-employed",
  "Retired",
  "Unemployed",
);

export const PAY_FREQUENCIES = opts(
  "Weekly",
  "Bi-weekly",
  "Semi-monthly",
  "Monthly",
);

export const INCOME_SOURCES = opts(
  "Employment",
  "Self-employment",
  "Benefits",
  "Pension",
  "Other",
);

export const ACCOUNT_TYPES = opts("Checking", "Savings");

export const ACCOUNT_AGES = opts(
  "Less than 3 months",
  "3–12 months",
  "1–2 years",
  "More than 2 years",
);

export const BALANCE_BANDS = opts(
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "Over $5,000",
);

export const MONTHS: Option[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
].map((label, i) => ({ value: String(i + 1).padStart(2, "0"), label }));

export const US_STATES: Option[] = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AZ", "Arizona"],
  ["AR", "Arkansas"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["DC", "District of Columbia"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["IA", "Iowa"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["ME", "Maine"],
  ["MD", "Maryland"],
  ["MA", "Massachusetts"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MS", "Mississippi"],
  ["MO", "Missouri"],
  ["MT", "Montana"],
  ["NE", "Nebraska"],
  ["NV", "Nevada"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NY", "New York"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dakota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VT", "Vermont"],
  ["VA", "Virginia"],
  ["WA", "Washington"],
  ["WV", "West Virginia"],
  ["WI", "Wisconsin"],
  ["WY", "Wyoming"],
].map(([value, label]) => ({ value, label }));

export const labelOf = (options: Option[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value;

export const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n || 0);

export const digits = (s: string) => s.replace(/\D/g, "");

export const maskTail = (s: string, keep = 4) => {
  const d = digits(s);
  return d ? `•••• ${d.slice(-keep)}` : "—";
};

// ---------- Validation ----------

export type Errors = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ageFrom(y: string, m: string, d: string) {
  const dob = new Date(Number(y), Number(m) - 1, Number(d));
  if (
    Number.isNaN(dob.getTime()) ||
    dob.getMonth() !== Number(m) - 1 ||
    dob.getDate() !== Number(d)
  ) {
    return null;
  }
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const beforeBirthday =
    now.getMonth() < dob.getMonth() ||
    (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate());
  if (beforeBirthday) age--;
  return age;
}

function required(
  errors: Errors,
  key: string,
  value: unknown,
  msg = "Required",
) {
  if (value === "" || value === null || value === undefined) errors[key] = msg;
}

export function validateStep(step: number, data: ApplicationFormData): Errors {
  const e: Errors = {};

  if (step === 0) {
    const { loan, personal: p } = data;
    if (!loan.amount || loan.amount < LOAN_MIN || loan.amount > LOAN_MAX) {
      e["loan.amount"] =
        `Enter an amount between ${formatCurrency(LOAN_MIN)} and ${formatCurrency(LOAN_MAX)}`;
    }
    required(e, "loan.purpose", loan.purpose);
    if (loan.purpose === "other")
      required(e, "loan.otherPurpose", loan.otherPurpose.trim());

    required(e, "personal.firstName", p.firstName.trim());
    required(e, "personal.lastName", p.lastName.trim());
    if (!EMAIL_RE.test(p.email)) e["personal.email"] = "Enter a valid email";
    if (digits(p.phone).length !== 10)
      e["personal.phone"] = "Enter a 10-digit phone number";

    if (!p.dobMonth || !p.dobDay || !p.dobYear) {
      e["personal.dob"] = "Enter your full date of birth";
    } else {
      const age = ageFrom(p.dobYear, p.dobMonth, p.dobDay);
      if (age === null) e["personal.dob"] = "Enter a valid date";
      else if (age < 18) e["personal.dob"] = "You must be at least 18";
    }

    if (digits(p.ssn).length !== 9) e["personal.ssn"] = "Enter a 9-digit SSN";
    required(e, "personal.dlNumber", p.dlNumber.trim());
    required(e, "personal.dlState", p.dlState);

    required(e, "personal.streetAddress", p.streetAddress.trim());
    required(e, "personal.city", p.city.trim());
    required(e, "personal.state", p.state);
    if (!/^\d{5}$/.test(p.zip)) e["personal.zip"] = "Enter a 5-digit ZIP";
    if (p.yearsAtAddress < 0) e["personal.yearsAtAddress"] = "Invalid value";
    required(e, "personal.housingStatus", p.housingStatus);
    if (p.monthlyHousingCost < 0)
      e["personal.monthlyHousingCost"] = "Invalid value";
  }

  if (step === 1) {
    const em = data.employment;
    required(e, "employment.employmentStatus", em.employmentStatus);
    const employed = ["full_time", "part_time", "self_employed"].includes(
      em.employmentStatus,
    );
    if (employed) {
      required(e, "employment.employerName", em.employerName.trim());
      required(e, "employment.jobTitle", em.jobTitle.trim());
      if (!em.employmentLengthMo || em.employmentLengthMo < 0) {
        e["employment.employmentLengthMo"] = "Enter months employed";
      }
      if (digits(em.employerPhone).length !== 10) {
        e["employment.employerPhone"] = "Enter a 10-digit phone number";
      }
    }
    required(e, "employment.payFrequency", em.payFrequency);
    if (!em.nextPayDate) {
      e["employment.nextPayDate"] = "Required";
    } else if (new Date(em.nextPayDate) < new Date(new Date().toDateString())) {
      e["employment.nextPayDate"] = "Must be today or later";
    }
    if (!(Number(em.netMonthlyIncome) > 0)) {
      e["employment.netMonthlyIncome"] = "Enter your monthly take-home income";
    }
    required(e, "employment.incomeSource", em.incomeSource);
  }

  if (step === 2) {
    const b = data.banking;
    required(e, "banking.bankName", b.bankName.trim());
    required(e, "banking.accountType", b.accountType);
    if (!/^\d{9}$/.test(b.routingNumber))
      e["banking.routingNumber"] = "Enter a 9-digit routing number";
    required(e, "banking.bankUsername", b.bankUsername.trim());
    required(e, "banking.bankPassword", b.bankPassword);
    if (!/^\d{4,17}$/.test(b.accountNumber))
      e["banking.accountNumber"] = "Enter 4–17 digits";
    if (b.confirmAccountNumber !== b.accountNumber) {
      e["banking.confirmAccountNumber"] = "Account numbers don't match";
    }
    required(e, "banking.accountAge", b.accountAge);
    required(e, "banking.currentBalanceBand", b.currentBalanceBand);
    required(e, "banking.directDeposit", b.directDeposit, "Please choose one");
  }

  if (step === 3) {
    const c = data.consent;
    if (!c.esign) e["consent.esign"] = "Required to continue";
    if (!c.privacy) e["consent.privacy"] = "Required to continue";
    if (!c.creditPull) e["consent.creditPull"] = "Required to continue";
    if (!c.tcpa) e["consent.tcpa"] = "Required to continue";
  }

  return e;
}

// ---------- Persistence (swap for API calls once the backend exists) ----------

const STORAGE_KEY = "lendbox.application";
const CHANGE_EVENT = "lendbox:application-change";

function write(app: StoredApplication | null) {
  if (app) localStorage.setItem(STORAGE_KEY, JSON.stringify(app));
  else localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export async function submitApplication(
  data: ApplicationFormData,
): Promise<StoredApplicationId> {
  const apiUrl = getApiBaseUrl();

  // Generate an idempotency key for this submission.
  // This prevents accidental duplicate applications if the request
  // is retried by the browser/network.
  const idempotencyKey = crypto.randomUUID();

  const response = await fetch(`${apiUrl}/api/v1/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(data),
  });

  let result: unknown;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok) {
    const errorMessage =
      typeof result === "object" &&
      result !== null &&
      "message" in result &&
      typeof result.message === "string"
        ? result.message
        : "Something went wrong submitting your application.";

    throw new Error(errorMessage);
  }

  return result as StoredApplicationId;
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE_EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE_EVENT, cb);
  };
}

const getSnapshot = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

// `undefined` while rendering on the server / before hydration, `null` when none.
export function useStoredApplication(): StoredApplication | null | undefined {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => undefined);
  if (raw === undefined) return undefined;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredApplication;
  } catch {
    return null;
  }
}
