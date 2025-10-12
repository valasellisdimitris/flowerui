import { useState } from "react";

export default function RangeSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-md">
      <label className="block text-neutral-300 text-sm font-medium mb-2">
        Volume: {value}%
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="
          w-full
          h-2
          bg-neutral-800
          rounded-lg
          appearance-none
          cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-blue-500
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-blue-500
          [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:cursor-pointer
        "
      />
    </div>
  );
}
