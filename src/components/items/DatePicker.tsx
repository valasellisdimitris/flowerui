import { useState } from "react";

export default function DatePicker() {
  const [date, setDate] = useState("");

  return (
    <div className="w-full max-w-md">
      <label className="block text-neutral-300 text-sm font-medium mb-2">
        Select Date
      </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
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
          [&::-webkit-calendar-picker-indicator]:filter
          [&::-webkit-calendar-picker-indicator]:invert
          [&::-webkit-calendar-picker-indicator]:cursor-pointer
        "
      />
    </div>
  );
}
