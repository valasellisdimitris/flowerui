import { useState } from "react";

export default function Button4() {
  const [checked, setChecked] = useState(true);

  return (
    <button
      type="button"
      onClick={() => setChecked((s) => !s)}
      aria-pressed={checked}
      className={`
                flex
                items-center
                gap-4
                w-full
                p-3
                md:p-3
                border
                rounded-xl
                cursor-pointer
                focus:outline-none
                duration-200
                ease-in-out
                ${checked ? "bg-neutral-900" : "hover:bg-neutral-900"}
                border-neutral-800
            `}
    >
      <div
        className={`
                    flex
                    items-center
                    justify-center
                    rounded-sm
                    w-4
                    h-4
                    md:w-5
                    md:h-5
                    ${
                      checked
                        ? "bg-blue-600"
                        : "bg-transparent border border-neutral-700"
                    }
                `}
      >
        {checked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={3}
            className="w-4 h-4"
          >
            <path
              d="M20 6L9 17l-5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </div>

      <span className="text-sm md:text-base font-medium text-neutral-100">
        I agree to the terms and conditions
      </span>
    </button>
  );
}
