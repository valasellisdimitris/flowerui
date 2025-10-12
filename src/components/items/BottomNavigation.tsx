import { useState } from "react";

export default function BottomNavigation() {
  const [active, setActive] = useState("home");

  const items = [
    { id: "home", label: "Home", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
    { id: "search", label: "Search", icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" },
    { id: "add", label: "Add", icon: "M12 4.5v15m7.5-7.5h-15" },
    { id: "notifications", label: "Alerts", icon: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" },
    { id: "profile", label: "Profile", icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" },
  ];

  return (
    <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-t-2xl px-2 sm:px-4 py-3 shadow-2xl">
      <div className="flex items-center justify-around gap-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative flex flex-col items-center gap-1 px-2 sm:px-4 py-2 flex-1 min-w-0"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                  active === item.id ? "text-blue-500" : "text-neutral-500"
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
            </div>
            <span className={`text-[10px] sm:text-xs truncate w-full text-center ${active === item.id ? "text-blue-500 font-medium" : "text-neutral-500"}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
