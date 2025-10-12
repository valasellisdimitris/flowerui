import { useState } from "react";

const OPTIONS = [
  { id: "social", label: "Social Media" },
  { id: "search", label: "Search Engine" },
  { id: "referral", label: "Referral" },
  { id: "other", label: "Other" },
];

export default function Button5() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    social: true,
    search: true,
    referral: false,
    other: false,
  });

  function toggle(id: string) {
    setChecked((s) => ({ ...s, [id]: !s[id] }));
  }

  return (
    <div className="p-4 md:p-5 border border-neutral-800 rounded-xl w-full bg-transparent">
      <div className="mb-3">
        <h3 className="font-bold text-base md:text-lg text-neutral-100">
          How did you hear about us?
        </h3>
        <p className="text-xs md:text-sm text-neutral-300">
          Select the option that best describes how you...
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {OPTIONS.map((o) => {
          const isChecked = !!checked[o.id];
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => toggle(o.id)}
              aria-pressed={isChecked}
              className={`flex items-center gap-2 py-1 px-3 rounded-full cursor-pointer focus:outline-none duration-150 ease-in-out ${
                isChecked
                  ? "bg-neutral-900 border border-blue-500 text-neutral-100"
                  : "bg-neutral-800 border border-neutral-700 text-neutral-300"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center rounded-full w-4 h-4 ${
                  isChecked
                    ? "bg-blue-500"
                    : "bg-transparent border border-neutral-700"
                }`}
              >
                {isChecked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    className="w-3 h-3"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>

              <span className="text-xs md:text-sm font-medium">{o.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
