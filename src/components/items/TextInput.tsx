import { useState } from "react";

export default function TextInput() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-md">
      <label className="block text-neutral-300 text-sm font-medium mb-2">
        Full Name
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your name"
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
          placeholder:text-neutral-500
        "
      />
    </div>
  );
}
