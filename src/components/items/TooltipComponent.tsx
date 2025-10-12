import { useState } from "react";

export default function TooltipComponent() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Hover me
      </button>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs rounded-lg whitespace-nowrap shadow-lg">
          This is a tooltip!
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
            <div className="border-4 border-transparent border-t-neutral-700"></div>
          </div>
        </div>
      )}
    </div>
  );
}
