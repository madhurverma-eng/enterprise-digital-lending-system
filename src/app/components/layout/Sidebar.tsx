import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router";
import { LayoutDashboard, Users, UserPlus, ClipboardList, CheckSquare, Shield, ChevronDown, ChevronRight, X, Upload, BarChart3, IndianRupee, Layers, Star, RefreshCw, UserCog, Bell, FileBarChart, ScrollText, Sliders, Settings2, FileText, Scale } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import type { RolePermissions } from "../../context/AuthContext";

interface SidebarProps { isOpen: boolean; onClose: () => void; }

interface MenuItem { id: string; label: string; icon: React.ElementType; path?: string; children?: MenuItem[]; }

function buildMenuItems(permissions: RolePermissions): MenuItem[] {
  const items: MenuItem[] = [];
  if (permissions.canSeeDashboard) items.push({ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' });

  const adminChildren: MenuItem[] = [];
  if (permissions.canSeeDSAManagement) {
    adminChildren.push({ id: 'dsa-management', label: 'DSA Management', icon: Users, children: [
      { id: 'dsa-onboard', label: 'Onboard DSA', icon: UserPlus, path: '/admin/dsa/onboard' },
      { id: 'dsa-bulk-upload', label: 'Bulk Upload', icon: Upload, path: '/admin/dsa/bulk-upload' },
      { id: 'dsa-payout-config', label: 'Payout Configuration', icon: Settings2, path: '/admin/dsa/payout-config' },
      { id: 'dsa-empanelment', label: 'Empanelment Letter', icon: FileText, path: '/admin/dsa/empanelment' },
    ]});
  }
  if (permissions.canSeeApprovalWorkflow) {
    const approvalChildren: MenuItem[] = [];
    if (!permissions.approvalTier || permissions.approvalTier === 'Tier1') approvalChildren.push({ id: 'tier1-queue', label: 'Tier 1 - Initial Scrutiny', icon: ClipboardList, path: '/admin/dsa/tier1/queue' });
    if (!permissions.approvalTier || permissions.approvalTier === 'Tier2') approvalChildren.push({ id: 'tier2-queue', label: 'Tier 2 - Risk & Compliance', icon: ClipboardList, path: '/admin/dsa/tier2/queue' });
    if (!permissions.approvalTier || permissions.approvalTier === 'Tier3') approvalChildren.push({ id: 'tier3-queue', label: 'Tier 3 - Credit Committee', icon: ClipboardList, path: '/admin/dsa/tier3/queue' });
    if (!permissions.approvalTier || permissions.approvalTier === 'Tier4') approvalChildren.push({ id: 'tier4-queue', label: 'Tier 4 - Final HO Approval', icon: ClipboardList, path: '/admin/dsa/tier4/queue' });
    adminChildren.push({ id: 'approval-workflow', label: 'Approval Workflow', icon: CheckSquare, children: approvalChildren });
  }
  if (adminChildren.length > 0) items.push({ id: 'admin', label: 'Admin', icon: Shield, children: adminChildren });

  if (permissions.canSeeBillingModule) {
    const billingChildren: MenuItem[] = [];
    if (permissions.billingCheckerOnly) {
      billingChildren.push({ id: 'payout-queue', label: 'Payout Queue', icon: Layers, path: '/billing/payout-queue' });
    } else {
      billingChildren.push({ id: 'billing-dashboard', label: 'Billing Dashboard', icon: LayoutDashboard, path: '/billing/dashboard' });
      billingChildren.push({ id: 'payout-queue', label: 'Payout Queue', icon: Layers, path: '/billing/payout-queue' });
      billingChildren.push({ id: 'special-rates', label: 'Special Rate Approvals', icon: Star, path: '/billing/special-rates' });
      billingChildren.push({ id: 'reconciliation', label: 'Reconciliation', icon: RefreshCw, path: '/billing/reconciliation' });
      billingChildren.push({ id: 'billing-dsa-mgmt', label: 'DSA Management', icon: UserCog, path: '/billing/dsa-management' });
      billingChildren.push({ id: 'notifications', label: 'Notifications', icon: Bell, path: '/billing/notifications' });
      billingChildren.push({ id: 'billing-reports', label: 'Reports & Exports', icon: FileBarChart, path: '/billing/reports' });
      billingChildren.push({ id: 'audit-logs', label: 'Audit Logs', icon: ScrollText, path: '/billing/audit-logs' });
      if (permissions.canSeePayoutSettings) billingChildren.push({ id: 'payout-settings', label: 'Settings (Payout Rules)', icon: Sliders, path: '/billing/settings' });
    }
    items.push({ id: 'billing', label: 'Billing & Payout', icon: IndianRupee, children: billingChildren });
  }
  if (permissions.canSeeDSADashboard) items.push({ id: 'dsa-dashboard', label: 'My DSA Dashboard', icon: BarChart3, path: '/dsa/dashboard' });
  if (permissions.canSeeDelegationOfPower) items.push({ id: 'delegation-of-power', label: 'Delegation of Power', icon: Scale, path: '/admin/delegation-of-power' });
  return items;
}

function MenuItemComponent({ item, depth = 0 }: { item: MenuItem; depth?: number }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isPathMatch = (path: string | undefined) => { if (!path) return false; return location.pathname === path || location.pathname.startsWith(path + '/'); };
  const hasActiveChild = (menuItem: MenuItem): boolean => { if (isPathMatch(menuItem.path)) return true; return menuItem.children?.some(c => hasActiveChild(c)) ?? false; };
  const [isExpanded, setIsExpanded] = useState(item.children ? hasActiveChild(item) : false);
  const isActive = item.path ? isPathMatch(item.path) : false;
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;
  const handleClick = () => { if (hasChildren) setIsExpanded(!isExpanded); else if (item.path) navigate(item.path); };

  return (
    <div>
      <button type="button" onClick={handleClick} disabled={!item.path && !hasChildren} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-[4px] text-sm transition-colors ${isActive ? 'bg-[#E8EFF8] text-[#1756A0]' : 'text-[#1A1A2E] hover:bg-[#F0F2F5]'} ${!item.path && !hasChildren ? 'opacity-50' : ''}`} style={{ paddingLeft: `${12 + depth * 16}px` }}>
        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#1756A0]' : 'text-[#5A6072]'}`} />
        <span className="flex-1 text-left truncate">{item.label}</span>
        {hasChildren && (isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-[#5A6072]" /> : <ChevronRight className="w-3.5 h-3.5 text-[#5A6072]" />)}
      </button>
      {hasChildren && isExpanded && (<div className="mt-0.5">{item.children!.map(child => (<MenuItemComponent key={child.id} item={child} depth={depth + 1} />))}</div>)}
    </div>
  );
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { permissions, user } = useAuth();
  const menuItems = useMemo(() => buildMenuItems(permissions), [permissions]);
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed top-16 bottom-0 left-0 z-40 w-[260px] bg-white border-r border-[#E0E3EA] flex flex-col transition-transform duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E0E3EA] lg:hidden">
          <span className="text-sm text-[#1A1A2E]">Navigation</span>
          <button type="button" onClick={onClose} className="p-1 rounded-[4px] hover:bg-[#F0F2F5]"><X className="w-4 h-4 text-[#5A6072]" /></button>
        </div>
        <div className="px-4 py-2 border-b border-[#E0E3EA]">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /><span className="text-[10px] text-[#706E6B] uppercase tracking-wide truncate">{user?.role || 'Guest'}</span></div>
        </div>
        <div className="flex-1 overflow-y-auto py-3 px-3"><div className="space-y-1">{menuItems.map(item => (<MenuItemComponent key={item.id} item={item} />))}</div></div>
        <div className="border-t border-[#E0E3EA] px-4 py-3"><p className="text-[10px] text-[#5A6072]">Federal Bank DSA Platform v3.2.0</p></div>
      </aside>
    </>
  );
}