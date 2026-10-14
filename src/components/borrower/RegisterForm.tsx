"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { ApplicationFormData } from "@/types/application";
import {
  ACCOUNT_AGES,
  ACCOUNT_TYPES,
  BALANCE_BANDS,
  EMPLOYMENT_STATUSES,
  HOUSING_STATUSES,
  INCOME_SOURCES,
  LOAN_MAX,
  LOAN_MIN,
  MONTHS,
  PAY_FREQUENCIES,
  PURPOSES,
  US_STATES,
  digits,
  formatCurrency,
  initialFormData,
  labelOf,
  maskTail,
  submitApplication,
  validateStep,
} from "@/lib/application";
import {
  Checkbox,
  Field,
  SectionHeading,
  SelectInput,
  TextInput,
  ToggleGroup,
} from "@/components/borrower/FormFields";

const STEPS = [
  { title: "Loan & Personal", description: "Tell us about yourself" },
  { title: "Employment", description: "Your income details" },
  { title: "Banking", description: "Where we send funds" },
  { title: "Review", description: "Confirm and submit" },
];

const formatPhone = (v: string) => {
  const d = digits(v).slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};

const formatSsn = (v: string) => {
  const d = digits(v).slice(0, 9);
  if (d.length < 4) return d;
  if (d.length < 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 5)}-${d.slice(5)}`;
};

const thisYear = new Date().getFullYear();
const DAYS = Array.from({ length: 31 }, (_, i) => {
  const v = String(i + 1).padStart(2, "0");
  return { value: v, label: String(i + 1) };
});
const YEARS = Array.from({ length: 83 }, (_, i) => {
  const v = String(thisYear - 18 - i);
  return { value: v, label: v };
});

const toNumber = (v: string) => (v === "" ? 0 : Math.max(0, Number(v)));

type Section = keyof ApplicationFormData;

export default function RegisterForm() {
  const router = useRouter();
  const [data, setData] = useState<ApplicationFormData>(initialFormData);
  const [step, setStep] = useState(0);
  const [attempted, setAttempted] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const errors = attempted[step] ? validateStep(step, data) : {};

  function set<S extends Section, K extends keyof ApplicationFormData[S]>(
    section: S,
    key: K,
    value: ApplicationFormData[S][K],
  ) {
    setData((d) => ({ ...d, [section]: { ...d[section], [key]: value } }));
  }

  const goTo = (i: number) => {
    setStep(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
    setAttempted((a) => a.map((v, i) => (i === step ? true : v)));
    if (Object.keys(validateStep(step, data)).length > 0) return;
    goTo(step + 1);
  };

  const submit = async () => {
    setAttempted((a) => a.map((v, i) => (i === 3 ? true : v)));
    // Re-check every step in case something was edited from the review screen.
    for (let i = 0; i < STEPS.length; i++) {
      if (Object.keys(validateStep(i, data)).length > 0) {
        setAttempted((a) => a.map((v, j) => (j === i ? true : v)));
        if (i !== 3) goTo(i);
        return;
      }
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      await submitApplication(data);
      router.push("/borrower/register/thank-you");
    } catch {
      setSubmitError(
        "Something went wrong submitting your application. Please try again.",
      );
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-x py-10 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Borrower application</p>
          <h1 className="section-title">Apply for a personal loan</h1>
          <p className="mt-3 text-slate-600">
            It takes about 5 minutes. Checking your rate won&apos;t affect your
            credit score.
          </p>
        </div>

        <Stepper step={step} onSelect={(i) => i < step && goTo(i)} />

        <div className="mx-auto mt-8 grid max-w-6xl gap-8 lg:grid-cols-[1fr_20rem]">
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              if (step === 3) submit();
              else next();
            }}
            className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 sm:p-8"
          >
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">
                Step {step + 1} of {STEPS.length}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy">
                {STEPS[step].title}
              </h2>
            </div>

            {step === 0 && (
              <StepPersonal data={data} errors={errors} set={set} />
            )}
            {step === 1 && (
              <StepEmployment data={data} errors={errors} set={set} />
            )}
            {step === 2 && (
              <StepBanking data={data} errors={errors} set={set} />
            )}
            {step === 3 && (
              <StepReview data={data} errors={errors} set={set} onEdit={goTo} />
            )}

            {attempted[step] && Object.keys(errors).length > 0 && (
              <p
                role="alert"
                className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                Please fix the highlighted fields to continue.
              </p>
            )}
            {submitError && (
              <p
                role="alert"
                className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                {submitError}
              </p>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => goTo(step - 1)}
                disabled={step === 0 || submitting}
                className="rounded-full px-6 py-3 font-semibold text-navy ring-1 ring-slate-300 transition hover:bg-slate-50 disabled:invisible"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-600 disabled:cursor-wait disabled:opacity-70"
              >
                {submitting && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                )}
                {step === 3
                  ? submitting
                    ? "Submitting…"
                    : "Submit application"
                  : "Continue →"}
              </button>
            </div>
          </form>

          <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-3xl bg-navy p-6 text-white shadow-xl">
              <p className="text-sm text-slate-300">You&apos;re requesting</p>
              <p className="mt-1 text-4xl font-extrabold">
                {formatCurrency(data.loan.amount)}
              </p>
              <p className="mt-2 text-sm text-slate-300">
                {data.loan.purpose
                  ? data.loan.purpose === "other" && data.loan.otherPurpose
                    ? data.loan.otherPurpose
                    : labelOf(PURPOSES, data.loan.purpose)
                  : "Choose a loan purpose"}
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-sm text-slate-600 ring-1 ring-slate-100">
              <p className="flex items-center gap-2 font-bold text-navy">
                <LockIcon /> Bank-level security
              </p>
              <p className="mt-2">
                Your information is encrypted with 256-bit TLS and is never sold
                to third parties.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ---------- Stepper ----------

function Stepper({
  step,
  onSelect,
}: {
  step: number;
  onSelect: (i: number) => void;
}) {
  return (
    <ol className="mx-auto mt-10 flex max-w-3xl items-start">
      {STEPS.map((s, i) => {
        const done = i < step;
        const active = i === step;
        return (
          <li
            key={s.title}
            className="relative flex flex-1 flex-col items-center text-center"
          >
            {i > 0 && (
              <span
                className={`absolute right-1/2 top-5 h-0.5 w-full -translate-y-1/2 ${
                  i <= step ? "bg-brand" : "bg-slate-200"
                }`}
              />
            )}
            <button
              type="button"
              onClick={() => onSelect(i)}
              disabled={!done}
              aria-current={active ? "step" : undefined}
              className={`relative z-10 grid h-10 w-10 place-items-center rounded-full text-sm font-bold transition ${
                done
                  ? "bg-brand text-white hover:bg-brand-600"
                  : active
                    ? "bg-white text-brand ring-4 ring-brand"
                    : "bg-white text-slate-400 ring-2 ring-slate-200"
              }`}
            >
              {done ? <CheckIcon /> : i + 1}
            </button>
            <span
              className={`mt-2 text-xs font-semibold sm:text-sm ${active || done ? "text-navy" : "text-slate-400"}`}
            >
              {s.title}
            </span>
            <span className="hidden text-xs text-slate-400 sm:block">
              {s.description}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

// ---------- Steps ----------

type StepProps = {
  data: ApplicationFormData;
  errors: Record<string, string>;
  set: <S extends Section, K extends keyof ApplicationFormData[S]>(
    section: S,
    key: K,
    value: ApplicationFormData[S][K],
  ) => void;
};

function StepPersonal({ data, errors, set }: StepProps) {
  const { loan, personal: p } = data;
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <SectionHeading title="Loan details" />
      {/* <div className="col-span-full">
        <TextInput
          label="How much would you like to borrow?"
          name="amount"
          type="number"
          inputMode="numeric"
          prefix="$"
          min={LOAN_MIN}
          max={LOAN_MAX}
          step={500}
          value={loan.amount || ""}
          onValue={(v) => set("loan", "amount", toNumber(v))}
          error={errors["loan.amount"]}
        />
        <input
          type="range"
          aria-label="Loan amount"
          min={LOAN_MIN}
          max={LOAN_MAX}
          step={500}
          value={Math.min(Math.max(loan.amount, LOAN_MIN), LOAN_MAX)}
          onChange={(e) => set("loan", "amount", Number(e.target.value))}
          className="mt-3 w-full accent-brand"
        />
        <div className="flex justify-between text-xs text-slate-400">
          <span>{formatCurrency(LOAN_MIN)}</span>
          <span>{formatCurrency(LOAN_MAX)}</span>
        </div>
      </div> */}

      <div className="col-span-full">
        <TextInput
          label="How much would you like to borrow?"
          name="amount"
          type="text"
          inputMode="numeric"
          prefix="$"
          min={LOAN_MIN}
          max={LOAN_MAX}
          step={1}
          value={loan.amount ?? ""}
          onValue={(v) => set("loan", "amount", toNumber(v))}
          onBlur={() => {
            const raw = Number(loan.amount);

            if (!Number.isFinite(raw) || raw <= 0) return;

            const rounded = Math.round(raw / 1000) * 1000;
            const amount = Math.min(Math.max(rounded, LOAN_MIN), LOAN_MAX);

            set("loan", "amount", amount);
          }}
          error={errors["loan.amount"]}
        />

        <input
          type="range"
          aria-label="Loan amount"
          min={LOAN_MIN}
          max={LOAN_MAX}
          step={500}
          value={Math.min(Math.max(loan.amount, LOAN_MIN), LOAN_MAX)}
          onChange={(e) => set("loan", "amount", Number(e.target.value))}
          className="mt-3 w-full accent-brand"
        />

        <div className="flex justify-between text-xs text-slate-400">
          <span>{formatCurrency(LOAN_MIN)}</span>
          <span>{formatCurrency(LOAN_MAX)}</span>
        </div>
      </div>

      <SelectInput
        label="Loan purpose"
        name="purpose"
        options={PURPOSES}
        value={loan.purpose}
        onValue={(v) => set("loan", "purpose", v)}
        error={errors["loan.purpose"]}
      />
      {loan.purpose === "other" && (
        <TextInput
          label="Please describe"
          name="otherPurpose"
          value={loan.otherPurpose}
          maxLength={80}
          onValue={(v) => set("loan", "otherPurpose", v)}
          error={errors["loan.otherPurpose"]}
        />
      )}

      <SectionHeading title="Personal information" />
      <TextInput
        label="First name"
        name="firstName"
        autoComplete="given-name"
        value={p.firstName}
        onValue={(v) => set("personal", "firstName", v)}
        error={errors["personal.firstName"]}
      />
      <TextInput
        label="Last name"
        name="lastName"
        autoComplete="family-name"
        value={p.lastName}
        onValue={(v) => set("personal", "lastName", v)}
        error={errors["personal.lastName"]}
      />
      <TextInput
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={p.email}
        onValue={(v) => set("personal", "email", v.trim())}
        error={errors["personal.email"]}
      />
      <TextInput
        label="Mobile phone"
        name="phone"
        type="tel"
        autoComplete="tel-national"
        placeholder="(555) 555-5555"
        value={p.phone}
        onValue={(v) => set("personal", "phone", formatPhone(v))}
        error={errors["personal.phone"]}
      />

      <Field
        label="Date of birth"
        error={errors["personal.dob"]}
        className="col-span-full"
      >
        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-3">
          <SelectInput
            label=""
            aria-label="Birth month"
            name="dobMonth"
            placeholder="Month"
            options={MONTHS}
            value={p.dobMonth}
            onValue={(v) => set("personal", "dobMonth", v)}
            error={errors["personal.dob"] ? " " : undefined}
          />
          <SelectInput
            label=""
            aria-label="Birth day"
            name="dobDay"
            placeholder="Day"
            options={DAYS}
            value={p.dobDay}
            onValue={(v) => set("personal", "dobDay", v)}
            error={errors["personal.dob"] ? " " : undefined}
          />
          <SelectInput
            label=""
            aria-label="Birth year"
            name="dobYear"
            placeholder="Year"
            options={YEARS}
            value={p.dobYear}
            onValue={(v) => set("personal", "dobYear", v)}
            error={errors["personal.dob"] ? " " : undefined}
          />
        </div>
      </Field>

      <TextInput
        label="Social Security Number"
        name="ssn"
        type="password"
        inputMode="numeric"
        autoComplete="off"
        placeholder="123-45-6789"
        value={p.ssn}
        onValue={(v) => set("personal", "ssn", formatSsn(v))}
        error={errors["personal.ssn"]}
        hint="Used to verify your identity. Soft pull only."
        className="col-span-full"
      />
      <TextInput
        label="Driver's license number"
        name="dlNumber"
        autoComplete="off"
        value={p.dlNumber}
        onValue={(v) => set("personal", "dlNumber", v.toUpperCase())}
        error={errors["personal.dlNumber"]}
      />
      <SelectInput
        label="Issuing state"
        name="dlState"
        options={US_STATES}
        value={p.dlState}
        onValue={(v) => set("personal", "dlState", v)}
        error={errors["personal.dlState"]}
      />

      <SectionHeading title="Home address" />
      <TextInput
        label="Street address"
        name="streetAddress"
        autoComplete="address-line1"
        value={p.streetAddress}
        onValue={(v) => set("personal", "streetAddress", v)}
        error={errors["personal.streetAddress"]}
        className="col-span-full"
      />
      <TextInput
        label="Apt, suite, unit"
        name="addressLine2"
        optional
        autoComplete="address-line2"
        value={p.addressLine2}
        onValue={(v) => set("personal", "addressLine2", v)}
        className="col-span-full"
      />
      <TextInput
        label="City"
        name="city"
        autoComplete="address-level2"
        value={p.city}
        onValue={(v) => set("personal", "city", v)}
        error={errors["personal.city"]}
      />
      <div className="grid grid-cols-2 gap-3">
        <SelectInput
          label="State"
          name="state"
          options={US_STATES}
          value={p.state}
          onValue={(v) => set("personal", "state", v)}
          error={errors["personal.state"]}
        />
        <TextInput
          label="ZIP"
          name="zip"
          inputMode="numeric"
          autoComplete="postal-code"
          value={p.zip}
          onValue={(v) => set("personal", "zip", digits(v).slice(0, 5))}
          error={errors["personal.zip"]}
        />
      </div>
      <TextInput
        label="Years at this address"
        name="yearsAtAddress"
        type="number"
        min={0}
        value={p.yearsAtAddress || ""}
        placeholder="0"
        onValue={(v) => set("personal", "yearsAtAddress", toNumber(v))}
        error={errors["personal.yearsAtAddress"]}
      />
      <SelectInput
        label="Housing status"
        name="housingStatus"
        options={HOUSING_STATUSES}
        value={p.housingStatus}
        onValue={(v) => set("personal", "housingStatus", v)}
        error={errors["personal.housingStatus"]}
      />
      <TextInput
        label="Monthly rent / mortgage"
        name="monthlyHousingCost"
        type="number"
        min={0}
        prefix="$"
        placeholder="0"
        value={p.monthlyHousingCost || ""}
        onValue={(v) => set("personal", "monthlyHousingCost", toNumber(v))}
        error={errors["personal.monthlyHousingCost"]}
        className="col-span-full sm:col-span-1"
      />
    </div>
  );
}

function StepEmployment({ data, errors, set }: StepProps) {
  const em = data.employment;
  const employed = ["full_time", "part_time", "self_employed"].includes(
    em.employmentStatus,
  );
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <SectionHeading title="Employment" />
      <SelectInput
        label="Employment status"
        name="employmentStatus"
        options={EMPLOYMENT_STATUSES}
        value={em.employmentStatus}
        onValue={(v) => set("employment", "employmentStatus", v)}
        error={errors["employment.employmentStatus"]}
        className="col-span-full"
      />
      {employed && (
        <>
          <TextInput
            label={
              em.employmentStatus === "self_employed"
                ? "Business name"
                : "Employer name"
            }
            name="employerName"
            autoComplete="organization"
            value={em.employerName}
            onValue={(v) => set("employment", "employerName", v)}
            error={errors["employment.employerName"]}
          />
          <TextInput
            label="Job title"
            name="jobTitle"
            autoComplete="organization-title"
            value={em.jobTitle}
            onValue={(v) => set("employment", "jobTitle", v)}
            error={errors["employment.jobTitle"]}
          />
          <TextInput
            label="Time with employer (months)"
            name="employmentLengthMo"
            type="number"
            min={0}
            placeholder="0"
            value={em.employmentLengthMo || ""}
            onValue={(v) =>
              set("employment", "employmentLengthMo", toNumber(v))
            }
            error={errors["employment.employmentLengthMo"]}
          />
          <TextInput
            label="Employer phone"
            name="employerPhone"
            type="tel"
            placeholder="(555) 555-5555"
            value={em.employerPhone}
            onValue={(v) => set("employment", "employerPhone", formatPhone(v))}
            error={errors["employment.employerPhone"]}
          />
        </>
      )}

      <SectionHeading title="Income" />
      <SelectInput
        label="How often are you paid?"
        name="payFrequency"
        options={PAY_FREQUENCIES}
        value={em.payFrequency}
        onValue={(v) => set("employment", "payFrequency", v)}
        error={errors["employment.payFrequency"]}
      />
      <TextInput
        label="Next pay date"
        name="nextPayDate"
        type="date"
        min={today}
        value={em.nextPayDate}
        onValue={(v) => set("employment", "nextPayDate", v)}
        error={errors["employment.nextPayDate"]}
      />
      <TextInput
        label="Net monthly income"
        name="netMonthlyIncome"
        inputMode="decimal"
        prefix="$"
        placeholder="0"
        value={em.netMonthlyIncome}
        onValue={(v) =>
          set("employment", "netMonthlyIncome", v.replace(/[^\d.]/g, ""))
        }
        error={errors["employment.netMonthlyIncome"]}
        hint="Take-home pay after taxes"
      />
      <SelectInput
        label="Primary income source"
        name="incomeSource"
        options={INCOME_SOURCES}
        value={em.incomeSource}
        onValue={(v) => set("employment", "incomeSource", v)}
        error={errors["employment.incomeSource"]}
      />
    </div>
  );
}

function StepBanking({ data, errors, set }: StepProps) {
  const b = data.banking;
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <SectionHeading
        title="Bank account"
        description="Funds are deposited to this account."
      />
      <TextInput
        label="Bank name"
        name="bankName"
        value={b.bankName}
        onValue={(v) => set("banking", "bankName", v)}
        error={errors["banking.bankName"]}
      />
      <SelectInput
        label="Account type"
        name="accountType"
        options={ACCOUNT_TYPES}
        value={b.accountType}
        onValue={(v) => set("banking", "accountType", v)}
        error={errors["banking.accountType"]}
      />
      <TextInput
        label="Routing number"
        name="routingNumber"
        inputMode="numeric"
        autoComplete="off"
        placeholder="9 digits"
        value={b.routingNumber}
        onValue={(v) => set("banking", "routingNumber", digits(v).slice(0, 9))}
        error={errors["banking.routingNumber"]}
        className="col-span-full"
      />
      <TextInput
        label="Account number"
        name="accountNumber"
        inputMode="numeric"
        autoComplete="off"
        value={b.accountNumber}
        onValue={(v) => set("banking", "accountNumber", digits(v).slice(0, 17))}
        error={errors["banking.accountNumber"]}
      />
      <TextInput
        label="Confirm account number"
        name="confirmAccountNumber"
        inputMode="numeric"
        autoComplete="off"
        value={b.confirmAccountNumber}
        onPaste={(e) => e.preventDefault()}
        onValue={(v) =>
          set("banking", "confirmAccountNumber", digits(v).slice(0, 17))
        }
        error={errors["banking.confirmAccountNumber"]}
      />

      <SectionHeading
        title="Online banking login"
        description="Used once to verify your account and income. We never store your password."
      />
      <TextInput
        label="Online banking username"
        name="bankUsername"
        autoComplete="off"
        value={b.bankUsername}
        onValue={(v) => set("banking", "bankUsername", v)}
        error={errors["banking.bankUsername"]}
      />
      <TextInput
        label="Online banking password"
        name="bankPassword"
        type="password"
        autoComplete="new-password"
        value={b.bankPassword}
        onValue={(v) => set("banking", "bankPassword", v)}
        error={errors["banking.bankPassword"]}
      />

      <SectionHeading title="Account history" />
      <SelectInput
        label="How long has this account been open?"
        name="accountAge"
        options={ACCOUNT_AGES}
        value={b.accountAge}
        onValue={(v) => set("banking", "accountAge", v)}
        error={errors["banking.accountAge"]}
      />
      <SelectInput
        label="Current balance"
        name="currentBalanceBand"
        options={BALANCE_BANDS}
        value={b.currentBalanceBand}
        onValue={(v) => set("banking", "currentBalanceBand", v)}
        error={errors["banking.currentBalanceBand"]}
      />
      <div className="col-span-full">
        <ToggleGroup
          label="Is your paycheck direct-deposited into this account?"
          value={b.directDeposit}
          options={[
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ]}
          onChange={(v) => set("banking", "directDeposit", v)}
          error={errors["banking.directDeposit"]}
        />
      </div>
    </div>
  );
}

function StepReview({
  data,
  errors,
  set,
  onEdit,
}: StepProps & { onEdit: (step: number) => void }) {
  const { loan, personal: p, employment: em, banking: b, consent: c } = data;
  const dob = p.dobYear
    ? `${labelOf(MONTHS, p.dobMonth)} ${Number(p.dobDay)}, ${p.dobYear}`
    : "—";
  const employed = ["full_time", "part_time", "self_employed"].includes(
    em.employmentStatus,
  );

  return (
    <div className="space-y-5">
      <ReviewCard title="Loan" onEdit={() => onEdit(0)}>
        <Row label="Amount" value={formatCurrency(loan.amount)} />
        <Row
          label="Purpose"
          value={
            loan.purpose === "other"
              ? loan.otherPurpose
              : labelOf(PURPOSES, loan.purpose)
          }
        />
      </ReviewCard>

      <ReviewCard title="Personal information" onEdit={() => onEdit(0)}>
        <Row label="Name" value={`${p.firstName} ${p.lastName}`} />
        <Row label="Email" value={p.email} />
        <Row label="Phone" value={p.phone} />
        <Row label="Date of birth" value={dob} />
        <Row label="SSN" value={`•••-••-${digits(p.ssn).slice(-4)}`} />
        <Row label="Driver's license" value={`${p.dlNumber} (${p.dlState})`} />
        <Row
          label="Address"
          value={[
            p.streetAddress,
            p.addressLine2,
            `${p.city}, ${p.state} ${p.zip}`,
          ]
            .filter(Boolean)
            .join(", ")}
          wide
        />
        <Row label="Years at address" value={String(p.yearsAtAddress)} />
        <Row
          label="Housing"
          value={labelOf(HOUSING_STATUSES, p.housingStatus)}
        />
        <Row
          label="Monthly housing cost"
          value={formatCurrency(p.monthlyHousingCost)}
        />
      </ReviewCard>

      <ReviewCard title="Employment & income" onEdit={() => onEdit(1)}>
        <Row
          label="Status"
          value={labelOf(EMPLOYMENT_STATUSES, em.employmentStatus)}
        />
        {employed && (
          <>
            <Row label="Employer" value={em.employerName} />
            <Row label="Job title" value={em.jobTitle} />
            <Row
              label="Time employed"
              value={`${em.employmentLengthMo} months`}
            />
            <Row label="Employer phone" value={em.employerPhone} />
          </>
        )}
        <Row
          label="Pay frequency"
          value={labelOf(PAY_FREQUENCIES, em.payFrequency)}
        />
        <Row label="Next pay date" value={em.nextPayDate} />
        <Row
          label="Net monthly income"
          value={formatCurrency(Number(em.netMonthlyIncome))}
        />
        <Row
          label="Income source"
          value={labelOf(INCOME_SOURCES, em.incomeSource)}
        />
      </ReviewCard>

      <ReviewCard title="Banking" onEdit={() => onEdit(2)}>
        <Row label="Bank" value={b.bankName} />
        <Row
          label="Account type"
          value={labelOf(ACCOUNT_TYPES, b.accountType)}
        />
        <Row label="Routing number" value={b.routingNumber} />
        <Row label="Account number" value={maskTail(b.accountNumber)} />
        <Row label="Online banking user" value={b.bankUsername} />
        <Row label="Password" value="••••••••" />
        <Row label="Account age" value={labelOf(ACCOUNT_AGES, b.accountAge)} />
        <Row
          label="Current balance"
          value={labelOf(BALANCE_BANDS, b.currentBalanceBand)}
        />
        <Row label="Direct deposit" value={b.directDeposit ? "Yes" : "No"} />
      </ReviewCard>

      <div className="space-y-3 pt-2">
        <h3 className="text-base font-bold text-navy">Agreements</h3>
        <Checkbox
          checked={c.esign}
          onChange={(v) => set("consent", "esign", v)}
          error={errors["consent.esign"]}
        >
          I agree to receive disclosures and sign documents electronically under
          the{" "}
          <a
            href="/legal/terms-of-use"
            target="_blank"
            className="font-semibold text-brand hover:underline"
          >
            E-Sign Consent
          </a>
          .
        </Checkbox>
        <Checkbox
          checked={c.privacy}
          onChange={(v) => set("consent", "privacy", v)}
          error={errors["consent.privacy"]}
        >
          I have read and accept the{" "}
          <a
            href="/legal/privacy-policy"
            target="_blank"
            className="font-semibold text-brand hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="/legal/terms-of-use"
            target="_blank"
            className="font-semibold text-brand hover:underline"
          >
            Terms of Use
          </a>
          .
        </Checkbox>
        <Checkbox
          checked={c.creditPull}
          onChange={(v) => set("consent", "creditPull", v)}
          error={errors["consent.creditPull"]}
        >
          I authorize Lendbox and its partners to obtain my consumer credit
          report to evaluate this application.
        </Checkbox>
        <Checkbox
          checked={c.tcpa}
          onChange={(v) => set("consent", "tcpa", v)}
          error={errors["consent.tcpa"]}
        >
          I agree to be contacted by phone, text or email, including by
          automated means, about my application at the number provided. Message
          and data rates may apply.
        </Checkbox>
      </div>
    </div>
  );
}

function ReviewCard({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-navy">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="text-sm font-semibold text-brand hover:underline"
        >
          Edit
        </button>
      </div>
      <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">{children}</dl>
    </div>
  );
}

function Row({
  label,
  value,
  wide,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <dt className="text-xs text-slate-500">{label}</dt>
      <dd className="mt-0.5 break-words text-sm font-semibold text-navy">
        {value || "—"}
      </dd>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-4 w-4 text-accent"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 118 0v4" />
    </svg>
  );
}
