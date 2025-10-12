import { useMemo, useState } from "react";

export default function PriceRanger() {
  const MIN = 10;
  const MAX = 800;
  // Only max value is adjustable; min is fixed at MIN
  const [maxVal, setMaxVal] = useState<number>(600);

  // Calculate percentage position for the max thumb used to size the filled track
  const maxPercent = useMemo(
    () => ((maxVal - MIN) / (MAX - MIN)) * 100,
    [maxVal]
  );

  return (
    <div className="w-full">
      <div className="mb-2">
        <h4 className="text-sm font-semibold text-neutral-100">Price Range</h4>
        <p className="text-xs text-neutral-300">
          Set your budget range ($10 - 800).
        </p>
      </div>

      <div className="relative mt-3">
        {/* track background */}
        <div className="h-2 bg-neutral-800 rounded-full" />

        {/* filled range - start from left edge to the max value */}
        <div
          className="absolute top-0 h-2 bg-blue-600 rounded-full"
          style={{ left: `0%`, right: `${100 - maxPercent}%` }}
        />

        {/* single interactive invisible input controlling the max value */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={1}
          aria-label="Maximum price"
          value={maxVal}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), MIN + 1);
            setMaxVal(val);
          }}
          className={`absolute -top-2 w-full appearance-none z-30`}
          style={{
            WebkitAppearance: "none",
            opacity: 0,
            pointerEvents: "auto",
          }}
        />

        {/* Decorative thumbs removed per request (inputs remain interactive) */}
      </div>

      <div className="flex justify-between mt-3 text-xs text-neutral-300">
        <span>${MIN}</span>
        <span>${maxVal}</span>
      </div>
    </div>
  );
}
