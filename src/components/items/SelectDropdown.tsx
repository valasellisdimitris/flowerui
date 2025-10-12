import { useState } from "react";

export default function SelectDropdown() {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="w-full max-w-md">
      <label className="block text-neutral-300 text-sm font-medium mb-2">
        Select Option
      </label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
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
          focus:outline-none
          focus:border-blue-500
          focus:ring-1
          focus:ring-blue-500
          transition-colors
          cursor-pointer
        "
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
  );
}
