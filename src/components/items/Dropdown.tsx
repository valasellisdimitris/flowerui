import { useState, useRef, useEffect } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  // Outside click handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      // Don't close if clicking on the trigger button
      if (buttonRef.current?.contains(target)) {
        return;
      }

      // Close if clicking outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full max-w-md">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full
          bg-neutral-900
          border
          border-neutral-800
          text-white
          rounded-lg
          px-4
          py-2.5
          text-sm
          text-left
          flex
          items-center
          justify-between
          hover:border-neutral-700
          transition-colors
        "
      >
        <span className={selected === "Select an option" ? "text-neutral-500" : ""}>
          {selected}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div ref={dropdownRef} className="absolute z-10 w-full mt-2 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="
                w-full
                px-4
                py-2.5
                text-sm
                text-left
                text-white
                hover:bg-neutral-800
                transition-colors
              "
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
