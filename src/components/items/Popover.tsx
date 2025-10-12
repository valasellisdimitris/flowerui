import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block w-full sm:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors text-sm"
      >
        Open Popover
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-20 top-full mt-2 left-0 w-[280px] sm:w-72 max-w-[calc(100vw-2rem)] bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl p-3 sm:p-4"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">Popover Content</h4>
                  <p className="text-neutral-400 text-[10px] sm:text-xs leading-relaxed break-words">
                    This is a rich popover with more detailed content and actions.
                  </p>
                  <div className="mt-2 sm:mt-3 flex gap-2 flex-wrap">
                    <button className="px-2.5 sm:px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-xs rounded transition-colors">
                      Action
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-2.5 sm:px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] sm:text-xs rounded transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
