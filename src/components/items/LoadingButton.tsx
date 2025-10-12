import { useState } from "react";

export default function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="
        text-white 
        bg-blue-600 
        hover:bg-blue-700 
        active:bg-blue-800
        disabled:bg-blue-400
        disabled:cursor-not-allowed
        duration-200 
        ease-in-out 
        py-2.5
        px-6
        rounded-lg 
        text-sm 
        font-semibold 
        whitespace-nowrap
        transition-all
        flex
        items-center
        gap-2
      "
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {loading ? 'Processing...' : 'Submit'}
    </button>
  );
}
