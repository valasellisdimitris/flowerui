import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { id: 1, text: "New comment on your post", time: "2m ago", unread: true },
  { id: 2, text: "Someone liked your photo", time: "1h ago", unread: true },
  { id: 3, text: "You have a new follower", time: "3h ago", unread: false },
];

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="relative">
      <button
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="p-3 sm:p-4 border-b border-neutral-800">
              <h3 className="text-white font-semibold text-sm sm:text-base">Notifications</h3>
            </div>
            <div className="max-h-80 sm:max-h-96 overflow-y-auto">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-3 sm:p-4 border-b border-neutral-800 hover:bg-neutral-800/50 cursor-pointer ${
                    notif.unread ? "bg-blue-500/5" : ""
                  }`}
                >
                  <div className="flex gap-2 sm:gap-3">
                    {notif.unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <p className="text-neutral-300 text-xs sm:text-sm break-words">{notif.text}</p>
                      <span className="text-neutral-500 text-[10px] sm:text-xs">{notif.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 sm:p-3 border-t border-neutral-800 text-center">
              <button className="text-blue-500 hover:text-blue-400 text-xs sm:text-sm">View all</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
