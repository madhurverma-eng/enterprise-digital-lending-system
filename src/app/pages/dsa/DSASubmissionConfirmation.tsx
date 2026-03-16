import { useNavigate, useLocation } from 'react-router';
import { CheckCircle2, ArrowRight, Eye, FileText, Globe, MapPin } from 'lucide-react';
import { DSAFormData } from '../../types/dsa';
import { Button } from '../../components/ui/button';
import { FourTierApprovalTracker } from '../../components/shared/FourTierApprovalTracker';

export function DSASubmissionConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData as DSAFormData | undefined;
  const applicationNumber = `DSA/${new Date().getFullYear()}/${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;

  return (
    <div className="p-6 max-w-[900px] mx-auto">
      <div className="text-center py-8">
        <div className="flex justify-center mb-4"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"><CheckCircle2 className="w-8 h-8 text-green-600" /></div></div>
        <h1 className="text-2xl text-[#2B2826] mb-2">DSA Application Submitted Successfully</h1>
        <p className="text-sm text-[#706E6B] mb-1">Your DSA onboarding application has been submitted for the 4-tier approval process</p>
        <p className="text-lg text-[#1756A0] font-mono mt-3">Application No: {applicationNumber}</p>
      </div>
      <div className="bg-white border border-[#E5E5E5] rounded-[4px] p-6 mb-6">
        <h3 className="text-[#2B2826] mb-4">Application Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><p className="text-xs text-[#706E6B]">DSA Type</p><p className="text-sm text-[#2B2826] mt-1">{formData?.dsaType || 'N/A'}</p></div>
          <div><p className="text-xs text-[#706E6B]">Name</p><p className="text-sm text-[#2B2826] mt-1">{formData?.dsaType === 'Individual' ? formData?.individualDetails?.fullName : formData?.entityDetails?.entityName || 'N/A'}</p></div>
          <div><p className="text-xs text-[#706E6B]">PAN</p><p className="text-sm text-[#2B2826] font-mono mt-1">{formData?.dsaType === 'Individual' ? formData?.individualDetails?.pan : formData?.entityDetails?.pan || 'N/A'}</p></div>
          <div><p className="text-xs text-[#706E6B]">Products Configured</p><p className="text-sm text-[#2B2826] mt-1">{formData?.productPayouts.length || 0} products</p></div>
          <div><p className="text-xs text-[#706E6B]">Selected Products</p><div className="flex flex-wrap gap-1 mt-1">{formData?.selectedProducts && formData.selectedProducts.length > 0 ? formData.selectedProducts.map(p => (<span key={p} className="text-[10px] px-1.5 py-0.5 bg-[#E8EFF8] text-[#1756A0] rounded-[4px]">{p}</span>)) : <span className="text-sm text-[#706E6B]">All products</span>}</div></div>
          <div><p className="text-xs text-[#706E6B]">Area of Operations</p>{formData?.areaOfOperations?.isPanIndia ? (<p className="text-sm text-[#2B2826] mt-1 flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-green-600" /> Pan India</p>) : formData?.areaOfOperations?.areas && formData.areaOfOperations.areas.length > 0 ? (<p className="text-sm text-[#2B2826] mt-1 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#1756A0]" /> {formData.areaOfOperations.areas.length} location(s)</p>) : (<p className="text-sm text-[#706E6B] mt-1">Not specified</p>)}</div>
          {formData?.dsaType === 'Entity' && formData?.entityDetails?.gstns && (<div><p className="text-xs text-[#706E6B]">Active GSTNs</p><p className="text-sm text-[#2B2826] mt-1">{formData.entityDetails.gstns.filter(g => g.isActive).length} state(s)</p></div>)}
        </div>
      </div>
      <div className="bg-white border border-[#E5E5E5] rounded-[4px] p-6 mb-6">
        <h3 className="text-[#2B2826] mb-4">Next Steps - 4-Tier Approval Workflow</h3>
        <FourTierApprovalTracker currentStatus="Submitted" currentTier="Tier1" />
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-[4px] p-4">
          <div className="text-xs text-blue-900">
            <p className="font-medium mb-2">What Happens Next?</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Tier 1 - Initial Scrutiny: Document verification and basic compliance checks</li>
              <li>Tier 2 - Risk & Compliance Review: Detailed risk assessment and compliance verification</li>
              <li>Tier 3 - Credit Committee: Credit policy alignment and business viability review</li>
              <li>Tier 4 - Final HO Approval: Final approval by Head Office authority</li>
            </ol>
            <p className="mt-3 font-medium">Upon successful completion of all tiers, a Master DSA Code and state-wise sub-codes will be generated.</p>
          </div>
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-[4px] p-4 mb-6">
        <div className="text-xs text-amber-900">
          <p className="font-medium mb-1">Important Information</p>
          <ul className="list-disc list-inside space-y-1">
            <li>You will receive email notifications at each approval stage</li>
            <li>Estimated time for complete approval: 5-7 business days</li>
            <li>You can track application status using the application number</li>
            <li>Master Code and Sub Codes are generated ONLY after Tier 4 approval</li>
            <li>Payouts will be credited to the bank account linked to Master Code</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <Button variant="outline" onClick={() => navigate('/admin/dsa/onboard')}><FileText className="w-4 h-4 mr-2" />Submit Another DSA</Button>
        <Button onClick={() => navigate('/admin/dsa/tier1/queue')} className="bg-[#1756A0] hover:bg-[#1756A0]/90"><Eye className="w-4 h-4 mr-2" />View Approval Queue</Button>
        <Button variant="outline" onClick={() => navigate('/')}>Go to Dashboard<ArrowRight className="w-4 h-4 ml-2" /></Button>
      </div>
    </div>
  );
}