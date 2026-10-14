import type { Metadata } from "next";
import RegisterForm from "@/components/borrower/RegisterForm";

export const metadata: Metadata = {
  title: "Apply for a Loan – Lendbox",
  description: "Apply for a personal loan with Lendbox in minutes.",
};

export default function BorrowerRegisterPage() {
  return <RegisterForm />;
}
