import { useState } from 'react';
import { Plus, Trash2, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { GSTN } from '../../types/dsa';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface GSTNManagementProps {
  pan: string;
  gstns: GSTN[];
  onChange: (gstns: GSTN[]) => void;
  readonly?: boolean;
}

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

export function GSTNManagement({ pan, gstns, onChange, readonly = false }: GSTNManagementProps) {
  const [newGSTN, setNewGSTN] = useState('');
  const [newState, setNewState] = useState('');
  const [error, setError] = useState('');

  const validateGSTN = (gstn: string): boolean => {
    const gstnRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!gstnRegex.test(gstn)) {
      setError('Invalid GSTN format');
      return false;
    }
    const gstnPAN = gstn.substring(2, 12);
    if (pan && gstnPAN !== pan.toUpperCase()) {
      setError('GSTN does not match the entered PAN');
      return false;
    }
    if (gstns.some(g => g.gstn === gstn)) {
      setError('GSTN already added');
      return false;
    }
    return true;
  };

  const handleAddGSTN = () => {
    setError('');
    if (!newGSTN.trim()) { setError('Please enter GSTN'); return; }
    if (!newState) { setError('Please select state'); return; }
    if (!validateGSTN(newGSTN.toUpperCase())) return;
    const gstn: GSTN = {
      id: `gstn-${Date.now()}`,
      gstn: newGSTN.toUpperCase(),
      state: newState,
      isActive: true,
      verificationStatus: 'Pending',
    };
    onChange([...gstns, gstn]);
    setNewGSTN('');
    setNewState('');
  };

  const handleRemoveGSTN = (id: string) => { onChange(gstns.filter(g => g.id !== id)); };
  const handleToggleActive = (id: string) => { onChange(gstns.map(g => g.id === id ? { ...g, isActive: !g.isActive } : g)); };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-[4px] p-4">
        <div className="flex gap-2">
          <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-xs text-blue-900">
            <p className="font-medium mb-1">Multi-State GSTN Support</p>
            <p>You can add multiple GSTNs linked to this PAN. Each GSTN will be mapped to a state and generate a state-wise sub-code for lead submission.</p>
          </div>
        </div>
      </div>
      {!readonly && (
        <div className="border border-[#E5E5E5] rounded-[4px] p-4">
          <h4 className="text-sm text-[#2B2826] mb-3">Add GSTN</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-xs text-[#706E6B] mb-1 block">GSTN Number</label>
              <Input value={newGSTN} onChange={(e) => setNewGSTN(e.target.value)} placeholder="e.g., 27AAAAA1234A1Z5" maxLength={15} className="uppercase" />
            </div>
            <div>
              <label className="text-xs text-[#706E6B] mb-1 block">State</label>
              <select value={newState} onChange={(e) => setNewState(e.target.value)} className="w-full h-10 px-3 rounded-[4px] border border-[#E5E5E5] text-sm">
                <option value="">Select State</option>
                {INDIAN_STATES.map(state => (<option key={state} value={state}>{state}</option>))}
              </select>
            </div>
          </div>
          {error && <p className="text-xs text-[#D9001C] mb-2">{error}</p>}
          <Button type="button" onClick={handleAddGSTN} size="sm" className="bg-[#1756A0] hover:bg-[#1756A0]/90">
            <Plus className="w-4 h-4 mr-1" /> Add GSTN
          </Button>
        </div>
      )}
      {gstns.length > 0 && (
        <div className="border border-[#E5E5E5] rounded-[4px]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F3F3F5]">
                <tr>
                  <th className="px-4 py-2 text-left text-xs text-[#706E6B]">GSTN</th>
                  <th className="px-4 py-2 text-left text-xs text-[#706E6B]">State</th>
                  <th className="px-4 py-2 text-left text-xs text-[#706E6B]">Status</th>
                  <th className="px-4 py-2 text-left text-xs text-[#706E6B]">Active for Activation</th>
                  {!readonly && <th className="px-4 py-2 text-left text-xs text-[#706E6B]">Action</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                {gstns.map(gstn => (
                  <tr key={gstn.id}>
                    <td className="px-4 py-3 text-sm text-[#2B2826] font-mono">{gstn.gstn}</td>
                    <td className="px-4 py-3 text-sm text-[#2B2826]">{gstn.state}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        {gstn.verificationStatus === 'Verified' && (<><CheckCircle2 className="w-3.5 h-3.5 text-green-600" /><span className="text-xs text-green-600">Verified</span></>)}
                        {gstn.verificationStatus === 'Failed' && (<><XCircle className="w-3.5 h-3.5 text-[#D9001C]" /><span className="text-xs text-[#D9001C]">Failed</span></>)}
                        {gstn.verificationStatus === 'Pending' && (<><AlertCircle className="w-3.5 h-3.5 text-amber-600" /><span className="text-xs text-amber-600">Pending</span></>)}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {readonly ? (
                        <span className={`text-xs px-2 py-1 rounded-[4px] ${gstn.isActive ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-600'}`}>{gstn.isActive ? 'Yes' : 'No'}</span>
                      ) : (
                        <input type="checkbox" checked={gstn.isActive} onChange={() => handleToggleActive(gstn.id)} className="w-4 h-4 rounded border-[#E0E3EA] text-[#1756A0]" />
                      )}
                    </td>
                    {!readonly && (
                      <td className="px-4 py-3">
                        <button type="button" onClick={() => handleRemoveGSTN(gstn.id)} className="text-[#D9001C] hover:text-[#D9001C]/80"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {gstns.length === 0 && <div className="text-center py-8 text-sm text-[#706E6B]">No GSTNs added yet</div>}
    </div>
  );
}