import type {
  PayoutLead, ReconciliationRecord, SpecialRateRequest, DSAProfile,
  NotificationTemplate, NotificationLog, BillingAuditLog, PayoutRule
} from '../types/billing';

export const mockPayoutLeads: PayoutLead[] = [
  {
    id: 'PL001', leadId: 'LD-2026-00145', applicantName: 'R***h K***r', dsaMasterCode: 'DSA000145',
    dsaSubCode: 'DSA000145-MH', dsaName: 'Apex Finance Corp', product: 'Home Loan',
    disbursementDate: '2026-02-18', disbursedAmount: 4500000, basePayoutPercent: 0.50,
    calculatedPayout: 22500, status: 'Eligible', lmsMatch: true, cbsMatch: true,
    sanctionAmount: 5000000, applicationDate: '2026-01-10', accountRef: 'XXXX1234',
    cbsDisbursementStatus: 'Disbursed', ruleVersion: 'v3.2', effectiveDate: '2026-01-01', comments: []
  },
  {
    id: 'PL002', leadId: 'LD-2026-00146', applicantName: 'S***a M***i', dsaMasterCode: 'DSA000132',
    dsaSubCode: 'DSA000132-DL', dsaName: 'Delhi DSA Services', product: 'Personal Loan',
    disbursementDate: '2026-02-17', disbursedAmount: 800000, basePayoutPercent: 1.00,
    calculatedPayout: 8000, status: 'Pending', lmsMatch: true, cbsMatch: true,
    sanctionAmount: 800000, applicationDate: '2026-01-15', accountRef: 'XXXX5678',
    cbsDisbursementStatus: 'Disbursed', ruleVersion: 'v3.2', effectiveDate: '2026-01-01', comments: []
  },
  {
    id: 'PL003', leadId: 'LD-2026-00147', applicantName: 'P***l S***h', dsaMasterCode: 'DSA000145',
    dsaSubCode: 'DSA000145-GJ', dsaName: 'Apex Finance Corp', product: 'LAP',
    disbursementDate: '2026-02-15', disbursedAmount: 2500000, basePayoutPercent: 0.75,
    calculatedPayout: 18750, status: 'Approved', lmsMatch: true, cbsMatch: true,
    sanctionAmount: 3000000, applicationDate: '2026-01-08', accountRef: 'XXXX9012',
    cbsDisbursementStatus: 'Disbursed', ruleVersion: 'v3.2', effectiveDate: '2026-01-01', comments: ['Verified and approved']
  },
  {
    id: 'PL004', leadId: 'LD-2026-00148', applicantName: 'A***a G***a', dsaMasterCode: 'DSA000118',
    dsaSubCode: 'DSA000118-KA', dsaName: 'Rajesh Kumar', product: 'Business Loan',
    disbursementDate: '2026-02-14', disbursedAmount: 1500000, basePayoutPercent: 0.80,
    calculatedPayout: 12000, status: 'Rejected', lmsMatch: true, cbsMatch: false,
    sanctionAmount: 2000000, applicationDate: '2026-01-05', accountRef: 'XXXX3456',
    cbsDisbursementStatus: 'Disbursed', ruleVersion: 'v3.2', effectiveDate: '2026-01-01', comments: ['CBS mismatch - amount discrepancy']
  },
  {
    id: 'PL005', leadId: 'LD-2026-00149', applicantName: 'V***t R***y', dsaMasterCode: 'DSA000155',
    dsaSubCode: 'DSA000155-TN', dsaName: 'Chennai Finance Hub', product: 'Car Loan',
    disbursementDate: '2026-02-12', disbursedAmount: 700000, basePayoutPercent: 0.60,
    calculatedPayout: 4200, status: 'SpecialRate', lmsMatch: true, cbsMatch: true,
    sanctionAmount: 700000, applicationDate: '2026-01-20', accountRef: 'XXXX7890',
    cbsDisbursementStatus: 'Disbursed', specialPayoutPercent: 1.2, specialPayoutAmount: 8400,
    ruleVersion: 'v3.2', effectiveDate: '2026-01-01', comments: ['Premium DSA - special rate requested']
  },
  {
    id: 'PL006', leadId: 'LD-2026-00150', applicantName: 'N***a J***n', dsaMasterCode: 'DSA000132',
    dsaSubCode: 'DSA000132-DL', dsaName: 'Delhi DSA Services', product: 'Education Loan',
    disbursementDate: '2026-02-10', disbursedAmount: 1200000, basePayoutPercent: 0.50,
    calculatedPayout: 6000, status: 'Eligible', lmsMatch: true, cbsMatch: true,
    sanctionAmount: 1200000, applicationDate: '2026-01-12', accountRef: 'XXXX2345',
    cbsDisbursementStatus: 'Disbursed', ruleVersion: 'v3.2', effectiveDate: '2026-01-01', comments: []
  },
  {
    id: 'PL007', leadId: 'LD-2026-00151', applicantName: 'M***d A***r', dsaMasterCode: 'DSA000145',
    dsaSubCode: 'DSA000145-MH', dsaName: 'Apex Finance Corp', product: 'Gold Loan',
    disbursementDate: '2026-02-20', disbursedAmount: 500000, basePayoutPercent: 0.40,
    calculatedPayout: 2000, status: 'Hold', lmsMatch: false, cbsMatch: true,
    sanctionAmount: 500000, applicationDate: '2026-02-01', accountRef: 'XXXX6789',
    cbsDisbursementStatus: 'Disbursed', ruleVersion: 'v3.2', effectiveDate: '2026-01-01', comments: ['LMS data pending sync']
  },
  {
    id: 'PL008', leadId: 'LD-2026-00152', applicantName: 'D***a B***e', dsaMasterCode: 'DSA000160',
    dsaSubCode: 'DSA000160-WB', dsaName: 'Eastern Finance Partners', product: 'Home Loan',
    disbursementDate: '2026-02-19', disbursedAmount: 3200000, basePayoutPercent: 0.50,
    calculatedPayout: 16000, status: 'Pending', lmsMatch: true, cbsMatch: true,
    sanctionAmount: 3500000, applicationDate: '2026-01-25', accountRef: 'XXXX0123',
    cbsDisbursementStatus: 'Disbursed', ruleVersion: 'v3.2', effectiveDate: '2026-01-01', comments: []
  },
];

