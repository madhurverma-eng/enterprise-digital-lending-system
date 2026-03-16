import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// ─── ROLE DEFINITIONS ───────────────────────────────

export type UserRole =
  | 'Super Admin'
  | 'Admin'
  | 'Branch Maker'
  | 'Tier 1 Checker'
  | 'Tier 2 Checker'
  | 'Tier 3 Checker'
  | 'Tier 4 Checker'
  | 'Branch Billing Officer'
  | 'Billing Checker';

export interface User {
  pfNumber: string;
  name: string;
  role: UserRole;
  branch: string;
  lastLogin: string;
}

// ─── PERMISSIONS ───────────────────────────────

export interface RolePermissions {
  // Sidebar sections
  canSeeDashboard: boolean;
  canSeeDSAManagement: boolean;       // Onboard, Bulk Upload, Payout Config, Empanelment
  canSeeApprovalWorkflow: boolean;    // Tier queues — filtered to their own tier
  canSeeBillingModule: boolean;       // Billing & Payout
  canSeePayoutSettings: boolean;     // Settings (Payout Rules) — Admin maker + Super Admin checker
  canSeeDSADashboard: boolean;        // My DSA Dashboard
  canSeeDelegationOfPower: boolean;   // DoP module — Admin + Super Admin
  // Billing specifics
  billingFullAccess: boolean;         // Full billing module access (branch officers)
  billingCheckerOnly: boolean;        // Checker can only see payout queue
  // Approval specifics
  approvalTier?: 'Tier1' | 'Tier2' | 'Tier3' | 'Tier4'; // Which tier they review
}

export function getRolePermissions(role: UserRole): RolePermissions {
  switch (role) {
    case 'Super Admin':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: true,
        canSeeApprovalWorkflow: true,
        canSeeBillingModule: true,
        canSeePayoutSettings: true,
        canSeeDSADashboard: true,
        canSeeDelegationOfPower: true,
        billingFullAccess: true,
        billingCheckerOnly: false,
      };
    case 'Admin':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: true,
        canSeeApprovalWorkflow: true,
        canSeeBillingModule: true,
        canSeePayoutSettings: true,
        canSeeDSADashboard: true,
        canSeeDelegationOfPower: true,
        billingFullAccess: true,
        billingCheckerOnly: false,
      };
    case 'Branch Maker':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: true,
        canSeeApprovalWorkflow: false,
        canSeeBillingModule: false,
        canSeePayoutSettings: false,
        canSeeDSADashboard: false,
        canSeeDelegationOfPower: false,
        billingFullAccess: false,
        billingCheckerOnly: false,
      };
    case 'Tier 1 Checker':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: false,
        canSeeApprovalWorkflow: true,
        canSeeBillingModule: false,
        canSeePayoutSettings: false,
        canSeeDSADashboard: false,
        canSeeDelegationOfPower: false,
        billingFullAccess: false,
        billingCheckerOnly: false,
        approvalTier: 'Tier1',
      };
    case 'Tier 2 Checker':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: false,
        canSeeApprovalWorkflow: true,
        canSeeBillingModule: false,
        canSeePayoutSettings: false,
        canSeeDSADashboard: false,
        canSeeDelegationOfPower: false,
        billingFullAccess: false,
        billingCheckerOnly: false,
        approvalTier: 'Tier2',
      };
    case 'Tier 3 Checker':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: false,
        canSeeApprovalWorkflow: true,
        canSeeBillingModule: false,
        canSeePayoutSettings: false,
        canSeeDSADashboard: false,
        canSeeDelegationOfPower: false,
        billingFullAccess: false,
        billingCheckerOnly: false,
        approvalTier: 'Tier3',
      };
    case 'Tier 4 Checker':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: false,
        canSeeApprovalWorkflow: true,
        canSeeBillingModule: false,
        canSeePayoutSettings: false,
        canSeeDSADashboard: false,
        canSeeDelegationOfPower: false,
        billingFullAccess: false,
        billingCheckerOnly: false,
        approvalTier: 'Tier4',
      };
    case 'Branch Billing Officer':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: false,
        canSeeApprovalWorkflow: false,
        canSeeBillingModule: true,
        canSeePayoutSettings: false,
        canSeeDSADashboard: false,
        canSeeDelegationOfPower: false,
        billingFullAccess: true,
        billingCheckerOnly: false,
      };
    case 'Billing Checker':
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: false,
        canSeeApprovalWorkflow: false,
        canSeeBillingModule: true,
        canSeePayoutSettings: false,
        canSeeDSADashboard: false,
        canSeeDelegationOfPower: false,
        billingFullAccess: false,
        billingCheckerOnly: true,
      };
    default:
      return {
        canSeeDashboard: true,
        canSeeDSAManagement: false,
        canSeeApprovalWorkflow: false,
        canSeeBillingModule: false,
        canSeePayoutSettings: false,
        canSeeDSADashboard: false,
        canSeeDelegationOfPower: false,
        billingFullAccess: false,
        billingCheckerOnly: false,
      };
  }
}

