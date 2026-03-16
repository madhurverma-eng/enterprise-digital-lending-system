import { useState } from 'react';
import { Edit2, Check, X, History, AlertCircle } from 'lucide-react';
import { ProductPayout } from '../../types/dsa';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface ProductPayoutConfigProps {
  payouts: ProductPayout[];
  onChange: (payouts: ProductPayout[]) => void;
  readonly?: boolean;
  showHistory?: boolean;
}

export function ProductPayoutConfig({ payouts, onChange, readonly = false, showHistory = false }: ProductPayoutConfigProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<number>(0);
  const [error, setError] = useState('');

  const handleEdit = (payout: ProductPayout) => { setEditingId(payout.id); setEditValue(payout.payoutPercentage); setError(''); };
  const handleSave = (id: string) => {
    const payout = payouts.find(p => p.id === id);
    if (!payout) return;
    if (editValue < 0) { setError('Payout percentage cannot be negative'); return; }
    if (editValue > payout.maxCap) { setError(`Payout cannot exceed maximum cap of ${payout.maxCap}%`); return; }
    onChange(payouts.map(p => p.id === id ? { ...p, payoutPercentage: editValue, version: p.version + 1, modifiedDate: new Date().toISOString(), modifiedBy: 'Current User', requiresApproval: true } : p));
    setEditingId(null); setError('');
  };
  const handleCancel = () => { setEditingId(null); setError(''); };

  return (
    <div className="space-y-4">
      <div className="bg-amber-50 border border-amber-200 rounded-[4px] p-4">
        <div className="flex gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900">
            <p className="font-medium mb-1">Product-Wise Payout Configuration</p>
            <p>Configure commission percentages for each product. Changes require re-approval through a 2-tier payout approval workflow. All payouts are subject to maximum cap limits.</p>
          </div>
        </div>
      </div>
      <div className="border border-[#E5E5E5] rounded-[4px]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F3F3F5]">
              <tr>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Product</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Payout %</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Max Cap %</th>
                <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Effective Date</th>
                {showHistory && <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Version</th>}
                {!readonly && <th className="px-4 py-3 text-left text-xs text-[#706E6B]">Action</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {payouts.map(payout => (
                <tr key={payout.id} className={payout.requiresApproval ? 'bg-amber-50' : ''}>
                  <td className="px-4 py-3 text-sm text-[#2B2826]">{payout.productName}</td>
                  <td className="px-4 py-3">
                    {editingId === payout.id ? (
                      <div className="flex items-center gap-2">
                        <Input type="number" value={editValue} onChange={(e) => setEditValue(parseFloat(e.target.value))} step="0.01" min="0" max={payout.maxCap} className="w-20 h-8 text-sm" />
                        <span className="text-sm text-[#706E6B]">%</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#2B2826] font-medium">{payout.payoutPercentage.toFixed(2)}%</span>
                        {payout.requiresApproval && <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded-[4px]">Pending Approval</span>}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#706E6B]">{payout.maxCap.toFixed(2)}%</td>
                  <td className="px-4 py-3 text-xs text-[#706E6B]">{new Date(payout.effectiveDate).toLocaleDateString('en-IN')}</td>
                  {showHistory && (
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-[#706E6B]">v{payout.version}</span>
                        {payout.version > 1 && <button type="button" className="text-[#1756A0] hover:text-[#1756A0]/80"><History className="w-3.5 h-3.5" /></button>}
                      </div>
                    </td>
                  )}
                  {!readonly && (
                    <td className="px-4 py-3">
                      {editingId === payout.id ? (
                        <div className="flex items-center gap-1">
                          <button type="button" onClick={() => handleSave(payout.id)} className="p-1 text-green-600 hover:bg-green-50 rounded-[4px]"><Check className="w-4 h-4" /></button>
                          <button type="button" onClick={handleCancel} className="p-1 text-[#D9001C] hover:bg-red-50 rounded-[4px]"><X className="w-4 h-4" /></button>
                        </div>
                      ) : (
                        <button type="button" onClick={() => handleEdit(payout)} className="p-1 text-[#1756A0] hover:bg-blue-50 rounded-[4px]"><Edit2 className="w-4 h-4" /></button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {error && <div className="bg-red-50 border border-red-200 rounded-[4px] p-3"><p className="text-xs text-[#D9001C]">{error}</p></div>}
      {!readonly && (
        <div className="bg-blue-50 border border-blue-200 rounded-[4px] p-3">
          <p className="text-xs text-blue-900"><strong>Note:</strong> Any changes to payout percentages will require approval through the 2-tier payout workflow (Tier 1 - Verification & Scrutiny, Tier 2 - Authorization & Approval).</p>
        </div>
      )}
    </div>
  );
}