export const mockReconciliation: ReconciliationRecord[] = [
  { id: 'RC001', leadId: 'LD-2026-00145', lmsStatus: 'Disbursed', cbsStatus: 'Disbursed', lmsDisbursementAmount: 4500000, cbsDisbursementAmount: 4500000, lmsDisbursementDate: '2026-02-18', cbsDisbursementDate: '2026-02-18', matchStatus: 'Match', resolutionAction: '-', product: 'Home Loan', dsaMasterCode: 'DSA000145' },
  { id: 'RC002', leadId: 'LD-2026-00146', lmsStatus: 'Disbursed', cbsStatus: 'Disbursed', lmsDisbursementAmount: 800000, cbsDisbursementAmount: 800000, lmsDisbursementDate: '2026-02-17', cbsDisbursementDate: '2026-02-17', matchStatus: 'Match', resolutionAction: '-', product: 'Personal Loan', dsaMasterCode: 'DSA000132' },
  { id: 'RC003', leadId: 'LD-2026-00148', lmsStatus: 'Disbursed', cbsStatus: 'Disbursed', lmsDisbursementAmount: 2000000, cbsDisbursementAmount: 1500000, lmsDisbursementDate: '2026-02-14', cbsDisbursementDate: '2026-02-14', matchStatus: 'Mismatch', resolutionAction: 'Manual Review', product: 'Business Loan', dsaMasterCode: 'DSA000118' },
  { id: 'RC004', leadId: 'LD-2026-00151', lmsStatus: 'Processing', cbsStatus: 'Disbursed', lmsDisbursementAmount: 0, cbsDisbursementAmount: 500000, lmsDisbursementDate: '-', cbsDisbursementDate: '2026-02-20', matchStatus: 'Mismatch', resolutionAction: 'Request Correction', product: 'Gold Loan', dsaMasterCode: 'DSA000145' },
  { id: 'RC005', leadId: 'LD-2026-00150', lmsStatus: 'Disbursed', cbsStatus: 'Disbursed', lmsDisbursementAmount: 1200000, cbsDisbursementAmount: 1200000, lmsDisbursementDate: '2026-02-10', cbsDisbursementDate: '2026-02-11', matchStatus: 'Partial', resolutionAction: 'Hold Payout', product: 'Education Loan', dsaMasterCode: 'DSA000132' },
  { id: 'RC006', leadId: 'LD-2026-00152', lmsStatus: 'Disbursed', cbsStatus: 'Disbursed', lmsDisbursementAmount: 3200000, cbsDisbursementAmount: 3200000, lmsDisbursementDate: '2026-02-19', cbsDisbursementDate: '2026-02-19', matchStatus: 'Match', resolutionAction: '-', product: 'Home Loan', dsaMasterCode: 'DSA000160' },
];

