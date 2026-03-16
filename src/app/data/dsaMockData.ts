// Centralized Mock Data for DSA Onboarding Simulations
import { DSARecord } from '../types/dsa';
import type { EmpanelmentDetails } from '../types/dsa';

export interface ProductMasterItem {
  id: string; productCode: string; productName: string; category: string;
  minPayoutPct: number; maxPayoutPct: number; defaultPayoutPct: number; maxCapPct: number;
  isActive: boolean; processingFeeRange: string; tenureRange: string; loanAmountRange: string;
  interestRateRange: string; lastUpdated: string;
}

export const bankProductMaster: ProductMasterItem[] = [
  { id: 'pm-001', productCode: 'HL-001', productName: 'Home Loan', category: 'Secured', minPayoutPct: 0.25, maxPayoutPct: 1.50, defaultPayoutPct: 0.50, maxCapPct: 2.0, isActive: true, processingFeeRange: '0.25% - 0.50%', tenureRange: '5 - 30 years', loanAmountRange: '\u20B95L - \u20B910Cr', interestRateRange: '8.25% - 9.50%', lastUpdated: '2026-01-15' },
  { id: 'pm-002', productCode: 'PL-001', productName: 'Personal Loan', category: 'Unsecured', minPayoutPct: 0.50, maxPayoutPct: 2.00, defaultPayoutPct: 1.00, maxCapPct: 3.0, isActive: true, processingFeeRange: '1.00% - 2.50%', tenureRange: '1 - 5 years', loanAmountRange: '\u20B950K - \u20B940L', interestRateRange: '10.49% - 16.00%', lastUpdated: '2026-01-15' },
  { id: 'pm-003', productCode: 'LAP-001', productName: 'LAP', category: 'Secured', minPayoutPct: 0.30, maxPayoutPct: 1.50, defaultPayoutPct: 0.75, maxCapPct: 2.5, isActive: true, processingFeeRange: '0.50% - 1.00%', tenureRange: '3 - 15 years', loanAmountRange: '\u20B910L - \u20B95Cr', interestRateRange: '9.00% - 11.50%', lastUpdated: '2026-01-15' },
  { id: 'pm-004', productCode: 'BL-001', productName: 'Business Loan', category: 'Unsecured', minPayoutPct: 0.40, maxPayoutPct: 1.50, defaultPayoutPct: 0.80, maxCapPct: 2.5, isActive: true, processingFeeRange: '1.00% - 2.00%', tenureRange: '1 - 7 years', loanAmountRange: '\u20B91L - \u20B950L', interestRateRange: '11.00% - 18.00%', lastUpdated: '2026-01-15' },
  { id: 'pm-005', productCode: 'CL-001', productName: 'Car Loan', category: 'Secured', minPayoutPct: 0.25, maxPayoutPct: 1.00, defaultPayoutPct: 0.60, maxCapPct: 2.0, isActive: true, processingFeeRange: '0.50% - 1.00%', tenureRange: '1 - 7 years', loanAmountRange: '\u20B92L - \u20B91Cr', interestRateRange: '8.50% - 11.00%', lastUpdated: '2026-01-15' },
  { id: 'pm-006', productCode: 'EL-001', productName: 'Education Loan', category: 'Unsecured', minPayoutPct: 0.20, maxPayoutPct: 1.00, defaultPayoutPct: 0.50, maxCapPct: 1.5, isActive: true, processingFeeRange: '0.00% - 0.50%', tenureRange: '5 - 15 years', loanAmountRange: '\u20B91L - \u20B91.5Cr', interestRateRange: '8.00% - 10.50%', lastUpdated: '2026-02-01' },
  { id: 'pm-007', productCode: 'GL-001', productName: 'Gold Loan', category: 'Secured', minPayoutPct: 0.15, maxPayoutPct: 0.75, defaultPayoutPct: 0.40, maxCapPct: 1.0, isActive: true, processingFeeRange: '0.25% - 1.00%', tenureRange: '3 months - 3 years', loanAmountRange: '\u20B925K - \u20B950L', interestRateRange: '7.50% - 9.50%', lastUpdated: '2026-02-01' },
];

const stdPayouts = (prefix: string, date: string, req: boolean) => [
  { id: `${prefix}-1`, productName: 'Home Loan', payoutPercentage: 0.50, maxCap: 2.0, effectiveDate: date, version: 1, requiresApproval: req },
  { id: `${prefix}-2`, productName: 'Personal Loan', payoutPercentage: 1.00, maxCap: 3.0, effectiveDate: date, version: 1, requiresApproval: req },
  { id: `${prefix}-3`, productName: 'LAP', payoutPercentage: 0.75, maxCap: 2.5, effectiveDate: date, version: 1, requiresApproval: req },
  { id: `${prefix}-4`, productName: 'Business Loan', payoutPercentage: 0.80, maxCap: 2.5, effectiveDate: date, version: 1, requiresApproval: req },
  { id: `${prefix}-5`, productName: 'Car Loan', payoutPercentage: 0.60, maxCap: 2.0, effectiveDate: date, version: 1, requiresApproval: req },
  { id: `${prefix}-6`, productName: 'Education Loan', payoutPercentage: 0.50, maxCap: 1.5, effectiveDate: date, version: 1, requiresApproval: req },
  { id: `${prefix}-7`, productName: 'Gold Loan', payoutPercentage: 0.40, maxCap: 1.0, effectiveDate: date, version: 1, requiresApproval: req },
];

