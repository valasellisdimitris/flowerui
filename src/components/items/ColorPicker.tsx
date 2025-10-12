import { useState } from "react";
import { motion } from "framer-motion";

const colors = [
  "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16",
  "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9",
  "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef",
  "#ec4899", "#f43f5e",
];

export default function ColorPicker() {
  const [selected, setSelected] = useState("#3b82f6");

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-24 h-24 rounded-xl border-4 border-neutral-800 shadow-lg"
        style={{ backgroundColor: selected }}
      />
      <div className="grid grid-cols-6 gap-2">
        {colors.map((color) => (
          <motion.button
            key={color}
            onClick={() => setSelected(color)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-8 h-8 rounded-lg transition-all ${
              selected === color ? "ring-2 ring-white ring-offset-2 ring-offset-neutral-900" : ""
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <span className="text-neutral-400 text-sm font-mono">{selected}</span>
    </div>
  );
}