export const mockSpecialRateRequests: SpecialRateRequest[] = [
  {
    id: 'SR001', leadId: 'LD-2026-00149', dsaMasterCode: 'DSA000155', dsaName: 'Chennai Finance Hub',
    product: 'Car Loan', currentPayoutPercent: 0.60, requestedPayoutPercent: 1.20,
    requestedPayoutAmount: 8400, reason: 'PremiumDSA', justification: 'Top performing DSA with 50+ disbursals this quarter.',
    stage: 'L2Approver', initiatedBy: 'Billing Officer A', initiatedDate: '2026-02-15',
    approverHistory: [
      { stage: 'L1Checker', approver: 'Suresh Nair', role: 'Sr. Billing Officer', action: 'Approved', date: '2026-02-16', remarks: 'Valid premium DSA request' }
    ]
  },
  {
    id: 'SR002', leadId: 'LD-2026-00153', dsaMasterCode: 'DSA000145', dsaName: 'Apex Finance Corp',
    product: 'Home Loan', currentPayoutPercent: 0.50, requestedPayoutPercent: 0.75,
    requestedPayoutAmount: 33750, reason: 'Campaign', justification: 'Festival season campaign - approved by marketing.',
    stage: 'FinalApproval', initiatedBy: 'Billing Officer B', initiatedDate: '2026-02-10',
    approverHistory: [
      { stage: 'L1Checker', approver: 'Suresh Nair', role: 'Sr. Billing Officer', action: 'Approved', date: '2026-02-11', remarks: 'Campaign verified' },
      { stage: 'L2Approver', approver: 'Meena Sharma', role: 'Billing Manager', action: 'Approved', date: '2026-02-12', remarks: 'Within budget' }
    ]
  },
  {
    id: 'SR003', leadId: 'LD-2026-00154', dsaMasterCode: 'DSA000132', dsaName: 'Delhi DSA Services',
    product: 'Personal Loan', currentPayoutPercent: 1.00, requestedPayoutPercent: 1.50,
    requestedPayoutAmount: 12000, reason: 'Exception', justification: 'One-time exception for high-value referral cluster.',
    stage: 'Initiated', initiatedBy: 'Billing Officer A', initiatedDate: '2026-02-22',
    approverHistory: []
  },
];

