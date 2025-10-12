export default function DangerButton() {
  return (
    <button
      className="
        text-white 
        bg-red-600 
        hover:bg-red-700 
        active:bg-red-800
        duration-200 
        ease-in-out 
        py-2.5
        px-6
        rounded-lg 
        text-sm 
        font-semibold 
        whitespace-nowrap
        transition-all
        shadow-sm
        hover:shadow-md
      "
    >
      Delete
    </button>
  );
}
