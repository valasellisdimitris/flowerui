export default function Button3() {
  return (
    // Main container: Removed max-w constraints to fit column better
    <div
      className="
        flex 
        flex-col 
        sm:flex-row 
        justify-between 
        items-start 
        sm:items-center 
        p-4 
        md:p-5 
        border 
        border-neutral-800 
        rounded-xl 
        w-full 
        h-auto 
        cursor-pointer 
        hover:bg-neutral-900 
        duration-200 
        ease-in-out 
        gap-3 
        md:gap-6
      "
    >
      {/* Text block */}
      <div className="flex flex-col">
        <span className="font-bold text-base md:text-lg">Verification</span>
        <p className="text-sm md:text-base text-neutral-300">
          Via Phone or Email
        </p>
      </div>

      {/* Button block */}
      <button
        className="
          text-neutral-900 
          bg-neutral-50 
          hover:bg-neutral-100 
          duration-200 
          ease-in-out 
          py-2 
          px-4 
          md:px-6 
          rounded-md 
          w-fit 
          text-sm 
          md:text-base 
          font-medium 
          whitespace-nowrap
        "
      >
        Enable
      </button>
    </div>
  );
}