export const mockDSAProfiles: DSAProfile[] = [
  {
    id: 'DP001', masterCode: 'DSA000145', name: 'Apex Finance Corp', pan: 'AABCA1234E',
    mobile: '9876543210', email: 'apex@financelp.com', type: 'Entity', status: 'Active',
    state: 'Maharashtra',
    subCodes: [
      { code: 'DSA000145-MH', state: 'Maharashtra', gstn: '27AABCA1234E1ZP', isActive: true },
      { code: 'DSA000145-GJ', state: 'Gujarat', gstn: '24AABCA1234E1ZQ', isActive: true },
      { code: 'DSA000145-KA', state: 'Karnataka', gstn: '29AABCA1234E1ZR', isActive: false },
    ],
    bankAccount: { bankName: 'Federal Bank', branch: 'Fort Branch Mumbai', ifsc: 'FDRL0001234', accountNumber: 'XXXX4567', accountType: 'Current' },
    productsEnabled: ['Home Loan', 'LAP', 'Personal Loan', 'Business Loan', 'Car Loan'],
    totalLeads: 234, totalDisbursed: 189, totalPayout: 1456000, joiningDate: '2024-06-15'
  },
  {
    id: 'DP002', masterCode: 'DSA000132', name: 'Delhi DSA Services', pan: 'AADD5678E',
    mobile: '9876501234', email: 'info@delhidsa.com', type: 'Entity', status: 'Active',
    state: 'Delhi',
    subCodes: [
      { code: 'DSA000132-DL', state: 'Delhi', gstn: '07AADD5678E1ZP', isActive: true },
      { code: 'DSA000132-HR', state: 'Haryana', gstn: '06AADD5678E1ZQ', isActive: true },
    ],
    bankAccount: { bankName: 'Federal Bank', branch: 'Connaught Place', ifsc: 'FDRL0005678', accountNumber: 'XXXX8901', accountType: 'Current' },
    productsEnabled: ['Personal Loan', 'Education Loan', 'Home Loan'],
    totalLeads: 156, totalDisbursed: 120, totalPayout: 870000, joiningDate: '2024-09-20'
  },
  {
    id: 'DP003', masterCode: 'DSA000118', name: 'Rajesh Kumar', pan: 'BKRPK1234A',
    mobile: '9988776655', email: 'rajesh.kumar@gmail.com', type: 'Individual', status: 'Active',
    state: 'Karnataka',
    subCodes: [
      { code: 'DSA000118-KA', state: 'Karnataka', isActive: true },
    ],
    bankAccount: { bankName: 'Federal Bank', branch: 'MG Road Bangalore', ifsc: 'FDRL0009012', accountNumber: 'XXXX2345', accountType: 'Savings' },
    productsEnabled: ['Business Loan', 'Personal Loan'],
    totalLeads: 45, totalDisbursed: 32, totalPayout: 256000, joiningDate: '2025-01-10'
  },
  {
    id: 'DP004', masterCode: 'DSA000155', name: 'Chennai Finance Hub', pan: 'AACF9012E',
    mobile: '9876512345', email: 'contact@chennaifinhub.com', type: 'Entity', status: 'Active',
    state: 'Tamil Nadu',
    subCodes: [
      { code: 'DSA000155-TN', state: 'Tamil Nadu', gstn: '33AACF9012E1ZP', isActive: true },
      { code: 'DSA000155-KL', state: 'Kerala', gstn: '32AACF9012E1ZQ', isActive: true },
    ],
    bankAccount: { bankName: 'Federal Bank', branch: 'Anna Salai Chennai', ifsc: 'FDRL0003456', accountNumber: 'XXXX6789', accountType: 'Current' },
    productsEnabled: ['Car Loan', 'Home Loan', 'Personal Loan', 'Gold Loan'],
    totalLeads: 312, totalDisbursed: 267, totalPayout: 2150000, joiningDate: '2024-03-05'
  },
  {
    id: 'DP005', masterCode: 'DSA000160', name: 'Eastern Finance Partners', pan: 'AAEF3456E',
    mobile: '9876567890', email: 'efp@easternfin.com', type: 'Entity', status: 'Inactive',
    state: 'West Bengal',
    subCodes: [
      { code: 'DSA000160-WB', state: 'West Bengal', gstn: '19AAEF3456E1ZP', isActive: true },
    ],
    bankAccount: { bankName: 'Federal Bank', branch: 'Park Street Kolkata', ifsc: 'FDRL0007890', accountNumber: 'XXXX0123', accountType: 'Current' },
    productsEnabled: ['Home Loan', 'Personal Loan'],
    totalLeads: 78, totalDisbursed: 55, totalPayout: 420000, joiningDate: '2025-04-12'
  },
];

