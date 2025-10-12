import { useState } from "react";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Overview", content: "Overview content goes here." },
    { id: "tab2", label: "Details", content: "Detailed information is displayed here." },
    { id: "tab3", label: "Settings", content: "Configure your settings here." },
  ];

  return (
    <div className="w-full max-w-md">
      <div className="flex gap-1 border-b border-neutral-800 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 text-sm font-medium transition-colors relative
              ${activeTab === tab.id
                ? "text-white"
                : "text-neutral-500 hover:text-neutral-300"
              }
            `}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
            )}
          </button>
        ))}
      </div>
      <div className="text-neutral-300 text-sm">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
