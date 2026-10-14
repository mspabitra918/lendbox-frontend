"use client";

import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import type { Option } from "@/lib/application";

const controlBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/10 disabled:bg-slate-50";

const controlState = (error?: string) =>
  error ? "border-red-400" : "border-slate-200";

type FieldProps = {
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
  htmlFor?: string;
};

export function Field({ label, error, hint, optional, className = "", children, htmlFor }: FieldProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy">
          {label}
          {optional && <span className="ml-1 font-normal text-slate-400">(optional)</span>}
        </label>
      )}
      {children}
      {error?.trim() ? (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  prefix?: string;
  onValue: (value: string) => void;
};

export function TextInput({
  label,
  error,
  hint,
  optional,
  prefix,
  onValue,
  className = "",
  id,
  ...rest
}: TextInputProps) {
  const inputId = id ?? rest.name;
  return (
    <Field label={label} error={error} hint={hint} optional={optional} className={className} htmlFor={inputId}>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-slate-500">
            {prefix}
          </span>
        )}
        <input
          id={inputId}
          aria-invalid={!!error}
          onChange={(e) => onValue(e.target.value)}
          className={`${controlBase} ${controlState(error)} ${prefix ? "pl-8" : ""}`}
          {...rest}
        />
      </div>
    </Field>
  );
}

type SelectInputProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> & {
  label: string;
  options: Option[];
  error?: string;
  hint?: string;
  placeholder?: string;
  onValue: (value: string) => void;
};

export function SelectInput({
  label,
  options,
  error,
  hint,
  placeholder = "Select…",
  onValue,
  className = "",
  id,
  ...rest
}: SelectInputProps) {
  const inputId = id ?? rest.name;
  return (
    <Field label={label} error={error} hint={hint} className={className} htmlFor={inputId}>
      <div className="relative">
        <select
          id={inputId}
          aria-invalid={!!error}
          onChange={(e) => onValue(e.target.value)}
          className={`${controlBase} ${controlState(error)} appearance-none pr-10`}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
        >
          <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
        </svg>
      </div>
    </Field>
  );
}

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  children: ReactNode;
};

export function Checkbox({ checked, onChange, error, children }: CheckboxProps) {
  return (
    <div>
      <label
        className={`flex cursor-pointer gap-3 rounded-xl border p-4 text-sm text-slate-600 transition hover:bg-slate-50 ${
          error ? "border-red-300 bg-red-50/40" : checked ? "border-brand/40 bg-brand-50/50" : "border-slate-200"
        }`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
        />
        <span>{children}</span>
      </label>
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

type ToggleGroupProps<T extends string | boolean> = {
  label: string;
  value: T | null;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  error?: string;
};

export function ToggleGroup<T extends string | boolean>({
  label,
  value,
  options,
  onChange,
  error,
}: ToggleGroupProps<T>) {
  return (
    <Field label={label} error={error}>
      <div role="radiogroup" aria-label={label} className="grid grid-cols-2 gap-3">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={String(o.value)}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                active
                  ? "border-brand bg-brand text-white shadow-md shadow-brand/20"
                  : `${controlState(error)} bg-white text-navy hover:border-brand/50`
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </Field>
  );
}

export function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="col-span-full border-b border-slate-100 pb-3 pt-2">
      <h3 className="text-base font-bold text-navy">{title}</h3>
      {description && <p className="mt-0.5 text-sm text-slate-500">{description}</p>}
    </div>
  );
}