export const mockNotificationTemplates: NotificationTemplate[] = [
  { id: 'NT001', name: 'Payout Eligible', channel: 'SMS', trigger: 'Lead marked Eligible for payout', body: 'Dear {DSA_NAME}, Lead {LEAD_ID} for {PRODUCT} is eligible for payout of Rs.{PAYOUT_AMOUNT}. DSA Code: {MASTER_CODE}. Date: {DATE}', isActive: true, lastModified: '2026-01-15' },
  { id: 'NT002', name: 'Payout Eligible', channel: 'Email', trigger: 'Lead marked Eligible for payout', subject: 'Payout Eligible - Lead {LEAD_ID}', body: 'Dear {DSA_NAME},\\n\\nYour lead {LEAD_ID} for {PRODUCT} has been marked as eligible for payout.\\n\\nPayout Amount: Rs.{PAYOUT_AMOUNT}\\nDSA Code: {MASTER_CODE}\\nStatus: {STATUS}\\nDate: {DATE}\\n\\nRegards,\\nFederal Bank DSA Payout Team', isActive: true, lastModified: '2026-01-15' },
  { id: 'NT003', name: 'Payout Approved', channel: 'SMS', trigger: 'Payout approved', body: 'Dear {DSA_NAME}, Payout of Rs.{PAYOUT_AMOUNT} approved for Lead {LEAD_ID} ({PRODUCT}). Credited to Master Code {MASTER_CODE}. Ref Date: {DATE}', isActive: true, lastModified: '2026-01-15' },
  { id: 'NT004', name: 'Payout Approved', channel: 'Email', trigger: 'Payout approved', subject: 'Payout Approved - Rs.{PAYOUT_AMOUNT}', body: 'Dear {DSA_NAME},\\n\\nPayout has been approved for the following lead:\\n\\nLead ID: {LEAD_ID}\\nProduct: {PRODUCT}\\nPayout Amount: Rs.{PAYOUT_AMOUNT}\\nDSA Code: {MASTER_CODE}\\nDate: {DATE}\\n\\nThe amount will be credited to your registered bank account.\\n\\nRegards,\\nFederal Bank DSA Payout Team', isActive: true, lastModified: '2026-01-15' },
  { id: 'NT005', name: 'Payout Rejected', channel: 'SMS', trigger: 'Payout rejected', body: 'Dear {DSA_NAME}, Payout for Lead {LEAD_ID} ({PRODUCT}) has been rejected. Status: {STATUS}. Contact branch for details. Date: {DATE}', isActive: true, lastModified: '2026-01-15' },
  { id: 'NT006', name: 'Special Rate Request', channel: 'Email', trigger: 'Special rate requested', subject: 'Special Rate Request - Lead {LEAD_ID}', body: 'Dear {DSA_NAME},\\n\\nA special payout rate has been requested for your lead {LEAD_ID}.\\n\\nProduct: {PRODUCT}\\nRequested Amount: Rs.{PAYOUT_AMOUNT}\\nDSA Code: {MASTER_CODE}\\nStatus: Under Review\\n\\nRegards,\\nFederal Bank DSA Payout Team', isActive: true, lastModified: '2026-02-01' },
  { id: 'NT007', name: 'Profile Updated', channel: 'SMS', trigger: 'Profile updates', body: 'Dear {DSA_NAME}, Your profile has been updated successfully. Change: {STATUS}. DSA Code: {MASTER_CODE}. Date: {DATE}. If not done by you, contact bank immediately.', isActive: true, lastModified: '2026-01-20' },
  { id: 'NT008', name: 'OTP Verification', channel: 'SMS', trigger: 'OTP sent', body: 'Your OTP for DSA profile update is {STATUS}. Valid for 5 minutes. Do not share with anyone. - Federal Bank', isActive: true, lastModified: '2026-01-20' },
];

