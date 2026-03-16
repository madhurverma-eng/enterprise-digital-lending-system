import { useState } from "react";
import { Outlet, Navigate } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useAuth } from "../../context/AuthContext";

export function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="lg:ml-[260px] mt-16 min-h-[calc(100vh-64px)] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
