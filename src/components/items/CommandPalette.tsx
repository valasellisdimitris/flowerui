import { useState } from "react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const commands = [
    { name: "Create new file", icon: "📄" },
    { name: "Open settings", icon: "⚙️" },
    { name: "Search documentation", icon: "📚" },
    { name: "Toggle theme", icon: "🌙" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-neutral-900 border border-neutral-800 text-neutral-400 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:border-neutral-700 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search commands...
        <kbd className="ml-auto px-2 py-0.5 bg-neutral-800 rounded text-xs">⌘K</kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 z-50 p-4" onClick={() => setIsOpen(false)}>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-neutral-800">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command..."
                className="w-full bg-transparent text-white text-sm focus:outline-none"
                autoFocus
              />
            </div>
            <div className="max-h-96 overflow-y-auto">
              {commands.map((cmd, i) => (
                <button
                  key={i}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-3 text-left hover:bg-neutral-800 transition-colors flex items-center gap-3"
                >
                  <span className="text-xl">{cmd.icon}</span>
                  <span className="text-white text-sm">{cmd.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