export const mockNotificationLogs: NotificationLog[] = [
  { id: 'NL001', timestamp: '2026-02-24 10:30:00', channel: 'SMS', recipient: '9876543210', templateName: 'Payout Eligible', status: 'Sent', retryCount: 0, leadId: 'LD-2026-00145', dsaCode: 'DSA000145' },
  { id: 'NL002', timestamp: '2026-02-24 10:30:05', channel: 'Email', recipient: 'apex@financelp.com', templateName: 'Payout Eligible', status: 'Sent', retryCount: 0, leadId: 'LD-2026-00145', dsaCode: 'DSA000145' },
  { id: 'NL003', timestamp: '2026-02-23 14:20:00', channel: 'SMS', recipient: '9876501234', templateName: 'Payout Approved', status: 'Sent', retryCount: 0, leadId: 'LD-2026-00147', dsaCode: 'DSA000132' },
  { id: 'NL004', timestamp: '2026-02-23 14:20:05', channel: 'Email', recipient: 'info@delhidsa.com', templateName: 'Payout Approved', status: 'Failed', retryCount: 2, leadId: 'LD-2026-00147', dsaCode: 'DSA000132' },
  { id: 'NL005', timestamp: '2026-02-22 09:15:00', channel: 'SMS', recipient: '9876512345', templateName: 'Special Rate Request', status: 'Sent', retryCount: 0, leadId: 'LD-2026-00149', dsaCode: 'DSA000155' },
  { id: 'NL006', timestamp: '2026-02-22 09:15:05', channel: 'Email', recipient: 'contact@chennaifinhub.com', templateName: 'Special Rate Request', status: 'Sent', retryCount: 0, leadId: 'LD-2026-00149', dsaCode: 'DSA000155' },
  { id: 'NL007', timestamp: '2026-02-21 16:45:00', channel: 'SMS', recipient: '9988776655', templateName: 'Payout Rejected', status: 'Sent', retryCount: 0, leadId: 'LD-2026-00148', dsaCode: 'DSA000118' },
  { id: 'NL008', timestamp: '2026-02-20 11:00:00', channel: 'SMS', recipient: '9876543210', templateName: 'OTP Verification', status: 'Sent', retryCount: 0, dsaCode: 'DSA000145' },
  { id: 'NL009', timestamp: '2026-02-20 10:55:00', channel: 'SMS', recipient: '9876543210', templateName: 'Profile Updated', status: 'Sent', retryCount: 0, dsaCode: 'DSA000145' },
  { id: 'NL010', timestamp: '2026-02-19 08:30:00', channel: 'Email', recipient: 'efp@easternfin.com', templateName: 'Payout Eligible', status: 'Pending', retryCount: 1, leadId: 'LD-2026-00152', dsaCode: 'DSA000160' },
];

export const mockAuditLogs: BillingAuditLog[] = [
  { id: 'AL001', timestamp: '2026-02-24 10:25:00', user: 'Admin User', userRole: 'Super Admin', module: 'Billing', action: 'Payout Approved', reference: 'LD-2026-00147 / DSA000145', remarks: 'Verified and approved', previousValue: 'Eligible', newValue: 'Approved' },
  { id: 'AL002', timestamp: '2026-02-24 09:30:00', user: 'Billing Officer A', userRole: 'Billing Officer', module: 'SpecialRate', action: 'Special Rate Initiated', reference: 'LD-2026-00154 / DSA000132', remarks: 'High-value referral cluster exception' },
  { id: 'AL003', timestamp: '2026-02-23 15:10:00', user: 'Admin User', userRole: 'Super Admin', module: 'Billing', action: 'Payout Rejected', reference: 'LD-2026-00148 / DSA000118', remarks: 'CBS mismatch - amount discrepancy', previousValue: 'Eligible', newValue: 'Rejected' },
  { id: 'AL004', timestamp: '2026-02-23 11:00:00', user: 'Suresh Nair', userRole: 'Sr. Billing Officer', module: 'SpecialRate', action: 'L1 Approved', reference: 'SR001 / DSA000155', remarks: 'Valid premium DSA request' },
  { id: 'AL005', timestamp: '2026-02-22 14:30:00', user: 'Admin User', userRole: 'Super Admin', module: 'DSAProfile', action: 'Mobile Updated', reference: 'DSA000145 / Apex Finance Corp', previousValue: '9876543200', newValue: '9876543210', otpVerified: true },
  { id: 'AL006', timestamp: '2026-02-22 14:25:00', user: 'Admin User', userRole: 'Super Admin', module: 'DSAProfile', action: 'OTP Verified', reference: 'DSA000145 / Mobile Update', otpVerified: true },
  { id: 'AL007', timestamp: '2026-02-21 10:00:00', user: 'Admin User', userRole: 'Super Admin', module: 'PayoutRules', action: 'Rule Version Updated', reference: 'Gold Loan v3.2', previousValue: '0.35%', newValue: '0.40%', remarks: 'Quarterly revision' },
  { id: 'AL008', timestamp: '2026-02-20 16:00:00', user: 'Admin User', userRole: 'Super Admin', module: 'DSAProfile', action: 'Email Updated', reference: 'DSA000132 / Delhi DSA Services', previousValue: 'old@delhidsa.com', newValue: 'info@delhidsa.com', otpVerified: true },
  { id: 'AL009', timestamp: '2026-02-20 09:00:00', user: 'Meena Sharma', userRole: 'Billing Manager', module: 'SpecialRate', action: 'L2 Approved', reference: 'SR002 / DSA000145', remarks: 'Within budget' },
  { id: 'AL010', timestamp: '2026-02-19 13:00:00', user: 'Admin User', userRole: 'Super Admin', module: 'DSAProfile', action: 'Photo Updated', reference: 'DSA000118 / Rajesh Kumar', otpVerified: false, remarks: 'Photo updated with admin verification' },
];

