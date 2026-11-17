import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-slate-800 border-t-blue-500 animate-spin" />
        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
      </div>
      <span className="mt-4 text-xs font-mono text-slate-400 tracking-wider uppercase">
        Loading...
      </span>
    </div>
  );
};
