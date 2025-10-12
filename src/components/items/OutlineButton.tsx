export default function OutlineButton() {
  return (
    <button
      className="
        text-neutral-100 
        bg-transparent 
        border-2
        border-neutral-300
        hover:bg-neutral-800
        hover:border-neutral-400
        active:bg-neutral-700
        duration-200 
        ease-in-out 
        py-2
        px-6
        rounded-lg 
        text-sm 
        font-semibold 
        whitespace-nowrap
        transition-all
      "
    >
      Outline Button
    </button>
  );
}