export const mockPayoutRules: PayoutRule[] = [
  { id: 'PR001', product: 'Home Loan', payoutPercent: 0.50, maxCap: 2.00, effectiveDate: '2026-01-01', version: 3, status: 'Active', createdBy: 'Admin User', approvedBy: 'HO Approver', createdDate: '2025-12-20' },
  { id: 'PR002', product: 'Personal Loan', payoutPercent: 1.00, maxCap: 3.00, effectiveDate: '2026-01-01', version: 3, status: 'Active', createdBy: 'Admin User', approvedBy: 'HO Approver', createdDate: '2025-12-20' },
  { id: 'PR003', product: 'LAP', payoutPercent: 0.75, maxCap: 2.50, effectiveDate: '2026-01-01', version: 3, status: 'Active', createdBy: 'Admin User', approvedBy: 'HO Approver', createdDate: '2025-12-20' },
  { id: 'PR004', product: 'Business Loan', payoutPercent: 0.80, maxCap: 2.50, effectiveDate: '2026-01-01', version: 3, status: 'Active', createdBy: 'Admin User', approvedBy: 'HO Approver', createdDate: '2025-12-20' },
  { id: 'PR005', product: 'Car Loan', payoutPercent: 0.60, maxCap: 2.00, effectiveDate: '2026-01-01', version: 3, status: 'Active', createdBy: 'Admin User', approvedBy: 'HO Approver', createdDate: '2025-12-20' },
  { id: 'PR006', product: 'Education Loan', payoutPercent: 0.50, maxCap: 1.50, effectiveDate: '2026-01-01', version: 3, status: 'Active', createdBy: 'Admin User', approvedBy: 'HO Approver', createdDate: '2025-12-20' },
  { id: 'PR007', product: 'Gold Loan', payoutPercent: 0.40, maxCap: 1.00, effectiveDate: '2026-01-01', version: 3, status: 'Active', createdBy: 'Admin User', approvedBy: 'HO Approver', createdDate: '2025-12-20' },
  { id: 'PR008', product: 'Home Loan', payoutPercent: 0.55, maxCap: 2.00, effectiveDate: '2026-04-01', version: 4, status: 'PendingApproval', createdBy: 'Admin User', createdDate: '2026-02-20' },
  { id: 'PR009', product: 'Home Loan', payoutPercent: 0.45, maxCap: 1.80, effectiveDate: '2025-07-01', version: 2, status: 'Archived', createdBy: 'Admin User', approvedBy: 'HO Approver', createdDate: '2025-06-15' },
];