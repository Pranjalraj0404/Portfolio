import React from "react";
import { Database } from "lucide-react";
import { DIRECT_RESUME_URL } from "../../utils/config";

const DatabaseStatus = () => {
  const status = DIRECT_RESUME_URL ? "✅ Assets Linked" : "⚠️ Config Error";
  const color = DIRECT_RESUME_URL ? "text-green-400" : "text-red-400";

  return (
    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/10 text-xs font-mono">
      <Database size={12} className={color} />
      <span className={color}>{status}</span>
    </div>
  );
};

export default DatabaseStatus;
