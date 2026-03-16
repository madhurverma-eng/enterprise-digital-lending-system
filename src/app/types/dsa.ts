// DSA Onboarding & Lifecycle Management Types

export type DSAType = 'Individual' | 'Entity';
export type EntityConstitution = 'Company' | 'LLP' | 'Partnership' | 'Proprietorship';
export type DSAStatus = 'Draft' | 'Submitted' | 'Tier1Review' | 'Tier2Review' | 'Tier3Review' | 'Tier4Review' | 'Approved' | 'PendingEmpanelment' | 'Rejected' | 'Active' | 'Suspended' | 'SendBack';
export type ApprovalTier = 'Tier1' | 'Tier2' | 'Tier3' | 'Tier4';
export type ActionType = 'Approve' | 'Reject' | 'SendBack';

// Area of Operations
export interface OperationArea {
  id: string;
  state: string;
  district: string;
  city: string;
}

export interface AreaOfOperations {
  isPanIndia: boolean;
  areas: OperationArea[]; // Used when isPanIndia is false
}

// GSTN Management
export interface GSTN {
  id: string;
  gstn: string;
  state: string;
  isActive: boolean;
  verificationStatus: 'Verified' | 'Pending' | 'Failed';
}

// Product Payout Configuration
export interface ProductPayout {
  id: string;
  productName: string;
  payoutPercentage: number;
  maxCap: number;
  effectiveDate: string;
  version: number;
  modifiedBy?: string;
  modifiedDate?: string;
  requiresApproval: boolean;
}

export const DEFAULT_PRODUCTS: Omit<ProductPayout, 'id' | 'effectiveDate' | 'version'>[] = [
  { productName: 'Home Loan', payoutPercentage: 0.5, maxCap: 2.0, requiresApproval: true },
  { productName: 'Personal Loan', payoutPercentage: 1.0, maxCap: 3.0, requiresApproval: true },
  { productName: 'LAP', payoutPercentage: 0.75, maxCap: 2.5, requiresApproval: true },
  { productName: 'Business Loan', payoutPercentage: 0.8, maxCap: 2.5, requiresApproval: true },
  { productName: 'Car Loan', payoutPercentage: 0.6, maxCap: 2.0, requiresApproval: true },
  { productName: 'Education Loan', payoutPercentage: 0.5, maxCap: 1.5, requiresApproval: true },
  { productName: 'Gold Loan', payoutPercentage: 0.4, maxCap: 1.0, requiresApproval: true },
];

// Master DSA Code Structure
export interface DSACode {
  masterCode: string; // e.g., DSA000145
  subCodes: DSASubCode[]; // State-wise sub codes
  generatedDate: string;
}

export interface DSASubCode {
  code: string; // e.g., DSA000145-MH
  state: string;
  gstn?: string;
  isActive: boolean;
}

// Individual DSA Details
export interface IndividualDSADetails {
  fullName: string;
  pan: string;
  aadhaar?: string; // Optional masked
  mobile: string;
  email: string;
  address: string;
  state: string;
  dateOfBirth?: string;
}

// Entity DSA Details
export interface EntityDSADetails {
  entityName: string;
  pan: string; // Entity PAN
  constitution: EntityConstitution | '';
  cin?: string; // If applicable
  registeredAddress: string;
  primaryContactPerson: string;
  primaryContactMobile: string;
  primaryContactEmail: string;
  gstns: GSTN[]; // Multi-state GSTNs
}

// Bank Account Details
export interface BankAccountDetails {
  accountHolderName: string;
  bankName: string;
  branch: string;
  ifsc: string;
  accountNumber: string;
  accountType: 'Savings' | 'Current' | '';
}

// Document Upload
export interface DSADocument {
  id: string;
  documentType: string;
  documentName: string;
  uploadedDate?: string;
  status: 'Uploaded' | 'Pending' | 'Verified' | 'Rejected';
  remarks?: string;
  file?: File;
}

// Empanelment / Agreement Management
export type EmpanelmentStatus = 'Pending' | 'LetterGenerated' | 'DSASigned' | 'BankSigned' | 'Executed' | 'Expired';

export interface EmpanelmentDetails {
  id: string;
  letterRefNumber: string;           // e.g., FB/DSA/EMP/2026/00042
  generatedDate: string;
  generatedBy: string;
  validityYears: number;             // 1, 2 or 3 years
  validFrom: string;                 // Agreement start date
  validTill: string;                 // Agreement end date (derived from validityYears)
  status: EmpanelmentStatus;
  // DSA Signature
  dsaSignedDate?: string;
  dsaSignedBy?: string;              // Name of the DSA / authorized signatory
  dsaSignatureMode?: 'Digital' | 'Physical';
  // Bank Signature
  bankSignedDate?: string;
  bankSignedBy?: string;             // Authorized bank officer
  bankSignatoryDesignation?: string;
  bankSignatureMode?: 'Digital' | 'Physical';
  // Execution
  executedDate?: string;
  remarks?: string;
}

// Complete DSA Form Data
export interface DSAFormData {
  dsaType: DSAType | '';
  individualDetails?: IndividualDSADetails;
  entityDetails?: EntityDSADetails;
  bankAccount: BankAccountDetails;
  selectedProducts?: string[]; // Product names selected during onboarding
  areaOfOperations?: AreaOfOperations;
  productPayouts: ProductPayout[];
  documents: DSADocument[];
  agreementAccepted: boolean;
  empanelmentValidityYears?: number; // 1, 2, or 3 years — selected during onboarding
}

// Approval Action
export interface ApprovalAction {
  id: string;
  tier: ApprovalTier;
  action: ActionType;
  performedBy: string;
  performedByRole: string;
  timestamp: string;
  remarks: string;
  riskRating?: 'Low' | 'Medium' | 'High';
  documentsVerified?: boolean;
}

// Complete DSA Record
export interface DSARecord {
  id: string;
  applicationNumber: string;
  dsaType: DSAType;
  name: string;
  pan: string;
  mobile: string;
  email: string;
  state: string;
  status: DSAStatus;
  currentTier?: ApprovalTier;
  submittedDate: string;
  approvedDate?: string;
  formData: DSAFormData;
  approvalHistory: ApprovalAction[];
  dsaCode?: DSACode;
  riskScore?: number;
  makerName: string;
  makerId: string;
  empanelment?: EmpanelmentDetails;
}

// Audit Trail
export interface AuditEntry {
  id: string;
  timestamp: string;
  action: string;
  performedBy: string;
  performedByRole: string;
  details: string;
  previousValue?: string;
  newValue?: string;
}

// Bulk Upload
export interface BulkUploadRecord {
  rowNumber: number;
  dsaName: string;
  pan: string;
  type: string;
  mobile: string;
  email: string;
  address: string;
  state: string;
  bankAccount: string;
  ifsc: string;
  homeLoanPayout?: number;
  personalLoanPayout?: number;
  lapPayout?: number;
  businessLoanPayout?: number;
  carLoanPayout?: number;
  educationLoanPayout?: number;
  goldLoanPayout?: number;
  validationStatus: 'Valid' | 'Invalid';
  validationErrors: string[];
}

export interface BulkUploadResult {
  id: string;
  uploadedDate: string;
  uploadedBy: string;
  fileName: string;
  totalRecords: number;
  validRecords: number;
  invalidRecords: number;
  records: BulkUploadRecord[];
  status: 'Preview' | 'Submitted' | 'Processing' | 'Completed';
}