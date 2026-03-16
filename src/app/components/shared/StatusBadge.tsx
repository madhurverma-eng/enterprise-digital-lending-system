import type { OnboardingStatus } from "../../types/onboarding";

interface StatusBadgeProps {
  status: OnboardingStatus;
}

const statusStyles: Record<OnboardingStatus, { bg: string; text: string; border: string }> = {
  Active: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  Approved: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  Pending: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  PendingEmpanelment: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  Draft: { bg: 'bg-[#F3F3F5]', text: 'text-[#706E6B]', border: 'border-[#D8D8D8]' },
  Rejected: { bg: 'bg-red-50', text: 'text-[#D9001C]', border: 'border-red-200' },
  Suspended: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  Clarification: { bg: 'bg-blue-50', text: 'text-[#1756A0]', border: 'border-blue-200' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status];
  const displayLabel = status === 'PendingEmpanelment' ? 'Pending Empanelment' : status;
  return (
    <span className={`inline-flex items-center text-xs px-2.5 py-1 rounded-[4px] border ${style.bg} ${style.text} ${style.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${status === 'Active' || status === 'Approved' ? 'bg-green-500' : status === 'Pending' || status === 'PendingEmpanelment' ? 'bg-amber-500' : status === 'Rejected' ? 'bg-red-500' : status === 'Clarification' ? 'bg-blue-500' : 'bg-gray-400'}`} />
      {displayLabel}
    </span>
  );
}