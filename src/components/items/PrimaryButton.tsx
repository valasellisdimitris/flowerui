export default function PrimaryButton() {
  return (
    <button
      className="
        text-white 
        bg-blue-600 
        hover:bg-blue-700 
        active:bg-blue-800
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
      Primary Action
    </button>
  );
}
