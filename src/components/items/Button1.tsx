export default function Button1() {
  return (
    <button
      // Base styles for all screens (small/mobile first)
      className="
        text-neutral-900 
        bg-neutral-50 
        hover:bg-neutral-100 
        duration-200 
        ease-in-out 
        py-2 
        px-4 
        rounded-md 
        w-fit 
        text-sm 
        font-medium 
        whitespace-nowrap
        
        // Responsive adjustments for medium screens (md) and up
        md:py-2 
        md:px-6 
        md:text-base
      "
    >
      Text
    </button>
  );
}
