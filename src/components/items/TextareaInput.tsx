import { useState } from "react";

export default function TextareaInput() {
  const [value, setValue] = useState("");
  const maxLength = 500;

  return (
    <div className="w-full max-w-md">
      <label className="block text-neutral-300 text-sm font-medium mb-2">
        Message
      </label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write your message..."
        maxLength={maxLength}
        rows={4}
        className="
          w-full
          bg-neutral-900
          border
          border-neutral-800
          text-white
          rounded-lg
          px-4
          py-3
          text-sm
          focus:outline-none
          focus:border-blue-500
          focus:ring-1
          focus:ring-blue-500
          transition-colors
          placeholder:text-neutral-500
          resize-none
        "
      />
      <div className="flex justify-end mt-1">
        <span className={`text-xs ${value.length >= maxLength ? 'text-red-400' : 'text-neutral-500'}`}>
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}
