export default function GradientButton() {
  return (
    <button
      className="
        text-white 
        bg-gradient-to-r 
        from-blue-500 
        to-purple-600 
        hover:from-blue-600 
        hover:to-purple-700
        duration-200 
        ease-in-out 
        py-2.5
        px-6
        rounded-lg 
        text-sm 
        font-semibold 
        whitespace-nowrap
        transition-all
        shadow-lg
        hover:shadow-xl
      "
    >
      Gradient Action
    </button>
  );
}
