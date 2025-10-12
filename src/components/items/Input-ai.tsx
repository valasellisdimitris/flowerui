import React from "react";

export default function InputAI() {
  return (
    <div
      id="inputAI"
      className="
        w-full 
        h-auto 
        flex 
        flex-col 
        border 
        border-neutral-800 
        rounded-xl 
        p-4 
        md:p-6 
        bg-[#101010] 
        gap-4 
      "
    >
      {/* Top Button for Context */}
      <button
        className="
        bg-neutral-800 
        hover:bg-neutral-700 
        cursor-pointer 
        duration-200 
        ease-in-out 
        text-white 
        py-2 
        px-4 
        md:px-5 
        rounded-lg 
        w-fit 
        text-sm 
        md:text-base 
        font-bold 
        flex 
        flex-row 
        items-center 
        gap-2 
        whitespace-nowrap
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
          />
        </svg>
        Add Context
      </button>

      {/* Main Textarea: Now a standalone element again */}
      <textarea
        className="
          font-normal 
          w-full 
          h-auto 
          bg-neutral-900 
          text-white 
          resize-none 
          overflow-auto 
          break-words 
          text-sm 
          md:text-base 
          rounded-lg 
          p-3 
          md:p-4
          border-none 
          outline-none 
          focus:ring-0 
          focus:border-transparent 
        "
        placeholder="Ask, Search, Input anything..."
        rows={3}
        style={{ minHeight: "5rem" }}
      />

      {/* Footer/Action Bar: Restored to original layout */}
      <div className="flex flex-row justify-between items-center gap-3 md:gap-5">
        {/* Attachment Icon (Restored to original size/style) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-neutral-400 hover:text-white cursor-pointer transition-colors"
          aria-label="Attach File"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
          />
        </svg>

        {/* Send Button: Restored to original structure and SVG */}
        <button
          className="flex flex-row justify-center items-center cursor-pointer p-1 rounded-full text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Send Message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
