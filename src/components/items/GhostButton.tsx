export default function GhostButton() {
  return (
    <button
      className="
        text-neutral-300 
        bg-transparent 
        hover:bg-neutral-800/50
        active:bg-neutral-700/50
        duration-200 
        ease-in-out 
        py-2.5
        px-6
        rounded-lg 
        text-sm 
        font-medium 
        whitespace-nowrap
        transition-all
      "
    >
      Ghost Button
    </button>
  );
}