// ─── MOCK USERS ───────────────────────────────

const MOCK_USERS: Record<string, { password: string; user: User }> = {
  "PF100234": {
    password: "Admin@123",
    user: {
      pfNumber: "PF100234",
      name: "Rajesh Kumar",
      role: "Super Admin",
      branch: "Head Office, Aluva",
      lastLogin: "2026-03-12 14:32 IST",
    },
  },
  "PF100500": {
    password: "Admin@123",
    user: {
      pfNumber: "PF100500",
      name: "Sanjay Gupta",
      role: "Admin",
      branch: "Head Office, Aluva",
      lastLogin: "2026-03-12 09:00 IST",
    },
  },
  "PF200456": {
    password: "Maker@123",
    user: {
      pfNumber: "PF200456",
      name: "Priya Sharma",
      role: "Branch Maker",
      branch: "Mumbai Main Branch",
      lastLogin: "2026-03-12 09:15 IST",
    },
  },
  "PF300789": {
    password: "Checker@123",
    user: {
      pfNumber: "PF300789",
      name: "Anand Menon",
      role: "Tier 1 Checker",
      branch: "Head Office, Aluva",
      lastLogin: "2026-03-12 17:45 IST",
    },
  },
  "PF300801": {
    password: "Checker@123",
    user: {
      pfNumber: "PF300801",
      name: "Priya Menon",
      role: "Tier 2 Checker",
      branch: "Head Office, Aluva",
      lastLogin: "2026-03-12 10:15 IST",
    },
  },
  "PF300802": {
    password: "Checker@123",
    user: {
      pfNumber: "PF300802",
      name: "Manoj Tiwari",
      role: "Tier 3 Checker",
      branch: "Head Office, Aluva",
      lastLogin: "2026-03-12 11:00 IST",
    },
  },
  "PF300803": {
    password: "Checker@123",
    user: {
      pfNumber: "PF300803",
      name: "Dr. R. Venkataraman",
      role: "Tier 4 Checker",
      branch: "Head Office, Aluva",
      lastLogin: "2026-03-12 16:00 IST",
    },
  },
  "PF400100": {
    password: "Billing@123",
    user: {
      pfNumber: "PF400100",
      name: "Kavita Reddy",
      role: "Branch Billing Officer",
      branch: "Mumbai Main Branch",
      lastLogin: "2026-03-12 08:30 IST",
    },
  },
  "PF400200": {
    password: "Billing@123",
    user: {
      pfNumber: "PF400200",
      name: "Ramesh Nair",
      role: "Billing Checker",
      branch: "Head Office, Aluva",
      lastLogin: "2026-03-12 09:45 IST",
    },
  },
};

// ─── CONTEXT ───────────────────────────────

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  permissions: RolePermissions;
  login: (pfNumber: string, password: string) => Promise<boolean>;
  ssoLogin: () => Promise<boolean>;
  logout: () => void;
  switchRole: (role: UserRole) => void; // Demo role switcher
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = sessionStorage.getItem("fb_dsa_user");
    return stored ? JSON.parse(stored) : null;
  });

  const permissions = user ? getRolePermissions(user.role) : getRolePermissions('Branch Maker');

  const login = useCallback(async (pfNumber: string, password: string): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 1200));
    const entry = MOCK_USERS[pfNumber.toUpperCase()];
    if (entry && entry.password === password) {
      const updatedUser = { ...entry.user, lastLogin: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) };
      setUser(updatedUser);
      sessionStorage.setItem("fb_dsa_user", JSON.stringify(updatedUser));
      return true;
    }
    return false;
  }, []);

  const ssoLogin = useCallback(async (): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 2000));
    const ssoUser: User = {
      pfNumber: "PF100234",
      name: "Rajesh Kumar",
      role: "Super Admin",
      branch: "Head Office, Aluva",
      lastLogin: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };
    setUser(ssoUser);
    sessionStorage.setItem("fb_dsa_user", JSON.stringify(ssoUser));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    sessionStorage.removeItem("fb_dsa_user");
  }, []);

  const switchRole = useCallback((role: UserRole) => {
    if (!user) return;
    const updatedUser: User = {
      ...user,
      role,
      lastLogin: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };
    setUser(updatedUser);
    sessionStorage.setItem("fb_dsa_user", JSON.stringify(updatedUser));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, permissions, login, ssoLogin, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

// All available roles for the role switcher
export const ALL_ROLES: UserRole[] = [
  'Super Admin',
  'Admin',
  'Branch Maker',
  'Tier 1 Checker',
  'Tier 2 Checker',
  'Tier 3 Checker',
  'Tier 4 Checker',
  'Branch Billing Officer',
  'Billing Checker',
];
