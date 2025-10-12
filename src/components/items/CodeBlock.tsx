import { useState } from "react";

export default function CodeBlock() {
  const [copied, setCopied] = useState(false);

  const code = `import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Hello World
    </motion.div>
  );
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="bg-neutral-950 border border-neutral-800 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800">
          <span className="text-neutral-400 text-xs font-mono">example.tsx</span>
          <button
            onClick={copyCode}
            className="px-2 py-1 text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded transition-colors flex items-center gap-1"
          >
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-neutral-300 font-mono leading-relaxed">{code}</code>
        </pre>
      </div>
    </div>
  );
}
