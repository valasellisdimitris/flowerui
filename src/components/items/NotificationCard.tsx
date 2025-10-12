import { useState } from "react";

export default function NotificationCard() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-neutral-900 border border-blue-500/30 rounded-xl p-4 w-full max-w-md flex gap-3">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-blue-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-white font-semibold text-sm mb-1">New Update Available</h4>
        <p className="text-neutral-400 text-xs">
          Version 2.0 is now available with new features and improvements.
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="text-neutral-500 hover:text-white transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