export const individualDSA: DSARecord = {
  id: 'dsa-ind-001', applicationNumber: 'DSA/2026/00042', dsaType: 'Individual',
  name: 'Rajesh Mohan Sharma', pan: 'BXRPS4521K', mobile: '9823456789',
  email: 'rajesh.sharma@gmail.com', state: 'Maharashtra', status: 'Tier1Review', currentTier: 'Tier1',
  submittedDate: '2026-02-25T09:15:00Z', makerName: 'Anita Deshmukh', makerId: 'PF-108234', riskScore: 68,
  formData: {
    dsaType: 'Individual',
    individualDetails: { fullName: 'Rajesh Mohan Sharma', pan: 'BXRPS4521K', aadhaar: 'XXXX-XXXX-7842', mobile: '9823456789', email: 'rajesh.sharma@gmail.com', address: 'Flat No. 402, Sai Krupa Society, Karve Nagar, Pune, Maharashtra 411052', state: 'Maharashtra', dateOfBirth: '1985-07-15' },
    bankAccount: { accountHolderName: 'Rajesh Mohan Sharma', bankName: 'Federal Bank', branch: 'Pune Camp Branch', ifsc: 'FDRL0001856', accountNumber: '11520110045623', accountType: 'Savings' },
    productPayouts: stdPayouts('pp-i', '2026-02-25', true),
    documents: [
      { id: 'doc-i-1', documentType: 'PAN Card', documentName: 'PAN Card - BXRPS4521K', status: 'Uploaded', uploadedDate: '2026-02-25T09:05:00Z' },
      { id: 'doc-i-2', documentType: 'Aadhaar Card', documentName: 'Aadhaar Card (Masked)', status: 'Uploaded', uploadedDate: '2026-02-25T09:06:00Z' },
      { id: 'doc-i-3', documentType: 'Address Proof', documentName: 'Electricity Bill - Feb 2026', status: 'Uploaded', uploadedDate: '2026-02-25T09:07:00Z' },
      { id: 'doc-i-4', documentType: 'Bank Statement', documentName: 'Cancelled Cheque - Federal Bank', status: 'Uploaded', uploadedDate: '2026-02-25T09:08:00Z' },
      { id: 'doc-i-5', documentType: 'Photograph', documentName: 'Passport Size Photo', status: 'Uploaded', uploadedDate: '2026-02-25T09:09:00Z' },
      { id: 'doc-i-6', documentType: 'Educational Qualification', documentName: 'Graduation Certificate', status: 'Uploaded', uploadedDate: '2026-02-25T09:10:00Z' },
    ],
    agreementAccepted: true, empanelmentValidityYears: 2,
  },
  approvalHistory: [],
};

