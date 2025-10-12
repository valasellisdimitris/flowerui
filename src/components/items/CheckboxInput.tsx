import { useState } from "react";

export default function CheckboxInput() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setChecked(!checked)}
        className={`
          w-5 h-5 rounded border-2 flex items-center justify-center transition-all
          ${checked 
            ? 'bg-blue-600 border-blue-600' 
            : 'bg-transparent border-neutral-600 hover:border-neutral-500'
          }
        `}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className="w-3 h-3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        )}
      </button>
      <label 
        onClick={() => setChecked(!checked)}
        className="text-neutral-300 text-sm cursor-pointer select-none"
      >
        I agree to the terms and conditions
      </label>
    </div>
  );
}
