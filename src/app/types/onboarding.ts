// Onboarding shared types

export type OnboardingStatus = 'Active' | 'Approved' | 'Pending' | 'PendingEmpanelment' | 'Draft' | 'Rejected' | 'Suspended' | 'Clarification';

export interface FileUploadItem {
  id: string;
  name: string;
  label: string;
  status: 'Uploaded' | 'Pending' | 'Rejected';
  fileName?: string;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  action: string;
  performedBy: string;
  performedByRole?: string;
  details?: string;
  previousValue?: string;
  newValue?: string;
}

export interface StepConfig {
  id: string;
  label: string;
}