export const entityDSA: DSARecord = {
  id: 'dsa-ent-001', applicationNumber: 'DSA/2026/00038', dsaType: 'Entity',
  name: 'Pinnacle Financial Services LLP', pan: 'AADPF7832M', mobile: '9876012345',
  email: 'operations@pinnaclefs.co.in', state: 'Gujarat', status: 'Tier3Review', currentTier: 'Tier3',
  submittedDate: '2026-02-18T11:30:00Z', makerName: 'Vikram Patil', makerId: 'PF-104567', riskScore: 82,
  formData: {
    dsaType: 'Entity',
    entityDetails: { entityName: 'Pinnacle Financial Services LLP', pan: 'AADPF7832M', constitution: 'LLP', cin: 'AAB-4521', registeredAddress: 'Office 601-604, Pinnacle Business Hub, S.G. Highway, Ahmedabad, Gujarat 380054', primaryContactPerson: 'Mehul Joshi', primaryContactMobile: '9876012345', primaryContactEmail: 'mehul.joshi@pinnaclefs.co.in',
      gstns: [
        { id: 'gstn-e-1', gstn: '24AADPF7832M1Z9', state: 'Gujarat', isActive: true, verificationStatus: 'Verified' },
        { id: 'gstn-e-2', gstn: '27AADPF7832M1Z3', state: 'Maharashtra', isActive: true, verificationStatus: 'Verified' },
        { id: 'gstn-e-3', gstn: '29AADPF7832M1Z7', state: 'Karnataka', isActive: true, verificationStatus: 'Verified' },
        { id: 'gstn-e-4', gstn: '33AADPF7832M1Z5', state: 'Tamil Nadu', isActive: false, verificationStatus: 'Pending' },
      ],
    },
    bankAccount: { accountHolderName: 'Pinnacle Financial Services LLP', bankName: 'Federal Bank', branch: 'Ahmedabad Main Branch', ifsc: 'FDRL0002010', accountNumber: '20560110078912', accountType: 'Current' },
    productPayouts: [
      { id: 'pp-e-1', productName: 'Home Loan', payoutPercentage: 0.55, maxCap: 2.0, effectiveDate: '2026-02-18', version: 1, requiresApproval: true },
      { id: 'pp-e-2', productName: 'Personal Loan', payoutPercentage: 1.10, maxCap: 3.0, effectiveDate: '2026-02-18', version: 1, requiresApproval: true },
      { id: 'pp-e-3', productName: 'LAP', payoutPercentage: 0.80, maxCap: 2.5, effectiveDate: '2026-02-18', version: 1, requiresApproval: true },
      { id: 'pp-e-4', productName: 'Business Loan', payoutPercentage: 0.90, maxCap: 2.5, effectiveDate: '2026-02-18', version: 1, requiresApproval: true },
      { id: 'pp-e-5', productName: 'Car Loan', payoutPercentage: 0.65, maxCap: 2.0, effectiveDate: '2026-02-18', version: 1, requiresApproval: true },
      { id: 'pp-e-6', productName: 'Education Loan', payoutPercentage: 0.50, maxCap: 1.5, effectiveDate: '2026-02-18', version: 1, requiresApproval: true },
      { id: 'pp-e-7', productName: 'Gold Loan', payoutPercentage: 0.45, maxCap: 1.0, effectiveDate: '2026-02-18', version: 1, requiresApproval: true },
    ],
    documents: [
      { id: 'doc-e-1', documentType: 'Entity PAN Card', documentName: 'PAN Card - AADPF7832M', status: 'Verified', uploadedDate: '2026-02-18T11:15:00Z' },
      { id: 'doc-e-2', documentType: 'LLP Agreement', documentName: 'LLP Deed of Partnership', status: 'Verified', uploadedDate: '2026-02-18T11:16:00Z' },
      { id: 'doc-e-3', documentType: 'GST Certificate', documentName: 'GST Registration - Gujarat', status: 'Verified', uploadedDate: '2026-02-18T11:17:00Z' },
      { id: 'doc-e-4', documentType: 'GST Certificate', documentName: 'GST Registration - Maharashtra', status: 'Verified', uploadedDate: '2026-02-18T11:18:00Z' },
      { id: 'doc-e-5', documentType: 'GST Certificate', documentName: 'GST Registration - Karnataka', status: 'Verified', uploadedDate: '2026-02-18T11:19:00Z' },
      { id: 'doc-e-6', documentType: 'Bank Statement', documentName: 'Cancelled Cheque - Federal Bank', status: 'Verified', uploadedDate: '2026-02-18T11:20:00Z' },
      { id: 'doc-e-7', documentType: 'Address Proof', documentName: 'Registered Office Lease Agreement', status: 'Verified', uploadedDate: '2026-02-18T11:21:00Z' },
      { id: 'doc-e-8', documentType: 'Partner KYC', documentName: 'Mehul Joshi - PAN + Aadhaar', status: 'Verified', uploadedDate: '2026-02-18T11:22:00Z' },
      { id: 'doc-e-9', documentType: 'Partner KYC', documentName: 'Nisha Joshi - PAN + Aadhaar', status: 'Uploaded', uploadedDate: '2026-02-18T11:23:00Z' },
      { id: 'doc-e-10', documentType: 'Board Resolution', documentName: 'Authorization Letter', status: 'Verified', uploadedDate: '2026-02-18T11:24:00Z' },
    ],
    agreementAccepted: true, empanelmentValidityYears: 3,
  },
  approvalHistory: [
    { id: 'ah-e-1', tier: 'Tier1', action: 'Approve', performedBy: 'Suresh Nair', performedByRole: 'Tier 1 Officer - Initial Scrutiny', timestamp: '2026-02-19T14:30:00Z', remarks: 'All documents verified. PAN verified via NSDL. All 3 active GSTNs cross-verified.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-e-2', tier: 'Tier2', action: 'Approve', performedBy: 'Priya Menon', performedByRole: 'Tier 2 Officer - Risk & Compliance', timestamp: '2026-02-21T10:45:00Z', remarks: 'CIBIL check clean. AML/KYC compliance verified. Risk rating: Low.', documentsVerified: true, riskRating: 'Low' },
  ],
};

