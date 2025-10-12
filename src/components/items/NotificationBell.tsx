import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { id: 1, text: "New comment on your post", time: "2m ago", unread: true },
  { id: 2, text: "Someone liked your photo", time: "1h ago", unread: true },
  { id: 3, text: "You have a new follower", time: "3h ago", unread: false },
];

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [maxDropdownHeight, setMaxDropdownHeight] = useState('500px');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((n) => n.unread).length;

  // Outside click handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      // Don't close if clicking on the trigger button
      if (buttonRef.current?.contains(target)) {
        return;
      }

      // Close if clicking outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate available space for dropdown
  useEffect(() => {
    if (isOpen && buttonRef.current && !isMobile) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const availableSpace = window.innerHeight - buttonRect.bottom - 16; // 16px margin
      setMaxDropdownHeight(`${Math.max(200, Math.min(availableSpace, 500))}px`);
    }
  }, [isOpen, isMobile]);

  // Prevent body scroll when modal is open on mobile
  useEffect(() => {
    if (isOpen && (isMobile || (!isMobile && window.innerWidth < 1024))) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  const notificationsList = (
    <>
      <div className="p-4 border-b border-neutral-800 flex items-center justify-between flex-shrink-0">
        <h3 className="text-white font-semibold text-base">Notifications</h3>
        {/* Close button for mobile modal */}
        <button 
          onClick={() => setIsOpen(false)}
          className="sm:hidden p-1 hover:bg-neutral-800 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-neutral-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto flex-1 min-h-0">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 border-b border-neutral-800 hover:bg-neutral-800/50 cursor-pointer transition-colors ${
              notif.unread ? "bg-blue-500/5" : ""
            }`}
          >
            <div className="flex gap-3">
              {notif.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0" />}
              <div className="flex-1 min-w-0">
                <p className="text-neutral-300 text-sm break-words">{notif.text}</p>
                <span className="text-neutral-500 text-xs">{notif.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-neutral-800 text-center flex-shrink-0">
        <button className="text-blue-500 hover:text-blue-400 text-sm transition-colors">View all</button>
      </div>
    </>
  );

  return (
    <>
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 hover:bg-neutral-800 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-neutral-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Desktop Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="hidden lg:flex lg:flex-col absolute top-full right-0 w-80 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl overflow-hidden z-[100] mt-2"
              style={{
                maxHeight: maxDropdownHeight
              }}
            >
              {notificationsList}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tablet Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="hidden md:flex lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="hidden md:flex lg:hidden flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl z-[70] max-h-[80vh]"
            >
              {notificationsList}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden flex flex-col fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 rounded-t-2xl shadow-2xl z-[70] max-h-[85vh]"
            >
              {notificationsList}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

