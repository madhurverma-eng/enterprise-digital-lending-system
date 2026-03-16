import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh] p-6">
      <div className="text-center">
        <p className="text-6xl text-[#D8D8D8] mb-4">404</p>
        <h2 className="text-[#2B2826] mb-2">Page Not Found</h2>
        <p className="text-sm text-[#706E6B] mb-6">The page you are looking for does not exist.</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#1756A0] text-white text-sm hover:bg-[#0E3D7A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
      </div>
    </div>
  );
}