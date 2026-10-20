import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYou from "@/components/borrower/ThankYou";

export const metadata: Metadata = {
  title: "Application Submitted – Lendbox",
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYou />
    </Suspense>
  );
}