export const approvedEntityDSA: DSARecord = {
  id: 'dsa-ent-002', applicationNumber: 'DSA/2026/00015', dsaType: 'Entity',
  name: 'Apex Finance Corp', pan: 'AAPCA5678B', mobile: '9876543210',
  email: 'contact@apexfinance.com', state: 'Maharashtra', status: 'Active',
  submittedDate: '2026-02-05T10:00:00Z', approvedDate: '2026-02-12T16:00:00Z',
  makerName: 'John Doe', makerId: 'PF-100123', riskScore: 72,
  formData: {
    dsaType: 'Entity',
    entityDetails: { entityName: 'Apex Finance Corp', pan: 'AAPCA5678B', constitution: 'Company', cin: 'U65999MH2020PTC123456', registeredAddress: '123 Business Park, Lower Parel, Mumbai, Maharashtra 400013', primaryContactPerson: 'Amit Sharma', primaryContactMobile: '9876543210', primaryContactEmail: 'amit@apexfinance.com',
      gstns: [
        { id: 'gstn-a-1', gstn: '27AAPCA5678B1Z5', state: 'Maharashtra', isActive: true, verificationStatus: 'Verified' },
        { id: 'gstn-a-2', gstn: '29AAPCA5678B1Z3', state: 'Karnataka', isActive: true, verificationStatus: 'Verified' },
      ],
    },
    bankAccount: { accountHolderName: 'Apex Finance Corp', bankName: 'State Bank of India', branch: 'Fort Mumbai', ifsc: 'SBIN0001234', accountNumber: '12345678901', accountType: 'Current' },
    productPayouts: stdPayouts('pp-a', '2026-02-12', false),
    documents: [
      { id: 'doc-a-1', documentType: 'Entity PAN Card', documentName: 'PAN Card - AAPCA5678B', status: 'Verified', uploadedDate: '2026-02-05T10:00:00Z' },
      { id: 'doc-a-2', documentType: 'GST Certificate', documentName: 'GST Registration - Maharashtra', status: 'Verified', uploadedDate: '2026-02-05T10:05:00Z' },
      { id: 'doc-a-3', documentType: 'GST Certificate', documentName: 'GST Registration - Karnataka', status: 'Verified', uploadedDate: '2026-02-05T10:06:00Z' },
      { id: 'doc-a-4', documentType: 'Bank Statement', documentName: 'Cancelled Cheque - SBI Fort', status: 'Verified', uploadedDate: '2026-02-05T10:10:00Z' },
      { id: 'doc-a-5', documentType: 'MOA/AOA', documentName: 'Memorandum & Articles', status: 'Verified', uploadedDate: '2026-02-05T10:12:00Z' },
      { id: 'doc-a-6', documentType: 'Board Resolution', documentName: 'Board Resolution for DSA', status: 'Verified', uploadedDate: '2026-02-05T10:15:00Z' },
    ],
    agreementAccepted: true, empanelmentValidityYears: 2,
  },
  approvalHistory: [
    { id: 'ah-a-1', tier: 'Tier1', action: 'Approve', performedBy: 'Ramesh Kumar', performedByRole: 'Tier 1 Officer', timestamp: '2026-02-06T10:00:00Z', remarks: 'All documents verified.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-a-2', tier: 'Tier2', action: 'Approve', performedBy: 'Sneha Gupta', performedByRole: 'Tier 2 Officer', timestamp: '2026-02-08T11:30:00Z', remarks: 'CIBIL clear. AML passed.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-a-3', tier: 'Tier3', action: 'Approve', performedBy: 'Manoj Tiwari', performedByRole: 'Tier 3 Officer', timestamp: '2026-02-10T14:00:00Z', remarks: 'Credit committee approved.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-a-4', tier: 'Tier4', action: 'Approve', performedBy: 'Dr. R. Venkataraman', performedByRole: 'Tier 4 - HO Final Authority', timestamp: '2026-02-12T16:00:00Z', remarks: 'Final approval granted.', documentsVerified: true, riskRating: 'Low' },
  ],
  dsaCode: { masterCode: 'DSA000145', subCodes: [{ code: 'DSA000145-MH', state: 'Maharashtra', gstn: '27AAPCA5678B1Z5', isActive: true }, { code: 'DSA000145-KA', state: 'Karnataka', gstn: '29AAPCA5678B1Z3', isActive: true }], generatedDate: '2026-02-12T16:00:00Z' },
  empanelment: { id: 'emp-001', letterRefNumber: 'FB/DSA/EMP/2026/00015', generatedDate: '2026-02-13T10:00:00Z', generatedBy: 'Ramesh Kumar', validityYears: 2, validFrom: '2026-02-14', validTill: '2028-02-14', status: 'Executed', dsaSignedDate: '2026-02-14T11:00:00Z', dsaSignedBy: 'Amit Sharma', dsaSignatureMode: 'Digital', bankSignedDate: '2026-02-14T14:30:00Z', bankSignedBy: 'Sneha Gupta', bankSignatoryDesignation: 'Regional Manager - DSA Operations', bankSignatureMode: 'Digital', executedDate: '2026-02-14T14:30:00Z', remarks: 'Empanelment letter executed. DSA active across Maharashtra & Karnataka.' },
};

