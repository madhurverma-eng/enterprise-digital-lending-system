import { Clock, User, FileText, CheckCircle, XCircle, AlertCircle, Send } from "lucide-react";
import type { AuditEntry } from "../../types/onboarding";

interface AuditTimelineProps {
  entries: AuditEntry[];
}

const actionIcons: Record<string, typeof Clock> = {
  'Created': FileText,
  'Submitted': Send,
  'Approved': CheckCircle,
  'Rejected': XCircle,
  'Clarification Requested': AlertCircle,
  'Updated': FileText,
  'Activated': CheckCircle,
};

const actionColors: Record<string, string> = {
  'Created': 'bg-[#F3F3F5] text-[#706E6B]',
  'Submitted': 'bg-[#E8EFF8] text-[#1756A0]',
  'Approved': 'bg-green-50 text-green-600',
  'Rejected': 'bg-red-50 text-[#D9001C]',
  'Clarification Requested': 'bg-amber-50 text-amber-600',
  'Updated': 'bg-[#F3F3F5] text-[#706E6B]',
  'Activated': 'bg-green-50 text-green-600',
};

export function AuditTimeline({ entries }: AuditTimelineProps) {
  return (
    <div className="relative">
      {entries.map((entry, index) => {
        const Icon = actionIcons[entry.action] || Clock;
        const color = actionColors[entry.action] || 'bg-[#F3F3F5] text-[#706E6B]';

        return (
          <div key={entry.id} className="relative flex gap-4 pb-6 last:pb-0">
            {index < entries.length - 1 && (
              <div className="absolute left-[17px] top-10 w-[2px] h-[calc(100%-28px)] bg-[#D8D8D8]" />
            )}
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${color}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-[#2B2826]">{entry.action}</span>
                <span className="text-xs text-[#706E6B]">{entry.timestamp}</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <User className="w-3 h-3 text-[#706E6B]" />
                <span className="text-xs text-[#706E6B]">{entry.performedBy}</span>
              </div>
              {entry.details && (
                <p className="text-xs text-[#706E6B] mt-1">{entry.details}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}