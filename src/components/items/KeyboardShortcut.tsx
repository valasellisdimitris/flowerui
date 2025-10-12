export default function KeyboardShortcut() {
  const shortcuts = [
    { keys: ["⌘", "K"], description: "Open command palette" },
    { keys: ["⌘", "S"], description: "Save document" },
    { keys: ["⌘", "⇧", "P"], description: "Open preferences" },
  ];

  return (
    <div className="w-full max-w-md space-y-3">
      {shortcuts.map((shortcut, idx) => (
        <div key={idx} className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3">
          <span className="text-neutral-300 text-sm">{shortcut.description}</span>
          <div className="flex gap-1">
            {shortcut.keys.map((key, keyIdx) => (
              <kbd
                key={keyIdx}
                className="px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 text-xs font-mono min-w-[28px] text-center"
              >
                {key}
              </kbd>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
