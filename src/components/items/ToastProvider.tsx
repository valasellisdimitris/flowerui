import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ToastType = "success" | "error" | "warning" | "info";

type Toast = {
  id: string;
  message: string;
  description?: string;
  type: ToastType;
};

type ToastContextType = {
  toast: (message: string, description?: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (message: string, description?: string, type: ToastType = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, message, description, type };
    
    setToasts((prev) => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return (
          <div className="w-2 h-2 rounded-full bg-green-500" />
        );
      case "error":
        return (
          <div className="w-2 h-2 rounded-full bg-red-500" />
        );
      case "warning":
        return (
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
        );
      case "info":
        return (
          <div className="w-2 h-2 rounded-full bg-blue-500" />
        );
    }
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none max-w-[calc(100vw-2rem)]">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg p-4 flex items-start gap-3 w-full sm:min-w-[320px] max-w-md pointer-events-auto"
            >
              {getIcon(t.type)}
              <div className="flex-1">
                <div className="text-white font-medium text-sm">{t.message}</div>
                {t.description && (
                  <div className="text-neutral-400 text-xs mt-0.5">{t.description}</div>
                )}
              </div>
              <button
                onClick={() => removeToast(t.id)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
