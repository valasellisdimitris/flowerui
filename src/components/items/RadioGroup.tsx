import { useState } from "react";

export default function RadioGroup() {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="w-full max-w-md">
      <label className="block text-neutral-300 text-sm font-medium mb-3">
        Choose an option
      </label>
      <div className="space-y-2">
        {["option1", "option2", "option3"].map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-neutral-900 transition-colors"
          >
            <input
              type="radio"
              name="radio-group"
              value={option}
              checked={selected === option}
              onChange={(e) => setSelected(e.target.value)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-white text-sm capitalize">
              {option.replace("option", "Option ")}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
