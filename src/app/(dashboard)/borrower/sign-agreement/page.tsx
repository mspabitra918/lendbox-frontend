import type { Metadata } from "next";
import { Suspense } from "react";
import SignAgreementView from "@/components/borrower/SignAgreementView";

export const metadata: Metadata = {
  title: "Sign Loan Agreement – Lendbox",
  robots: { index: false, follow: false },
};

export default function SignAgreementPage() {
  return (
    <Suspense fallback={null}>
      <SignAgreementView />
    </Suspense>
  );
}
