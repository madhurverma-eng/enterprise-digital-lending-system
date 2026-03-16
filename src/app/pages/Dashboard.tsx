import { useNavigate } from "react-router";
import { Users, ClipboardList, CheckSquare, Clock, ArrowRight, TrendingUp, AlertCircle, Upload, BarChart3, IndianRupee, Scale, FileText, Shield } from "lucide-react";
import { allMockDSAs } from "../data/dsaMockData";
import { useAuth } from "../context/AuthContext";

export function Dashboard() {
  const navigate = useNavigate();
  const { user, permissions } = useAuth();

  const stats = [
    { label: 'Total DSAs', value: '147', change: '+5 this month', icon: Users, color: 'bg-[#E8EFF8] text-[#1756A0]' },
    { label: 'Pending Tier 1', value: String(allMockDSAs.filter(d => d.currentTier === 'Tier1').length), change: 'Initial Scrutiny', icon: Clock, color: 'bg-amber-50 text-amber-600' },
    { label: 'Pending Tier 2-4', value: String(allMockDSAs.filter(d => d.currentTier && ['Tier2','Tier3','Tier4'].includes(d.currentTier)).length), change: 'Advanced Review', icon: Clock, color: 'bg-orange-50 text-orange-600' },
    { label: 'Active This Month', value: String(allMockDSAs.filter(d => d.status === 'Active').length), change: 'Fully Approved', icon: CheckSquare, color: 'bg-green-50 text-green-600' },
  ];

  const recentActivity = [
    { name: 'Rajesh Mohan Sharma', action: 'Submitted for Tier 1 Review', time: '4 days ago', status: 'Tier1Review', type: 'Individual', appNo: 'DSA/2026/00042' },
    { name: 'Pradeep Kumar Yadav', action: 'Approved Tier 1, now at Tier 2', time: '9 days ago', status: 'Tier2Review', type: 'Individual', appNo: 'DSA/2026/00039' },
    { name: 'Pinnacle Financial Services LLP', action: 'Cleared Tier 2, under Credit Committee', time: '8 days ago', status: 'Tier3Review', type: 'Entity', appNo: 'DSA/2026/00038' },
    { name: 'Mumbai Finance Solutions Pvt Ltd', action: 'Cleared Tier 3, awaiting Final HO Approval', time: '13 days ago', status: 'Tier4Review', type: 'Entity', appNo: 'DSA/2026/00031' },
    { name: 'Apex Finance Corp', action: 'All 4 Tiers Approved - Now Active', time: '17 days ago', status: 'Active', type: 'Entity', appNo: 'DSA/2026/00015' },
  ];

  const quickActions: { label: string; desc: string; path: string; icon: React.ElementType; color: string }[] = [];
  if (permissions.canSeeDSAManagement) {
    quickActions.push(
      { label: 'Onboard New DSA', desc: 'Individual or Entity', path: '/admin/dsa/onboard', icon: Users, color: 'bg-[#E8EFF8] text-[#1756A0]' },
      { label: 'Bulk Upload DSAs', desc: 'Upload via Excel', path: '/admin/dsa/bulk-upload', icon: Upload, color: 'bg-green-50 text-green-600' },
      { label: 'Empanelment Letters', desc: 'Sign & manage agreements', path: '/admin/dsa/empanelment', icon: FileText, color: 'bg-purple-50 text-purple-600' },
    );
  }
  if (permissions.canSeeApprovalWorkflow) {
    if (permissions.approvalTier) {
      const tierNum = permissions.approvalTier.replace('Tier', '');
      const tierLabels: Record<string, string> = { '1': 'Initial Scrutiny', '2': 'Risk & Compliance', '3': 'Credit Committee', '4': 'Final HO Approval' };
      quickActions.push({ label: `Tier ${tierNum} Queue`, desc: tierLabels[tierNum] || 'Review applications', path: `/admin/dsa/tier${tierNum}/queue`, icon: ClipboardList, color: 'bg-amber-50 text-amber-600' });
    } else {
      quickActions.push({ label: 'Tier 1 Queue', desc: 'Initial Scrutiny', path: '/admin/dsa/tier1/queue', icon: CheckSquare, color: 'bg-amber-50 text-amber-600' });
    }
  }
  if (permissions.canSeeBillingModule) {
    quickActions.push(permissions.billingCheckerOnly
      ? { label: 'Payout Queue', desc: 'Approve/Reject payouts', path: '/billing/payout-queue', icon: IndianRupee, color: 'bg-emerald-50 text-emerald-600' }
      : { label: 'Billing & Payout', desc: 'Manage payouts', path: '/billing/dashboard', icon: IndianRupee, color: 'bg-emerald-50 text-emerald-600' }
    );
  }
  if (permissions.canSeeDSADashboard) quickActions.push({ label: 'My DSA Dashboard', desc: 'View performance', path: '/dsa/dashboard', icon: BarChart3, color: 'bg-indigo-50 text-indigo-600' });
  if (permissions.canSeeDelegationOfPower) quickActions.push({ label: 'Delegation of Power', desc: 'Manage approval slabs', path: '/admin/delegation-of-power', icon: Scale, color: 'bg-rose-50 text-rose-600' });

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div className="mb-6">
        <h1 className="text-[#1A1A2E]">DSA Onboarding Dashboard</h1>
        <p className="text-sm text-[#5A6072] mt-1">Welcome, {user?.name || 'User'} — <span className="text-[#1756A0]">{user?.role}</span> at {user?.branch}</p>
      </div>
      <div className="mb-6 bg-[#E8EFF8] border border-[#1756A0]/20 rounded-[4px] p-3 flex items-center gap-3">
        <Shield className="w-5 h-5 text-[#1756A0] shrink-0" />
        <div className="text-xs text-[#1A1A2E]">
          <span className="text-[#1756A0]">{user?.role}</span> —{permissions.canSeeDSAManagement && ' DSA Management ·'}{permissions.canSeeApprovalWorkflow && ` Approval${permissions.approvalTier ? ` (${permissions.approvalTier} only)` : ' (All Tiers)'} ·`}{permissions.canSeeBillingModule && ` Billing${permissions.billingCheckerOnly ? ' (Checker)' : ''} ·`}{permissions.canSeePayoutSettings && ' Payout Settings ·'}{permissions.canSeeDelegationOfPower && ' DoP ·'} Access Granted
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(stat => { const Icon = stat.icon; return (
          <div key={stat.label} className="bg-white border border-[#E0E3EA] rounded-[4px] p-4">
            <div className="flex items-start justify-between mb-3"><div className={`w-9 h-9 rounded-[4px] flex items-center justify-center ${stat.color}`}><Icon className="w-4 h-4" /></div><TrendingUp className="w-4 h-4 text-[#5A6072]" /></div>
            <p className="text-2xl text-[#1A1A2E]">{stat.value}</p>
            <p className="text-xs text-[#5A6072] mt-1">{stat.label}</p>
            <p className="text-[10px] text-[#1756A0] mt-1">{stat.change}</p>
          </div>
        ); })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#E0E3EA] rounded-[4px]">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E0E3EA]">
            <h3 className="text-[#1A1A2E]">Recent Activity</h3>
            {permissions.canSeeApprovalWorkflow && (<button type="button" onClick={() => navigate(permissions.approvalTier ? `/admin/dsa/${permissions.approvalTier.toLowerCase()}/queue` : '/admin/dsa/tier1/queue')} className="text-xs text-[#1756A0] hover:underline flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></button>)}
          </div>
          <div className="divide-y divide-[#E0E3EA]">
            {recentActivity.map((item, i) => (
              <div key={i} className="px-5 py-3 flex items-center justify-between">
                <div><div className="flex items-center gap-2"><p className="text-sm text-[#1A1A2E]">{item.name}</p><span className="text-xs px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded-[4px]">{item.type}</span></div><p className="text-xs text-[#5A6072] mt-0.5">{item.action}</p></div>
                <div className="text-right"><span className={`text-xs px-2 py-0.5 rounded-[4px] ${item.status === 'Active' ? 'bg-green-50 text-green-600' : item.status === 'Tier1Review' ? 'bg-amber-50 text-amber-600' : item.status === 'Tier2Review' || item.status === 'Tier3Review' ? 'bg-blue-50 text-blue-600' : item.status === 'Tier4Review' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}>{item.status === 'Active' ? 'Active' : item.status === 'Tier1Review' ? 'Tier 1' : item.status === 'Tier2Review' ? 'Tier 2' : item.status === 'Tier3Review' ? 'Tier 3' : item.status === 'Tier4Review' ? 'Tier 4' : item.status}</span><p className="text-[10px] text-[#5A6072] mt-1">{item.time}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-[#E0E3EA] rounded-[4px]">
          <div className="px-5 py-4 border-b border-[#E0E3EA]"><h3 className="text-[#1A1A2E]">Quick Actions</h3></div>
          <div className="p-4 space-y-3">
            {quickActions.map(action => { const Icon = action.icon; return (
              <button key={action.path} type="button" onClick={() => navigate(action.path)} className="w-full flex items-center gap-3 p-3 rounded-[4px] border border-[#E0E3EA] hover:border-[#1756A0] hover:bg-[#E8EFF8] transition-colors text-left">
                <div className={`w-9 h-9 rounded-[4px] flex items-center justify-center ${action.color}`}><Icon className="w-4 h-4" /></div>
                <div><p className="text-sm text-[#1A1A2E]">{action.label}</p><p className="text-[10px] text-[#5A6072]">{action.desc}</p></div>
                <ArrowRight className="w-4 h-4 text-[#5A6072] ml-auto" />
              </button>
            ); })}
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-[4px] p-4"><div className="flex gap-2"><AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /><div className="text-xs text-blue-900"><p className="font-medium mb-1">4-Tier Approval Process</p><p>All DSA onboardings undergo a structured 4-tier approval workflow: Initial Scrutiny → Risk & Compliance → Credit Committee → Final HO Approval</p></div></div></div>
        <div className="bg-green-50 border border-green-200 rounded-[4px] p-4"><div className="flex gap-2"><CheckSquare className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /><div className="text-xs text-green-900"><p className="font-medium mb-1">Role-Based Access Control</p><p>Each user sees only the modules relevant to their role. Use the role switcher in the header to demo different views.</p></div></div></div>
      </div>
    </div>
  );
}