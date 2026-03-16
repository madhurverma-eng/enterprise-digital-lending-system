import { CheckCircle2, Circle, Clock, XCircle, ArrowRight } from 'lucide-react';
import { DSAStatus, ApprovalTier } from '../../types/dsa';

interface FourTierApprovalTrackerProps {
  currentStatus: DSAStatus;
  currentTier?: ApprovalTier;
  compact?: boolean;
}

const TIER_INFO = [
  { tier: 'Tier1', label: 'Tier 1', description: 'Initial Scrutiny' },
  { tier: 'Tier2', label: 'Tier 2', description: 'Risk & Compliance Review' },
  { tier: 'Tier3', label: 'Tier 3', description: 'Credit Committee' },
  { tier: 'Tier4', label: 'Tier 4', description: 'Final HO Approval' },
];

function getTierStatus(status: DSAStatus, currentTier: ApprovalTier | undefined, tierName: string): 'completed' | 'active' | 'pending' | 'rejected' {
  if (status === 'Rejected') return 'rejected';
  if (status === 'Approved' || status === 'Active') return 'completed';
  const tierIndex = TIER_INFO.findIndex(t => t.tier === tierName);
  const currentTierIndex = currentTier ? TIER_INFO.findIndex(t => t.tier === currentTier) : -1;
  if (currentTierIndex === -1) return 'pending';
  if (tierIndex < currentTierIndex) return 'completed';
  if (tierIndex === currentTierIndex) return 'active';
  return 'pending';
}

export function FourTierApprovalTracker({ currentStatus, currentTier, compact = false }: FourTierApprovalTrackerProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {TIER_INFO.map((tier, index) => {
          const tierStatus = getTierStatus(currentStatus, currentTier, tier.tier);
          return (
            <div key={tier.tier} className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                {tierStatus === 'completed' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                {tierStatus === 'active' && <Clock className="w-4 h-4 text-amber-600" />}
                {tierStatus === 'pending' && <Circle className="w-4 h-4 text-[#E5E5E5]" />}
                {tierStatus === 'rejected' && <XCircle className="w-4 h-4 text-[#D9001C]" />}
                <span className={`text-xs ${tierStatus === 'completed' ? 'text-green-600' : tierStatus === 'active' ? 'text-amber-600' : tierStatus === 'rejected' ? 'text-[#D9001C]' : 'text-[#706E6B]'}`}>{tier.label}</span>
              </div>
              {index < TIER_INFO.length - 1 && <ArrowRight className="w-3 h-3 text-[#E5E5E5]" />}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-[#F3F3F5] rounded-[4px] p-4">
        <h4 className="text-sm text-[#2B2826] mb-3">4-Tier Approval Workflow</h4>
        <div className="space-y-3">
          {TIER_INFO.map((tier, index) => {
            const tierStatus = getTierStatus(currentStatus, currentTier, tier.tier);
            return (
              <div key={tier.tier}>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {tierStatus === 'completed' && <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>}
                    {tierStatus === 'active' && <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center"><Clock className="w-4 h-4 text-amber-600" /></div>}
                    {tierStatus === 'pending' && <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"><Circle className="w-4 h-4 text-gray-400" /></div>}
                    {tierStatus === 'rejected' && <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center"><XCircle className="w-4 h-4 text-[#D9001C]" /></div>}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className={`text-sm font-medium ${tierStatus === 'completed' ? 'text-green-600' : tierStatus === 'active' ? 'text-amber-600' : tierStatus === 'rejected' ? 'text-[#D9001C]' : 'text-[#706E6B]'}`}>{tier.label}</h5>
                        <p className="text-xs text-[#706E6B] mt-0.5">{tier.description}</p>
                      </div>
                      <div>
                        {tierStatus === 'completed' && <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-[4px]">Approved</span>}
                        {tierStatus === 'active' && <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-[4px]">In Review</span>}
                        {tierStatus === 'rejected' && <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-[4px]">Rejected</span>}
                      </div>
                    </div>
                  </div>
                </div>
                {index < TIER_INFO.length - 1 && <div className={`ml-3 w-0.5 h-6 ${tierStatus === 'completed' ? 'bg-green-200' : 'bg-gray-200'}`} />}
              </div>
            );
          })}
        </div>
      </div>
      {currentStatus === 'Approved' && (
        <div className="bg-green-50 border border-green-200 rounded-[4px] p-4"><div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-600" /><div><p className="text-sm text-green-900 font-medium">All Tiers Approved</p><p className="text-xs text-green-700 mt-0.5">Master DSA Code and Sub Codes have been generated. DSA is now active.</p></div></div></div>
      )}
      {currentStatus === 'Rejected' && (
        <div className="bg-red-50 border border-red-200 rounded-[4px] p-4"><div className="flex items-center gap-2"><XCircle className="w-5 h-5 text-[#D9001C]" /><div><p className="text-sm text-red-900 font-medium">Application Rejected</p><p className="text-xs text-red-700 mt-0.5">This application was rejected during the approval process.</p></div></div></div>
      )}
    </div>
  );
}