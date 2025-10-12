import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-md relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="
          w-full
          bg-neutral-900
          border
          border-neutral-800
          text-white
          rounded-lg
          pl-10
          pr-4
          py-2.5
          text-sm
          focus:outline-none
          focus:border-blue-500
          focus:ring-1
          focus:ring-blue-500
          transition-colors
          placeholder:text-neutral-500
        "
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
