// Billing, Payout & Admin Management Types

export type PayoutStatus = 'Eligible' | 'Pending' | 'Approved' | 'Rejected' | 'SpecialRate' | 'Hold';
export type MatchStatus = 'Match' | 'Partial' | 'Mismatch';
export type SpecialRateStage = 'Initiated' | 'L1Checker' | 'L2Approver' | 'FinalApproval' | 'Applied' | 'Rejected';
export type NotificationChannel = 'SMS' | 'Email';
export type NotificationStatus = 'Sent' | 'Failed' | 'Pending';
export type RejectCategory = 'DocumentIssue' | 'PolicyViolation' | 'DataMismatch' | 'DuplicateClaim' | 'Other';
export type SpecialRateReason = 'Campaign' | 'Exception' | 'Correction' | 'PremiumDSA' | 'Other';

export interface PayoutLead {
  id: string;
  leadId: string;
  applicantName: string;
  dsaMasterCode: string;
  dsaSubCode: string;
  dsaName: string;
  product: string;
  disbursementDate: string;
  disbursedAmount: number;
  basePayoutPercent: number;
  calculatedPayout: number;
  status: PayoutStatus;
  lmsMatch: boolean;
  cbsMatch: boolean;
  sanctionAmount: number;
  applicationDate: string;
  accountRef: string;
  cbsDisbursementStatus: string;
  specialPayoutPercent?: number;
  specialPayoutAmount?: number;
  ruleVersion: string;
  effectiveDate: string;
  comments: string[];
}

export interface ReconciliationRecord {
  id: string;
  leadId: string;
  lmsStatus: string;
  cbsStatus: string;
  lmsDisbursementAmount: number;
  cbsDisbursementAmount: number;
  lmsDisbursementDate: string;
  cbsDisbursementDate: string;
  matchStatus: MatchStatus;
  resolutionAction: string;
  product: string;
  dsaMasterCode: string;
}

export interface SpecialRateRequest {
  id: string;
  leadId: string;
  dsaMasterCode: string;
  dsaName: string;
  product: string;
  currentPayoutPercent: number;
  requestedPayoutPercent: number;
  requestedPayoutAmount: number;
  reason: SpecialRateReason;
  justification: string;
  attachment?: string;
  stage: SpecialRateStage;
  initiatedBy: string;
  initiatedDate: string;
  approverHistory: SpecialRateApproval[];
}

export interface SpecialRateApproval {
  stage: SpecialRateStage;
  approver: string;
  role: string;
  action: 'Approved' | 'Rejected' | 'SendBack';
  date: string;
  remarks: string;
}

export interface DSAProfile {
  id: string;
  masterCode: string;
  name: string;
  pan: string;
  mobile: string;
  email: string;
  photograph?: string;
  type: 'Individual' | 'Entity';
  status: 'Active' | 'Inactive' | 'Suspended';
  state: string;
  subCodes: { code: string; state: string; gstn?: string; isActive: boolean }[];
  bankAccount: { bankName: string; branch: string; ifsc: string; accountNumber: string; accountType: string };
  productsEnabled: string[];
  totalLeads: number;
  totalDisbursed: number;
  totalPayout: number;
  joiningDate: string;
}

export interface NotificationTemplate {
  id: string;
  name: string;
  channel: NotificationChannel;
  trigger: string;
  subject?: string;
  body: string;
  isActive: boolean;
  lastModified: string;
}

export interface NotificationLog {
  id: string;
  timestamp: string;
  channel: NotificationChannel;
  recipient: string;
  templateName: string;
  status: NotificationStatus;
  retryCount: number;
  leadId?: string;
  dsaCode?: string;
}

export interface BillingAuditLog {
  id: string;
  timestamp: string;
  user: string;
  userRole: string;
  module: 'Billing' | 'DSAProfile' | 'SpecialRate' | 'PayoutRules' | 'Notification';
  action: string;
  reference: string;
  previousValue?: string;
  newValue?: string;
  remarks?: string;
  otpVerified?: boolean;
}

export interface PayoutRule {
  id: string;
  product: string;
  payoutPercent: number;
  maxCap: number;
  effectiveDate: string;
  version: number;
  status: 'Active' | 'Draft' | 'PendingApproval' | 'Archived';
  createdBy: string;
  approvedBy?: string;
  createdDate: string;
}
