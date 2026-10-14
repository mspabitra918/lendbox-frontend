import type { Metadata } from "next";
import ThankYou from "@/components/borrower/ThankYou";

export const metadata: Metadata = {
  title: "Application Submitted – Lendbox",
};

export default function ThankYouPage() {
  return <ThankYou />;
}
