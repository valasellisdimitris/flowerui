import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tag() {
  const [tags, setTags] = useState([
    "React",
    "TypeScript",
    "Tailwind",
    "Next.js",
  ]);

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap gap-2">
      <AnimatePresence>
        {tags.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1.5 rounded-full text-sm"
          >
            <span>{tag}</span>
            <button
              onClick={() => removeTag(index)}
              className="hover:bg-blue-500/20 rounded-full p-0.5 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
