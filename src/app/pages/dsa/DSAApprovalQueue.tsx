import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Filter, Eye, Calendar } from 'lucide-react';
import { DSARecord, ApprovalTier, DSAStatus } from '../../types/dsa';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { FourTierApprovalTracker } from '../../components/shared/FourTierApprovalTracker';
import { allMockDSAs } from '../../data/dsaMockData';

interface DSAApprovalQueueProps {
  tier: ApprovalTier;
}

export function DSAApprovalQueue({ tier }: DSAApprovalQueueProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<DSAStatus | 'all'>('all');

  const tierLabels = {
    Tier1: 'Tier 1 - Initial Scrutiny',
    Tier2: 'Tier 2 - Risk & Compliance Review',
    Tier3: 'Tier 3 - Credit Committee',
    Tier4: 'Tier 4 - Final HO Approval',
  };

  const filteredDSAs = allMockDSAs.filter(dsa => {
    if (dsa.currentTier !== tier) return false;
    if (searchTerm && !dsa.name.toLowerCase().includes(searchTerm.toLowerCase()) && !dsa.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (statusFilter !== 'all' && dsa.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div className="mb-6">
        <h1 className="text-[#2B2826]">{tierLabels[tier]}</h1>
        <p className="text-sm text-[#706E6B] mt-1">Review and approve DSA applications</p>
      </div>
      <div className="bg-white border border-[#E5E5E5] rounded-[4px] p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#706E6B]" />
            <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by name or application number..." className="pl-9" />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)} className="h-10 px-3 rounded-[4px] border border-[#E5E5E5] text-sm">
            <option value="all">All Status</option>
            <option value="Tier1Review">Tier 1 Review</option>
            <option value="Tier2Review">Tier 2 Review</option>
            <option value="Tier3Review">Tier 3 Review</option>
            <option value="Tier4Review">Tier 4 Review</option>
          </select>
          <Button variant="outline" size="sm"><Filter className="w-4 h-4 mr-2" />More Filters</Button>
        </div>
      </div>
      <div className="bg-white border border-[#E5E5E5] rounded-[4px]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F3F3F5]">
              <tr>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Application No.</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">DSA Name</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Type</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">PAN</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">State</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Submitted Date</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Approval Status</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {filteredDSAs.map(dsa => (
                <tr key={dsa.id} className="hover:bg-[#F3F3F5]">
                  <td className="px-4 py-3 text-sm text-[#1756A0] font-mono">{dsa.applicationNumber}</td>
                  <td className="px-4 py-3 text-sm text-[#2B2826]">{dsa.name}</td>
                  <td className="px-4 py-3"><span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-[4px]">{dsa.dsaType}</span></td>
                  <td className="px-4 py-3 text-sm text-[#2B2826] font-mono">{dsa.pan}</td>
                  <td className="px-4 py-3 text-sm text-[#706E6B]">{dsa.state}</td>
                  <td className="px-4 py-3 text-xs text-[#706E6B]"><div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(dsa.submittedDate).toLocaleDateString('en-IN')}</div></td>
                  <td className="px-4 py-3"><FourTierApprovalTracker currentStatus={dsa.status} currentTier={dsa.currentTier} compact /></td>
                  <td className="px-4 py-3"><Button size="sm" variant="outline" onClick={() => navigate(`/admin/dsa/${tier.toLowerCase()}/review/${dsa.id}`)}><Eye className="w-4 h-4 mr-1" />Review</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredDSAs.length === 0 && (<div className="text-center py-12 text-sm text-[#706E6B]">No applications pending for {tierLabels[tier]}</div>)}
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-[#706E6B]">
        <p>Showing {filteredDSAs.length} application(s)</p>
        <div className="flex gap-2"><Button variant="outline" size="sm" disabled>Previous</Button><Button variant="outline" size="sm" disabled>Next</Button></div>
      </div>
    </div>
  );
}