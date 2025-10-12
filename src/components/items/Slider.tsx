import { useState } from "react";

export default function Slider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-neutral-300 text-sm font-medium">Volume</label>
        <span className="text-neutral-400 text-sm font-mono">{value}%</span>
      </div>
      
      <div className="relative">
        {/* Track */}
        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
          {/* Fill */}
          <div
            className="h-full bg-blue-600 transition-all duration-150"
            style={{ width: `${value}%` }}
          />
        </div>
        
        {/* Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
        />
        
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow-lg pointer-events-none transition-all duration-150"
          style={{ left: `calc(${value}% - 8px)` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-neutral-500">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}
