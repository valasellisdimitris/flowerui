import { useState } from "react";

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`
          relative w-12 h-6 rounded-full transition-colors duration-200
          ${enabled ? "bg-blue-600" : "bg-neutral-700"}
        `}
      >
        <div
          className={`
            absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200
            ${enabled ? "translate-x-6" : "translate-x-0.5"}
          `}
        />
      </button>
      <span className="text-neutral-300 text-sm">
        {enabled ? "Enabled" : "Disabled"}
      </span>
    </div>
  );
}
