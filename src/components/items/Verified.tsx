export default function VerifiedButton() {
  return (
    <button className="group w-full">
      <div
        className="
        w-full 
        h-auto 
        px-4 
        py-3 
        flex 
        items-center 
        justify-between 
        border 
        border-neutral-800 
        bg-transparent 
        hover:bg-neutral-900 
        duration-200 
        ease-in-out 
        rounded-lg 
        gap-4
      "
      >
        <div className="flex items-center gap-3 md:gap-4">
          {/* Icon Wrapper */}
          <span className="flex items-center justify-center bg-green-600/20 rounded-full p-1 md:p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="#22c55e"
              className="w-2 h-2 md:w-3 md:h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
          {/* Text */}
          <span className="font-bold text-base md:text-md text-neutral-100 whitespace-nowrap">
            Verified profile
          </span>
        </div>

        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.2}
          stroke="currentColor"
          className="w-2 h-2 md:w-3 md:h-3 text-neutral-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </button>
  );
}
