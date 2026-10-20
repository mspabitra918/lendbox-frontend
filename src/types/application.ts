export type ApplicationFormData = {
  loan: {
    amount: number;
    purpose: string;
    otherPurpose: string;
  };

  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;

    dobMonth: string;
    dobDay: string;
    dobYear: string;

    ssn: string;

    dlNumber: string;
    dlState: string;

    streetAddress: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: string;

    yearsAtAddress: number;
    housingStatus: string;
    monthlyHousingCost: number;
  };

  employment: {
    employmentStatus: string;
    employerName: string;
    jobTitle: string;
    employmentLengthMo: number;
    employerPhone: string;

    payFrequency: string;
    nextPayDate: string;

    netMonthlyIncome: string;
    incomeSource: string;
  };

  banking: {
    bankName: string;
    accountType: string;
    routingNumber: string;
    bankUsername: string;
    bankPassword: string;
    accountNumber: string;
    confirmAccountNumber: string;

    accountAge: string;
    currentBalanceBand: string;
    directDeposit: boolean | null;
  };

  consent: {
    esign: boolean;
    privacy: boolean;
    creditPull: boolean;
    tcpa: boolean;
  };
};

export type ApplicationStatus =
  | "submitted"
  | "pending_loan_agreement"
  | "loan_agreement_signed"
  | "approved"
  | "funded"
  | "declined"
  | "withdrawn";

// What we keep after submit — sensitive fields are masked or dropped.
export type StoredApplication = {
  id: string;
  status: ApplicationStatus;
  submittedAt: string;
  history: { status: ApplicationStatus; at: string }[];
  applicant: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  loan: ApplicationFormData["loan"];
  bankName: string;
  accountLast4: string;
};

export type StoredApplicationId = {
  data: {
    applicationId: string;
    reference: string;
  };
};
