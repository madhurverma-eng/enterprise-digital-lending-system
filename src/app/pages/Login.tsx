import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Shield, Lock, User, AlertCircle, Loader2, KeyRound, ArrowRight, Info } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import federalBankLogo from "figma:asset/4b468f6b73e3dddd5cd2ae1c862fa55ef503023a.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Login() {
  const navigate = useNavigate();
  const { login, ssoLogin, isAuthenticated } = useAuth();
  const [pfNumber, setPfNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ssoLoading, setSsoLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => { if (isAuthenticated) navigate("/", { replace: true }); }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    if (!pfNumber.trim()) { setError("PF Number is required"); return; }
    if (!password.trim()) { setError("Password is required"); return; }
    setLoading(true);
    try { const success = await login(pfNumber, password); if (!success) setError("Invalid PF Number or Password. Please try again."); }
    catch { setError("Authentication service unavailable. Contact IT Helpdesk."); }
    finally { setLoading(false); }
  };

  const handleSSO = async () => {
    setError(""); setSsoLoading(true);
    try { const success = await ssoLogin(); if (!success) setError("SSO authentication failed. Please try manual login."); }
    catch { setError("SSO service unavailable. Contact IT Helpdesk."); }
    finally { setSsoLoading(false); }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1756A0]"><div className="h-full w-1/3 bg-[#F09B1A]" /></div>
        <div className="w-full max-w-[420px] mx-auto">
          <div className="mb-10">
            <img src={federalBankLogo} alt="Federal Bank" className="h-14 w-auto object-contain mb-6" />
            <h1 className="text-2xl text-[#1A1A2E] mb-1">DSA Management Platform</h1>
            <p className="text-sm text-[#5A6072]">Banker Login — Enter your PF credentials to continue</p>
          </div>
          {error && (<div className="flex items-start gap-3 p-3 mb-6 bg-red-50 border border-red-200 rounded-[4px]"><AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" /><p className="text-sm text-red-700">{error}</p></div>)}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="pfNumber" className="block text-xs text-[#5A6072] mb-1.5">PF Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><User className="w-4 h-4 text-[#5A6072]" /></div>
                <input id="pfNumber" type="text" value={pfNumber} onChange={(e) => { setPfNumber(e.target.value.toUpperCase()); setError(""); }} placeholder="e.g. PF100234" className="w-full pl-10 pr-4 py-2.5 border border-[#D0D4DC] rounded-[4px] text-sm text-[#1A1A2E] placeholder-[#A0A4B0] focus:outline-none focus:border-[#1756A0] focus:ring-1 focus:ring-[#1756A0]/20 transition-colors" autoComplete="username" disabled={loading || ssoLoading} />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-xs text-[#5A6072] mb-1.5">Password <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><Lock className="w-4 h-4 text-[#5A6072]" /></div>
                <input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => { setPassword(e.target.value); setError(""); }} placeholder="Enter your password" className="w-full pl-10 pr-11 py-2.5 border border-[#D0D4DC] rounded-[4px] text-sm text-[#1A1A2E] placeholder-[#A0A4B0] focus:outline-none focus:border-[#1756A0] focus:ring-1 focus:ring-[#1756A0]/20 transition-colors" autoComplete="current-password" disabled={loading || ssoLoading} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#5A6072] hover:text-[#1A1A2E]" tabIndex={-1}>{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-3.5 h-3.5 rounded border-[#D0D4DC] text-[#1756A0] focus:ring-[#1756A0]/20" /><span className="text-xs text-[#5A6072]">Remember PF Number</span></label>
              <button type="button" className="text-xs text-[#1756A0] hover:underline">Forgot Password?</button>
            </div>
            <button type="submit" disabled={loading || ssoLoading} className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1756A0] text-white rounded-[4px] hover:bg-[#0E3D7A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /><span className="text-sm">Authenticating...</span></>) : (<><span className="text-sm">Sign In</span><ArrowRight className="w-4 h-4" /></>)}
            </button>
          </form>
          <div className="flex items-center gap-4 my-6"><div className="flex-1 h-px bg-[#E0E3EA]" /><span className="text-xs text-[#5A6072]">OR</span><div className="flex-1 h-px bg-[#E0E3EA]" /></div>
          <button type="button" onClick={handleSSO} disabled={loading || ssoLoading} className="w-full flex items-center justify-center gap-2.5 py-2.5 border-2 border-[#1756A0] text-[#1756A0] rounded-[4px] hover:bg-[#E8EFF8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
            {ssoLoading ? (<><Loader2 className="w-4 h-4 animate-spin" /><span className="text-sm">Connecting to SSO...</span></>) : (<><KeyRound className="w-4 h-4" /><span className="text-sm">Sign In with Enterprise SSO</span></>)}
          </button>
          <div className="mt-6 p-3 bg-[#FAFBFC] border border-[#E0E3EA] rounded-[4px]">
            <div className="flex items-center gap-1.5 mb-2"><Info className="w-3.5 h-3.5 text-[#1756A0]" /><span className="text-[10px] text-[#5A6072] uppercase tracking-wide">Demo Credentials</span></div>
            <div className="space-y-1.5">
              {[{ pf: "PF100234", pwd: "Admin@123", role: "Super Admin" },{ pf: "PF100500", pwd: "Admin@123", role: "Admin" },{ pf: "PF200456", pwd: "Maker@123", role: "Branch Maker" },{ pf: "PF300789", pwd: "Checker@123", role: "Tier 1 Checker" },{ pf: "PF400100", pwd: "Billing@123", role: "Billing Officer" },{ pf: "PF400200", pwd: "Billing@123", role: "Billing Checker" }].map((c) => (
                <button key={c.pf} type="button" onClick={() => { setPfNumber(c.pf); setPassword(c.pwd); setError(""); }} className="w-full flex items-center justify-between text-left p-2 rounded-[4px] hover:bg-[#E8EFF8] transition-colors group">
                  <div><span className="text-xs font-mono text-[#1756A0]">{c.pf}</span><span className="text-[10px] text-[#5A6072] ml-2">{c.role}</span></div>
                  <ArrowRight className="w-3 h-3 text-[#5A6072] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-start gap-2"><Shield className="w-4 h-4 text-[#5A6072] mt-0.5 shrink-0" /><p className="text-[10px] text-[#5A6072] leading-relaxed">This is a secured system of Federal Bank Ltd. Unauthorized access is strictly prohibited and may be subject to legal action under the IT Act, 2000. All activities are monitored and logged.</p></div>
          <div className="mt-6 pt-4 border-t border-[#E0E3EA]"><p className="text-[10px] text-[#5A6072] text-center">\u00a9 2026 Federal Bank Ltd. All rights reserved. | v3.1.0 | <button type="button" className="text-[#1756A0] hover:underline">IT Helpdesk</button></p></div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-[55%] xl:w-[60%] relative bg-[#1756A0] overflow-hidden">
        <ImageWithFallback src="https://images.unsplash.com/photo-1689517784901-57c7f9a2d38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBiYW5raW5nJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBJbmRpYXxlbnwxfHx8fDE3NzIyNzI0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Federal Bank Corporate" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1756A0] via-[#1756A0]/90 to-[#0E3D7A]" />
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#F09B1A]" />
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="max-w-lg">
            <div className="flex gap-1.5 mb-8"><div className="w-2 h-2 rounded-full bg-[#F09B1A]" /><div className="w-2 h-2 rounded-full bg-[#F09B1A]/60" /><div className="w-2 h-2 rounded-full bg-[#F09B1A]/30" /></div>
            <h2 className="text-3xl xl:text-4xl text-white mb-4 leading-tight">Enterprise DSA<br />On-Boarding &<br />Management System</h2>
            <p className="text-base text-white/70 leading-relaxed mb-10">A unified platform for Direct Selling Agent registration, multi-tier Head Office approval workflow, commission management, and billing operations — built for PSU banking-grade governance.</p>
            <div className="space-y-3">
              {[{ icon: Shield, title: "4-Tier HO Approval", desc: "Maker-Checker governance with full audit trails" },{ icon: User, title: "Individual & Entity DSA", desc: "Multi-state GSTN & Master Code management" },{ icon: Lock, title: "Role-Based Access", desc: "Granular permissions with SSO integration" }].map((feat) => (
                <div key={feat.title} className="flex items-start gap-3 p-3 rounded-[4px] bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-[4px] bg-[#F09B1A]/20 flex items-center justify-center shrink-0"><feat.icon className="w-4 h-4 text-[#F09B1A]" /></div>
                  <div><p className="text-sm text-white">{feat.title}</p><p className="text-xs text-white/50 mt-0.5">{feat.desc}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-3"><div className="h-px flex-1 bg-white/10" /><span className="text-[10px] text-white/30 uppercase tracking-widest">Secured Banking Platform</span><div className="h-px flex-1 bg-white/10" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}