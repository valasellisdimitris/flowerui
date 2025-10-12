import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors text-sm"
      >
        Open Drawer
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-neutral-900 border-l border-neutral-800 z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-800">
                  <h3 className="text-white font-semibold">Drawer Title</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-neutral-800 rounded transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-neutral-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    This is a drawer component. Perfect for filters, navigation, or additional content.
                  </p>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="p-3 bg-neutral-800 rounded-lg text-neutral-300 text-sm">
                        Menu Item {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-neutral-800">
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
                    Apply Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
