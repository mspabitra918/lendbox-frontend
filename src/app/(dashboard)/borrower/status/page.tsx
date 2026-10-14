import type { Metadata } from "next";
import ApplicationStatusView from "@/components/borrower/ApplicationStatusView";

export const metadata: Metadata = {
  title: "Application Status – Lendbox",
};

export default function ApplicationStatusPage() {
  return <ApplicationStatusView />;
}
