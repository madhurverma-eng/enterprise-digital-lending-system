import { useState, useRef } from "react";
import { Upload, Eye, RefreshCw, CheckCircle, Clock, XCircle, File } from "lucide-react";
import type { FileUploadItem } from "../../types/onboarding";

interface FileUploadComponentProps {
  documents: FileUploadItem[];
  onChange: (documents: FileUploadItem[]) => void;
}

const statusConfig = {
  Uploaded: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', borderColor: 'border-green-200', label: 'Uploaded' },
  Pending: { icon: Clock, color: 'text-[#706E6B]', bg: 'bg-[#F3F3F5]', borderColor: 'border-[#D8D8D8]', label: 'Pending' },
  Rejected: { icon: XCircle, color: 'text-[#D9001C]', bg: 'bg-red-50', borderColor: 'border-red-200', label: 'Rejected' },
};

function FileUploadRow({ item, onUpload, onReplace }: { item: FileUploadItem; onUpload: (id: string, file: globalThis.File) => void; onReplace: (id: string) => void; }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const config = statusConfig[item.status];
  const StatusIcon = config.icon;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(item.id, file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onUpload(item.id, file);
  };

  return (
    <div className={`border rounded-[4px] p-4 ${isDragOver ? 'border-[#1756A0] bg-[#E8EFF8]' : config.borderColor + ' ' + config.bg}`}>
      <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileSelect} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-[4px] flex items-center justify-center ${item.status === 'Uploaded' ? 'bg-green-100' : 'bg-white'} border border-[#D8D8D8]`}>
            <File className={`w-5 h-5 ${item.status === 'Uploaded' ? 'text-green-600' : 'text-[#706E6B]'}`} />
          </div>
          <div>
            <p className="text-sm text-[#2B2826]">{item.label}</p>
            {item.fileName && <p className="text-xs text-[#706E6B] mt-0.5">{item.fileName}</p>}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-[4px] ${config.bg} ${config.color} border ${config.borderColor}`}>
            <StatusIcon className="w-3 h-3" /> {config.label}
          </span>
          <div className="flex items-center gap-1">
            {item.status === 'Pending' ? (
              <button type="button" onClick={() => fileInputRef.current?.click()} onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }} onDragLeave={() => setIsDragOver(false)} onDrop={handleDrop} className="inline-flex items-center gap-1.5 text-xs text-[#1756A0] border border-[#1756A0] bg-white px-3 py-1.5 rounded-[4px] hover:bg-[#E8EFF8] transition-colors">
                <Upload className="w-3 h-3" /> Upload
              </button>
            ) : (
              <>
                <button type="button" className="inline-flex items-center gap-1 text-xs text-[#706E6B] hover:text-[#2B2826] px-2 py-1.5 rounded-[4px] hover:bg-white transition-colors"><Eye className="w-3 h-3" /> Preview</button>
                <button type="button" onClick={() => { onReplace(item.id); fileInputRef.current?.click(); }} className="inline-flex items-center gap-1 text-xs text-[#706E6B] hover:text-[#2B2826] px-2 py-1.5 rounded-[4px] hover:bg-white transition-colors"><RefreshCw className="w-3 h-3" /> Replace</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FileUploadComponent({ documents, onChange }: FileUploadComponentProps) {
  const handleUpload = (id: string, file: globalThis.File) => {
    onChange(documents.map((doc) => doc.id === id ? { ...doc, status: 'Uploaded' as const, fileName: file.name } : doc));
  };
  const handleReplace = (id: string) => {
    onChange(documents.map((doc) => doc.id === id ? { ...doc, status: 'Pending' as const, fileName: undefined } : doc));
  };

  return (
    <div className="space-y-3">
      {documents.map((doc) => (<FileUploadRow key={doc.id} item={doc} onUpload={handleUpload} onReplace={handleReplace} />))}
      {documents.length === 0 && <div className="text-center py-8 text-sm text-[#706E6B]">No documents to upload</div>}
    </div>
  );
}