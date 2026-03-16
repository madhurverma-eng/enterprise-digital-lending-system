import { useState } from "react";
import { useNavigate } from "react-router";
import { Bell, Search, ChevronDown, Menu, LogOut, User, Settings, RefreshCw } from "lucide-react";
import { useAuth, ALL_ROLES, UserRole } from "../../context/AuthContext";
import federalBankLogo from "figma:asset/4b468f6b73e3dddd5cd2ae1c862fa55ef503023a.png";

interface HeaderProps {
  onToggleSidebar: () => void;
}

const ROLE_COLORS: Record<UserRole, string> = {
  'Super Admin': 'bg-red-500',
  'Admin': 'bg-orange-500',
  'Branch Maker': 'bg-blue-500',
  'Tier 1 Checker': 'bg-amber-500',
  'Tier 2 Checker': 'bg-yellow-500',
  'Tier 3 Checker': 'bg-teal-500',
  'Tier 4 Checker': 'bg-indigo-500',
  'Branch Billing Officer': 'bg-emerald-500',
  'Billing Checker': 'bg-purple-500',
};

export function Header({ onToggleSidebar }: HeaderProps) {
  const { user, logout, switchRole } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);

  const handleLogout = () => { logout(); navigate("/login"); };
  const handleRoleSwitch = (role: UserRole) => { switchRole(role); setShowRoleSwitcher(false); navigate("/"); };

  const initials = user?.name ? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2) : "AD";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-primary border-b-4 border-[#F09B1A] flex items-center px-4 shadow-sm">
      <div className="flex items-center gap-4">
        <button type="button" onClick={onToggleSidebar} className="p-1.5 rounded-[4px] hover:bg-white/10 transition-colors lg:hidden">
          <Menu className="w-6 h-6 text-white" />
        </button>
        <div className="flex items-center gap-3">
          <img src={federalBankLogo} alt="Federal Bank" className="h-10 w-auto object-contain bg-white rounded-sm p-1" />
          <span className="text-lg font-medium text-white hidden sm:block">DSA On-Boarding & Management Platform</span>
        </div>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-white/10 rounded-[4px] px-3 py-1.5 gap-2 w-64 border border-white/20">
          <Search className="w-4 h-4 text-white/70" />
          <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm text-white placeholder-white/70 w-full" />
        </div>
        {/* Role Switcher */}
        <div className="relative">
          <button type="button" onClick={() => { setShowRoleSwitcher(!showRoleSwitcher); setShowUserMenu(false); }} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[4px] bg-white/10 border border-white/20 hover:bg-white/20 transition-colors" title="Switch Role (Demo)">
            <RefreshCw className="w-3.5 h-3.5 text-white/80" />
            <span className="text-[10px] text-white/80 hidden lg:inline">Switch Role</span>
          </button>
          {showRoleSwitcher && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowRoleSwitcher(false)} />
              <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-[#E0E3EA] rounded-[4px] shadow-lg z-50">
                <div className="px-3 py-2 border-b border-[#E0E3EA]"><p className="text-[10px] text-[#706E6B] uppercase tracking-wide">Switch Role (Demo)</p></div>
                <div className="py-1 max-h-80 overflow-y-auto">
                  {ALL_ROLES.map(role => (
                    <button key={role} type="button" onClick={() => handleRoleSwitch(role)} className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-[#F0F2F5] transition-colors text-left ${user?.role === role ? 'bg-[#E8EFF8] text-[#1756A0]' : 'text-[#1A1A2E]'}`}>
                      <div className={`w-2 h-2 rounded-full ${ROLE_COLORS[role]}`} />
                      <span className="flex-1">{role}</span>
                      {user?.role === role && <span className="text-[10px] text-[#1756A0]">Active</span>}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <button type="button" className="relative p-2 rounded-[4px] hover:bg-white/10 transition-colors">
          <Bell className="w-5 h-5 text-white" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F09B1A] rounded-full border border-white" />
        </button>
        <div className="relative">
          <button type="button" onClick={() => { setShowUserMenu(!showUserMenu); setShowRoleSwitcher(false); }} className="flex items-center gap-2 ml-2 pl-2 border-l border-white/20 hover:bg-white/10 rounded-[4px] px-2 py-1 transition-colors">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-sm"><span className="text-xs">{initials}</span></div>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-white leading-tight">{user?.name || "Admin User"}</p>
              <p className="text-[10px] text-white/80 leading-tight">{user?.role || "Super Admin"}</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-white/80 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
          </button>
          {showUserMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
              <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-[#E0E3EA] rounded-[4px] shadow-lg z-50">
                <div className="px-4 py-3 border-b border-[#E0E3EA]">
                  <p className="text-sm text-[#1A1A2E]">{user?.name}</p>
                  <p className="text-xs text-[#5A6072] mt-0.5">PF: {user?.pfNumber}</p>
                  <p className="text-xs text-[#5A6072]">{user?.role} &middot; {user?.branch}</p>
                </div>
                <div className="py-1">
                  <button type="button" onClick={() => setShowUserMenu(false)} className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-[#1A1A2E] hover:bg-[#F0F2F5] transition-colors"><User className="w-4 h-4 text-[#5A6072]" />My Profile</button>
                  <button type="button" onClick={() => setShowUserMenu(false)} className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-[#1A1A2E] hover:bg-[#F0F2F5] transition-colors"><Settings className="w-4 h-4 text-[#5A6072]" />Preferences</button>
                </div>
                <div className="border-t border-[#E0E3EA] py-1">
                  <button type="button" onClick={handleLogout} className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"><LogOut className="w-4 h-4" />Sign Out</button>
                </div>
                <div className="px-4 py-2 border-t border-[#E0E3EA]"><p className="text-[10px] text-[#5A6072]">Last login: {user?.lastLogin}</p></div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}