export const approvedIndividualDSA: DSARecord = {
  id: 'dsa-ind-003', applicationNumber: 'DSA/2026/00022', dsaType: 'Individual',
  name: 'Sunita Verma', pan: 'DEXPV3245L', mobile: '9845678901',
  email: 'sunita.verma@outlook.com', state: 'Delhi', status: 'Active',
  submittedDate: '2026-01-28T09:00:00Z', approvedDate: '2026-02-06T14:30:00Z',
  makerName: 'Rohit Mehra', makerId: 'PF-106789', riskScore: 65,
  formData: {
    dsaType: 'Individual',
    individualDetails: { fullName: 'Sunita Verma', pan: 'DEXPV3245L', aadhaar: 'XXXX-XXXX-9123', mobile: '9845678901', email: 'sunita.verma@outlook.com', address: 'B-45, Saket, New Delhi, Delhi 110017', state: 'Delhi', dateOfBirth: '1988-11-20' },
    bankAccount: { accountHolderName: 'Sunita Verma', bankName: 'Federal Bank', branch: 'Delhi Connaught Place', ifsc: 'FDRL0003050', accountNumber: '30780110056789', accountType: 'Savings' },
    productPayouts: [
      { id: 'pp-sv-1', productName: 'Home Loan', payoutPercentage: 0.45, maxCap: 2.0, effectiveDate: '2026-02-06', version: 1, requiresApproval: false },
      { id: 'pp-sv-2', productName: 'Personal Loan', payoutPercentage: 0.90, maxCap: 3.0, effectiveDate: '2026-02-06', version: 1, requiresApproval: false },
      { id: 'pp-sv-3', productName: 'LAP', payoutPercentage: 0.70, maxCap: 2.5, effectiveDate: '2026-02-06', version: 1, requiresApproval: false },
      { id: 'pp-sv-4', productName: 'Business Loan', payoutPercentage: 0.75, maxCap: 2.5, effectiveDate: '2026-02-06', version: 1, requiresApproval: false },
      { id: 'pp-sv-5', productName: 'Car Loan', payoutPercentage: 0.55, maxCap: 2.0, effectiveDate: '2026-02-06', version: 1, requiresApproval: false },
      { id: 'pp-sv-6', productName: 'Education Loan', payoutPercentage: 0.45, maxCap: 1.5, effectiveDate: '2026-02-06', version: 1, requiresApproval: false },
      { id: 'pp-sv-7', productName: 'Gold Loan', payoutPercentage: 0.35, maxCap: 1.0, effectiveDate: '2026-02-06', version: 1, requiresApproval: false },
    ],
    documents: [
      { id: 'doc-sv-1', documentType: 'PAN Card', documentName: 'PAN Card - DEXPV3245L', status: 'Verified', uploadedDate: '2026-01-28T08:50:00Z' },
      { id: 'doc-sv-2', documentType: 'Aadhaar Card', documentName: 'Aadhaar Card (Masked)', status: 'Verified', uploadedDate: '2026-01-28T08:51:00Z' },
      { id: 'doc-sv-3', documentType: 'Address Proof', documentName: 'Passport', status: 'Verified', uploadedDate: '2026-01-28T08:52:00Z' },
      { id: 'doc-sv-4', documentType: 'Bank Statement', documentName: 'Cancelled Cheque', status: 'Verified', uploadedDate: '2026-01-28T08:53:00Z' },
      { id: 'doc-sv-5', documentType: 'Photograph', documentName: 'Passport Size Photo', status: 'Verified', uploadedDate: '2026-01-28T08:54:00Z' },
    ],
    agreementAccepted: true, empanelmentValidityYears: 1,
  },
  approvalHistory: [
    { id: 'ah-sv-1', tier: 'Tier1', action: 'Approve', performedBy: 'Kavita Reddy', performedByRole: 'Tier 1 Officer', timestamp: '2026-01-29T10:00:00Z', remarks: 'All documents verified.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-sv-2', tier: 'Tier2', action: 'Approve', performedBy: 'Priya Menon', performedByRole: 'Tier 2 Officer', timestamp: '2026-01-31T11:30:00Z', remarks: 'CIBIL clear. Low risk.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-sv-3', tier: 'Tier3', action: 'Approve', performedBy: 'Manoj Tiwari', performedByRole: 'Tier 3 Officer', timestamp: '2026-02-03T14:00:00Z', remarks: 'Rates within limits.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-sv-4', tier: 'Tier4', action: 'Approve', performedBy: 'Dr. R. Venkataraman', performedByRole: 'Tier 4 - HO Final Authority', timestamp: '2026-02-06T14:30:00Z', remarks: 'Final approval.', documentsVerified: true, riskRating: 'Low' },
  ],
  dsaCode: { masterCode: 'DSA000167', subCodes: [{ code: 'DSA000167-DL', state: 'Delhi', isActive: true }], generatedDate: '2026-02-06T14:30:00Z' },
  empanelment: { id: 'emp-002', letterRefNumber: 'FB/DSA/EMP/2026/00022', generatedDate: '2026-02-07T09:00:00Z', generatedBy: 'Kavita Reddy', validityYears: 1, validFrom: '2026-02-07', validTill: '2027-02-07', status: 'Executed', dsaSignedDate: '2026-02-07T11:00:00Z', dsaSignedBy: 'Sunita Verma', dsaSignatureMode: 'Physical', bankSignedDate: '2026-02-07T15:00:00Z', bankSignedBy: 'Priya Menon', bankSignatoryDesignation: 'Branch Manager', bankSignatureMode: 'Physical', executedDate: '2026-02-07T15:00:00Z', remarks: 'Physical empanelment letter executed.' },
};

