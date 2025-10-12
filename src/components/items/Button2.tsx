export default function Button2() {
  return (
    <button
      // Styles are already set up for responsiveness (mobile-first with 'md' overrides)
      className="
        text-neutral-50 
        hover:bg-neutral-800 
        duration-200 
        ease-in-out 
        py-2 
        px-3 
        md:px-4 
        rounded-md 
        items-center 
        flex 
        flex-row 
        gap-2 
        w-fit 
        text-sm 
        md:text-base 
        font-medium 
        whitespace-nowrap
      "
    >
      Text
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  );
}
