import { useState } from "react";
import { motion } from "framer-motion";

export default function SwitchGroup() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: true,
    analytics: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const items = [
    { key: "notifications" as const, label: "Push Notifications", description: "Receive push notifications on your device" },
    { key: "emailUpdates" as const, label: "Email Updates", description: "Get weekly email updates about your activity" },
    { key: "darkMode" as const, label: "Dark Mode", description: "Use dark theme across the application" },
    { key: "analytics" as const, label: "Analytics", description: "Help us improve by sharing anonymous usage data" },
  ];

  return (
    <div className="w-full max-w-md space-y-3">
      {items.map((item) => (
        <div key={item.key} className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <div className="flex-1">
            <h4 className="text-white text-sm font-medium">{item.label}</h4>
            <p className="text-neutral-500 text-xs mt-0.5">{item.description}</p>
          </div>
          <button
            onClick={() => toggleSetting(item.key)}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              settings[item.key] ? "bg-blue-600" : "bg-neutral-700"
            }`}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md ${
                settings[item.key] ? "left-5" : "left-0.5"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