export const approvedEntityDSA2: DSARecord = {
  id: 'dsa-ent-004', applicationNumber: 'DSA/2026/00008', dsaType: 'Entity',
  name: 'Southern Capital Partners LLP', pan: 'AASPS8765N', mobile: '9712345678',
  email: 'ops@southerncapital.in', state: 'Tamil Nadu', status: 'Active',
  submittedDate: '2026-01-15T10:00:00Z', approvedDate: '2026-01-28T16:00:00Z',
  makerName: 'Anita Deshmukh', makerId: 'PF-108234', riskScore: 75,
  formData: {
    dsaType: 'Entity',
    entityDetails: { entityName: 'Southern Capital Partners LLP', pan: 'AASPS8765N', constitution: 'LLP', cin: 'AAG-9987', registeredAddress: '4th Floor, Tidel Park, Taramani, Chennai, Tamil Nadu 600113', primaryContactPerson: 'Venkatesh Iyer', primaryContactMobile: '9712345678', primaryContactEmail: 'venkatesh@southerncapital.in',
      gstns: [
        { id: 'gstn-sc-1', gstn: '33AASPS8765N1Z4', state: 'Tamil Nadu', isActive: true, verificationStatus: 'Verified' },
        { id: 'gstn-sc-2', gstn: '32AASPS8765N1Z6', state: 'Kerala', isActive: true, verificationStatus: 'Verified' },
        { id: 'gstn-sc-3', gstn: '29AASPS8765N1Z2', state: 'Karnataka', isActive: true, verificationStatus: 'Verified' },
      ],
    },
    bankAccount: { accountHolderName: 'Southern Capital Partners LLP', bankName: 'Federal Bank', branch: 'Chennai T Nagar Branch', ifsc: 'FDRL0004120', accountNumber: '41200110098765', accountType: 'Current' },
    productPayouts: [
      { id: 'pp-sc-1', productName: 'Home Loan', payoutPercentage: 0.55, maxCap: 2.0, effectiveDate: '2026-01-28', version: 1, requiresApproval: false },
      { id: 'pp-sc-2', productName: 'Personal Loan', payoutPercentage: 1.05, maxCap: 3.0, effectiveDate: '2026-01-28', version: 1, requiresApproval: false },
      { id: 'pp-sc-3', productName: 'LAP', payoutPercentage: 0.80, maxCap: 2.5, effectiveDate: '2026-01-28', version: 1, requiresApproval: false },
      { id: 'pp-sc-4', productName: 'Business Loan', payoutPercentage: 0.85, maxCap: 2.5, effectiveDate: '2026-01-28', version: 1, requiresApproval: false },
      { id: 'pp-sc-5', productName: 'Car Loan', payoutPercentage: 0.60, maxCap: 2.0, effectiveDate: '2026-01-28', version: 1, requiresApproval: false },
      { id: 'pp-sc-6', productName: 'Education Loan', payoutPercentage: 0.50, maxCap: 1.5, effectiveDate: '2026-01-28', version: 1, requiresApproval: false },
      { id: 'pp-sc-7', productName: 'Gold Loan', payoutPercentage: 0.40, maxCap: 1.0, effectiveDate: '2026-01-28', version: 1, requiresApproval: false },
    ],
    documents: [
      { id: 'doc-sc-1', documentType: 'Entity PAN Card', documentName: 'PAN Card - AASPS8765N', status: 'Verified', uploadedDate: '2026-01-15T09:50:00Z' },
      { id: 'doc-sc-2', documentType: 'LLP Agreement', documentName: 'LLP Deed of Partnership', status: 'Verified', uploadedDate: '2026-01-15T09:51:00Z' },
      { id: 'doc-sc-3', documentType: 'GST Certificate', documentName: 'GST Registration - Tamil Nadu', status: 'Verified', uploadedDate: '2026-01-15T09:52:00Z' },
      { id: 'doc-sc-4', documentType: 'GST Certificate', documentName: 'GST Registration - Kerala', status: 'Verified', uploadedDate: '2026-01-15T09:53:00Z' },
      { id: 'doc-sc-5', documentType: 'GST Certificate', documentName: 'GST Registration - Karnataka', status: 'Verified', uploadedDate: '2026-01-15T09:54:00Z' },
      { id: 'doc-sc-6', documentType: 'Bank Statement', documentName: 'Cancelled Cheque - Federal Bank Chennai', status: 'Verified', uploadedDate: '2026-01-15T09:55:00Z' },
    ],
    agreementAccepted: true, empanelmentValidityYears: 3,
  },
  approvalHistory: [
    { id: 'ah-sc-1', tier: 'Tier1', action: 'Approve', performedBy: 'Suresh Nair', performedByRole: 'Tier 1 Officer', timestamp: '2026-01-16T10:00:00Z', remarks: 'All documents verified.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-sc-2', tier: 'Tier2', action: 'Approve', performedBy: 'Sneha Gupta', performedByRole: 'Tier 2 Officer', timestamp: '2026-01-20T11:00:00Z', remarks: 'Compliance clear. Low risk.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-sc-3', tier: 'Tier3', action: 'Approve', performedBy: 'Manoj Tiwari', performedByRole: 'Tier 3 Officer', timestamp: '2026-01-24T14:00:00Z', remarks: 'Multi-state ops well-structured.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-sc-4', tier: 'Tier4', action: 'Approve', performedBy: 'Dr. R. Venkataraman', performedByRole: 'Tier 4 - HO Final Authority', timestamp: '2026-01-28T16:00:00Z', remarks: 'Final approval granted.', documentsVerified: true, riskRating: 'Low' },
  ],
  dsaCode: { masterCode: 'DSA000132', subCodes: [{ code: 'DSA000132-TN', state: 'Tamil Nadu', gstn: '33AASPS8765N1Z4', isActive: true }, { code: 'DSA000132-KL', state: 'Kerala', gstn: '32AASPS8765N1Z6', isActive: true }, { code: 'DSA000132-KA', state: 'Karnataka', gstn: '29AASPS8765N1Z2', isActive: true }], generatedDate: '2026-01-28T16:00:00Z' },
  empanelment: { id: 'emp-003', letterRefNumber: 'FB/DSA/EMP/2026/00008', generatedDate: '2026-01-29T10:00:00Z', generatedBy: 'Suresh Nair', validityYears: 3, validFrom: '2026-01-30', validTill: '2029-01-30', status: 'Executed', dsaSignedDate: '2026-01-30T10:30:00Z', dsaSignedBy: 'Venkatesh Iyer', dsaSignatureMode: 'Digital', bankSignedDate: '2026-01-30T14:00:00Z', bankSignedBy: 'Sneha Gupta', bankSignatoryDesignation: 'Regional Manager', bankSignatureMode: 'Digital', executedDate: '2026-01-30T14:00:00Z', remarks: 'Multi-state empanelment executed for 3 years.' },
};

