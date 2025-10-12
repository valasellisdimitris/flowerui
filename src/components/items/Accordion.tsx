import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "What is FlowerUI?",
      content: "FlowerUI is a collection of beautiful React components that you can copy and paste into your projects."
    },
    {
      title: "How do I use it?",
      content: "Simply browse the components, copy the code, and paste it into your project. It's that easy!"
    },
    {
      title: "Is it free?",
      content: "Yes! FlowerUI is completely free and open source."
    }
  ];

  return (
    <div className="w-full max-w-2xl space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-neutral-800 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-900 transition-colors"
          >
            <span className="text-white font-medium text-sm">{item.title}</span>
            <svg
              className={`w-5 h-5 text-neutral-400 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-neutral-400 text-sm">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
