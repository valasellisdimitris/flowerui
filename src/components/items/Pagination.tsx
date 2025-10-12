import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="
          px-2 sm:px-3
          py-2
          text-xs sm:text-sm
          font-medium
          text-neutral-300
          hover:text-white
          bg-neutral-900
          border
          border-neutral-800
          rounded-lg
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition-colors
        "
      >
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">Prev</span>
      </button>
      
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={`
            px-3 sm:px-4
            py-2
            text-xs sm:text-sm
            font-medium
            rounded-lg
            transition-colors
            min-w-[32px] sm:min-w-[40px]
            ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800"
            }
          `}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="
          px-2 sm:px-3
          py-2
          text-xs sm:text-sm
          font-medium
          text-neutral-300
          hover:text-white
          bg-neutral-900
          border
          border-neutral-800
          rounded-lg
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition-colors
        "
      >
        Next
      </button>
    </div>
  );
}
