import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 text-white hover:bg-neutral-800 rounded-lg transition-colors"
      >
        Products
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute top-full left-0 mt-2 w-[600px] max-w-[calc(100vw-2rem)] bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl p-4 sm:p-6 z-50"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {["Analytics", "Security", "Automation", "Integrations", "Reports", "Settings"].map((item) => (
                <div key={item} className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">{item}</h4>
                  <p className="text-neutral-400 text-xs">Powerful {item.toLowerCase()} tools</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