export const tier2IndividualDSA: DSARecord = {
  id: 'dsa-ind-002', applicationNumber: 'DSA/2026/00039', dsaType: 'Individual',
  name: 'Pradeep Kumar Yadav', pan: 'CKFPY9012H', mobile: '9911223344',
  email: 'pradeep.yadav@yahoo.com', state: 'Uttar Pradesh', status: 'Tier2Review', currentTier: 'Tier2',
  submittedDate: '2026-02-20T08:00:00Z', makerName: 'Sanjay Mishra', makerId: 'PF-107890', riskScore: 55,
  formData: {
    dsaType: 'Individual',
    individualDetails: { fullName: 'Pradeep Kumar Yadav', pan: 'CKFPY9012H', aadhaar: 'XXXX-XXXX-3456', mobile: '9911223344', email: 'pradeep.yadav@yahoo.com', address: '45, Civil Lines, Lucknow, UP 226001', state: 'Uttar Pradesh', dateOfBirth: '1990-03-22' },
    bankAccount: { accountHolderName: 'Pradeep Kumar Yadav', bankName: 'Bank of Baroda', branch: 'Lucknow Hazratganj', ifsc: 'BARB0LUKNOW', accountNumber: '26450100012345', accountType: 'Savings' },
    productPayouts: stdPayouts('pp-p', '2026-02-20', true),
    documents: [
      { id: 'doc-p-1', documentType: 'PAN Card', documentName: 'PAN Card - CKFPY9012H', status: 'Verified', uploadedDate: '2026-02-20T07:50:00Z' },
      { id: 'doc-p-2', documentType: 'Aadhaar Card', documentName: 'Aadhaar Card (Masked)', status: 'Verified', uploadedDate: '2026-02-20T07:51:00Z' },
      { id: 'doc-p-3', documentType: 'Address Proof', documentName: 'Voter ID Card', status: 'Verified', uploadedDate: '2026-02-20T07:52:00Z' },
      { id: 'doc-p-4', documentType: 'Bank Statement', documentName: 'Cancelled Cheque - BOB', status: 'Verified', uploadedDate: '2026-02-20T07:53:00Z' },
      { id: 'doc-p-5', documentType: 'Photograph', documentName: 'Passport Size Photo', status: 'Uploaded', uploadedDate: '2026-02-20T07:54:00Z' },
    ],
    agreementAccepted: true, empanelmentValidityYears: 2,
  },
  approvalHistory: [
    { id: 'ah-p-1', tier: 'Tier1', action: 'Approve', performedBy: 'Kavita Reddy', performedByRole: 'Tier 1 Officer', timestamp: '2026-02-21T09:15:00Z', remarks: 'All documents verified. PAN cross-checked. No duplicates.', documentsVerified: true, riskRating: 'Medium' },
  ],
};

export const tier4EntityDSA: DSARecord = {
  id: 'dsa-ent-003', applicationNumber: 'DSA/2026/00031', dsaType: 'Entity',
  name: 'Mumbai Finance Solutions Pvt Ltd', pan: 'AABCM1234F', mobile: '9867543210',
  email: 'admin@mumbaifinance.co.in', state: 'Maharashtra', status: 'Tier4Review', currentTier: 'Tier4',
  submittedDate: '2026-02-10T14:00:00Z', makerName: 'Deepak Shah', makerId: 'PF-102345', riskScore: 78,
  formData: {
    dsaType: 'Entity',
    entityDetails: { entityName: 'Mumbai Finance Solutions Pvt Ltd', pan: 'AABCM1234F', constitution: 'Company', cin: 'U65999MH2019PTC312456', registeredAddress: 'Tower B, 12th Floor, BKC, Mumbai, MH 400051', primaryContactPerson: 'Arjun Kapoor', primaryContactMobile: '9867543210', primaryContactEmail: 'arjun@mumbaifinance.co.in',
      gstns: [
        { id: 'gstn-m-1', gstn: '27AABCM1234F1Z8', state: 'Maharashtra', isActive: true, verificationStatus: 'Verified' },
        { id: 'gstn-m-2', gstn: '07AABCM1234F1Z2', state: 'Delhi', isActive: true, verificationStatus: 'Verified' },
      ],
    },
    bankAccount: { accountHolderName: 'Mumbai Finance Solutions Pvt Ltd', bankName: 'HDFC Bank', branch: 'BKC Mumbai', ifsc: 'HDFC0001234', accountNumber: '50200034567890', accountType: 'Current' },
    productPayouts: stdPayouts('pp-m', '2026-02-10', true),
    documents: [
      { id: 'doc-m-1', documentType: 'Entity PAN Card', documentName: 'PAN Card - AABCM1234F', status: 'Verified', uploadedDate: '2026-02-10T13:50:00Z' },
      { id: 'doc-m-2', documentType: 'Certificate of Incorporation', documentName: 'COI with CIN', status: 'Verified', uploadedDate: '2026-02-10T13:51:00Z' },
      { id: 'doc-m-3', documentType: 'GST Certificate', documentName: 'GST Registration - Maharashtra', status: 'Verified', uploadedDate: '2026-02-10T13:52:00Z' },
      { id: 'doc-m-4', documentType: 'GST Certificate', documentName: 'GST Registration - Delhi', status: 'Verified', uploadedDate: '2026-02-10T13:53:00Z' },
      { id: 'doc-m-5', documentType: 'Bank Statement', documentName: 'Cancelled Cheque - HDFC', status: 'Verified', uploadedDate: '2026-02-10T13:54:00Z' },
      { id: 'doc-m-6', documentType: 'MOA/AOA', documentName: 'MOA & AOA', status: 'Verified', uploadedDate: '2026-02-10T13:55:00Z' },
      { id: 'doc-m-7', documentType: 'Board Resolution', documentName: 'Board Resolution', status: 'Verified', uploadedDate: '2026-02-10T13:56:00Z' },
      { id: 'doc-m-8', documentType: 'Director KYC', documentName: 'Arjun Kapoor - PAN + Aadhaar + DIN', status: 'Verified', uploadedDate: '2026-02-10T13:57:00Z' },
    ],
    agreementAccepted: true, empanelmentValidityYears: 2,
  },
  approvalHistory: [
    { id: 'ah-m-1', tier: 'Tier1', action: 'Approve', performedBy: 'Suresh Nair', performedByRole: 'Tier 1 Officer', timestamp: '2026-02-11T10:00:00Z', remarks: 'All documents verified. CIN cross-checked with MCA portal.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-m-2', tier: 'Tier2', action: 'Approve', performedBy: 'Priya Menon', performedByRole: 'Tier 2 Officer', timestamp: '2026-02-13T11:45:00Z', remarks: 'CIBIL satisfactory. AML/KYC verified. Low risk.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-m-3', tier: 'Tier3', action: 'Approve', performedBy: 'Manoj Tiwari', performedByRole: 'Tier 3 Officer', timestamp: '2026-02-16T15:30:00Z', remarks: 'Credit committee approved. Recommended for final HO approval.', documentsVerified: true, riskRating: 'Low' },
  ],
};

