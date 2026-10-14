"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to the backend subscribe endpoint
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return <p className="text-sm font-medium text-accent">Thanks for subscribing!</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 focus-within:ring-accent">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
      />
      <button type="submit" className="bg-accent px-5 text-sm font-semibold text-navy hover:brightness-110">
        Submit
      </button>
    </form>
  );
}
