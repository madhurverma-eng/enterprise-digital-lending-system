import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layout/RootLayout";
import { AppShell } from "./components/layout/AppShell";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";

// DSA Pages
import { DSAOnboardingForm } from "./pages/dsa/DSAOnboardingForm";
import { DSAApprovalQueue } from "./pages/dsa/DSAApprovalQueue";
import { DSATierReview } from "./pages/dsa/DSATierReview";
import { DSABulkUpload } from "./pages/dsa/DSABulkUpload";
import { DSADashboard } from "./pages/dsa/DSADashboard";
import { DSASubmissionConfirmation } from "./pages/dsa/DSASubmissionConfirmation";
import { PayoutConfiguration } from "./pages/dsa/PayoutConfiguration";
import { EmpanelmentManagement } from "./pages/dsa/EmpanelmentManagement";
import { DelegationOfPower } from "./pages/admin/DelegationOfPower";

// Billing & Payout Pages
import { BillingDashboard } from "./pages/billing/BillingDashboard";
import { PayoutQueue } from "./pages/billing/PayoutQueue";
import { LeadPayoutDetails } from "./pages/billing/LeadPayoutDetails";
import { SpecialRateApprovals } from "./pages/billing/SpecialRateApprovals";
import { Reconciliation } from "./pages/billing/Reconciliation";
import { DSAManagement } from "./pages/billing/DSAManagement";
import { Notifications } from "./pages/billing/Notifications";
import { ReportsExports } from "./pages/billing/ReportsExports";
import { AuditLogs } from "./pages/billing/AuditLogs";
import { PayoutSettings } from "./pages/billing/PayoutSettings";

// Wrapper components for parameterized tier routes
const Tier1Queue = () => DSAApprovalQueue({ tier: "Tier1" });
const Tier2Queue = () => DSAApprovalQueue({ tier: "Tier2" });
const Tier3Queue = () => DSAApprovalQueue({ tier: "Tier3" });
const Tier4Queue = () => DSAApprovalQueue({ tier: "Tier4" });

const Tier1Review = () => DSATierReview({ tier: "Tier1" });
const Tier2Review = () => DSATierReview({ tier: "Tier2" });
const Tier3Review = () => DSATierReview({ tier: "Tier3" });
const Tier4Review = () => DSATierReview({ tier: "Tier4" });

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "",
        Component: AppShell,
        children: [
          { index: true, Component: Dashboard },
          
          // DSA Onboarding - Bank Maker
          { path: "admin/dsa/onboard", Component: DSAOnboardingForm },
          
          // DSA Submission Confirmation
          { path: "admin/dsa/confirmation", Component: DSASubmissionConfirmation },
          
          // DSA Bulk Upload
          { path: "admin/dsa/bulk-upload", Component: DSABulkUpload },

          // DSA Payout Configuration
          { path: "admin/dsa/payout-config", Component: PayoutConfiguration },

          // DSA Empanelment Letter & Agreement
          { path: "admin/dsa/empanelment", Component: EmpanelmentManagement },

          // Delegation of Power
          { path: "admin/delegation-of-power", Component: DelegationOfPower },
          
          // DSA Approval Queues - 4 Tiers
          { path: "admin/dsa/tier1/queue", Component: Tier1Queue },
          { path: "admin/dsa/tier2/queue", Component: Tier2Queue },
          { path: "admin/dsa/tier3/queue", Component: Tier3Queue },
          { path: "admin/dsa/tier4/queue", Component: Tier4Queue },
          
          // DSA Tier Reviews
          { path: "admin/dsa/tier1/review/:id", Component: Tier1Review },
          { path: "admin/dsa/tier2/review/:id", Component: Tier2Review },
          { path: "admin/dsa/tier3/review/:id", Component: Tier3Review },
          { path: "admin/dsa/tier4/review/:id", Component: Tier4Review },
          
          // DSA Dashboard (Post Approval)
          { path: "dsa/dashboard", Component: DSADashboard },

          // Billing & Payout Module
          { path: "billing/dashboard", Component: BillingDashboard },
          { path: "billing/payout-queue", Component: PayoutQueue },
          { path: "billing/payout-queue/:id", Component: LeadPayoutDetails },
          { path: "billing/special-rates", Component: SpecialRateApprovals },
          { path: "billing/reconciliation", Component: Reconciliation },
          { path: "billing/dsa-management", Component: DSAManagement },
          { path: "billing/notifications", Component: Notifications },
          { path: "billing/reports", Component: ReportsExports },
          { path: "billing/audit-logs", Component: AuditLogs },
          { path: "billing/settings", Component: PayoutSettings },

          { path: "*", Component: NotFound },
        ],
      },
    ],
  },
]);