export const pendingEmpanelmentDSA: DSARecord = {
  id: 'dsa-ind-005', applicationNumber: 'DSA/2026/00047', dsaType: 'Individual',
  name: 'Arun Mehta', pan: 'BCAPM6789Q', mobile: '9834567890',
  email: 'arun.mehta@gmail.com', state: 'Gujarat', status: 'PendingEmpanelment',
  submittedDate: '2026-02-28T10:00:00Z', approvedDate: '2026-03-10T15:00:00Z',
  makerName: 'Vikram Patil', makerId: 'PF-104567', riskScore: 60,
  formData: {
    dsaType: 'Individual',
    individualDetails: { fullName: 'Arun Mehta', pan: 'BCAPM6789Q', aadhaar: 'XXXX-XXXX-5678', mobile: '9834567890', email: 'arun.mehta@gmail.com', address: '12, Shahibaug Society, Ahmedabad, Gujarat 380006', state: 'Gujarat', dateOfBirth: '1982-04-10' },
    bankAccount: { accountHolderName: 'Arun Mehta', bankName: 'Federal Bank', branch: 'Ahmedabad SG Highway', ifsc: 'FDRL0002015', accountNumber: '20150110034567', accountType: 'Savings' },
    productPayouts: stdPayouts('pp-am', '2026-03-10', false),
    documents: [
      { id: 'doc-am-1', documentType: 'PAN Card', documentName: 'PAN Card - BCAPM6789Q', status: 'Verified', uploadedDate: '2026-02-28T09:50:00Z' },
      { id: 'doc-am-2', documentType: 'Aadhaar Card', documentName: 'Aadhaar Card (Masked)', status: 'Verified', uploadedDate: '2026-02-28T09:51:00Z' },
      { id: 'doc-am-3', documentType: 'Address Proof', documentName: 'Utility Bill', status: 'Verified', uploadedDate: '2026-02-28T09:52:00Z' },
      { id: 'doc-am-4', documentType: 'Bank Statement', documentName: 'Cancelled Cheque', status: 'Verified', uploadedDate: '2026-02-28T09:53:00Z' },
      { id: 'doc-am-5', documentType: 'Photograph', documentName: 'Passport Size Photo', status: 'Verified', uploadedDate: '2026-02-28T09:54:00Z' },
    ],
    agreementAccepted: true, empanelmentValidityYears: 2,
  },
  approvalHistory: [
    { id: 'ah-am-1', tier: 'Tier1', action: 'Approve', performedBy: 'Suresh Nair', performedByRole: 'Tier 1 Officer', timestamp: '2026-03-02T10:00:00Z', remarks: 'All docs verified.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-am-2', tier: 'Tier2', action: 'Approve', performedBy: 'Priya Menon', performedByRole: 'Tier 2 Officer', timestamp: '2026-03-04T11:00:00Z', remarks: 'CIBIL clear.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-am-3', tier: 'Tier3', action: 'Approve', performedBy: 'Manoj Tiwari', performedByRole: 'Tier 3 Officer', timestamp: '2026-03-07T14:00:00Z', remarks: 'Rates within limits.', documentsVerified: true, riskRating: 'Low' },
    { id: 'ah-am-4', tier: 'Tier4', action: 'Approve', performedBy: 'Dr. R. Venkataraman', performedByRole: 'Tier 4 - HO Final Authority', timestamp: '2026-03-10T15:00:00Z', remarks: 'Final approval. Empanelment to be generated.', documentsVerified: true, riskRating: 'Low' },
  ],
  dsaCode: { masterCode: 'DSA000189', subCodes: [{ code: 'DSA000189-GJ', state: 'Gujarat', isActive: true }], generatedDate: '2026-03-10T15:00:00Z' },
  empanelment: { id: 'emp-004', letterRefNumber: 'FB/DSA/EMP/2026/00047', generatedDate: '2026-03-11T09:00:00Z', generatedBy: 'Vikram Patil', validityYears: 2, validFrom: '2026-03-11', validTill: '2028-03-11', status: 'LetterGenerated', remarks: 'Awaiting DSA and Bank signatures.' },
};

export const allMockDSAs: DSARecord[] = [
  individualDSA, tier2IndividualDSA, entityDSA, tier4EntityDSA,
  pendingEmpanelmentDSA, approvedEntityDSA, approvedIndividualDSA, approvedEntityDSA2,
];

export function findDSAById(id: string): DSARecord | undefined { return allMockDSAs.find(dsa => dsa.id === id); }
export function getDSAsByTier(tier: string): DSARecord[] { return allMockDSAs.filter(dsa => dsa.currentTier === tier); }
export function getApprovedDSAs(): DSARecord[] { return allMockDSAs.filter(dsa => dsa.status === 'Active' || dsa.status === 'Approved'); }
export function getEmpanelmentDSAs(): DSARecord[] { return allMockDSAs.filter(dsa => dsa.status === 'PendingEmpanelment' || dsa.status === 'Active' || dsa.status === 'Approved'); }