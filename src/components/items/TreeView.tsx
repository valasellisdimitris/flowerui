import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TreeNode = {
  name: string;
  children?: TreeNode[];
};

const data: TreeNode = {
  name: "src",
  children: [
    {
      name: "components",
      children: [
        { name: "Button.tsx" },
        { name: "Card.tsx" },
        { name: "Input.tsx" },
      ],
    },
    {
      name: "pages",
      children: [
        { name: "index.tsx" },
        { name: "about.tsx" },
      ],
    },
    { name: "styles" },
  ],
};

function TreeItem({ node }: { node: TreeNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left py-1 px-2 hover:bg-neutral-800 rounded transition-colors"
      >
        {hasChildren && (
          <motion.svg
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-neutral-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </motion.svg>
        )}
        {!hasChildren && <span className="w-4" />}
        <span className="text-neutral-300 text-sm">{node.name}</span>
      </button>
      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="ml-4 overflow-hidden"
          >
            {node.children!.map((child, idx) => (
              <TreeItem key={idx} node={child} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TreeView() {
  return (
    <div className="w-full max-w-xs bg-neutral-900 border border-neutral-800 rounded-lg p-3">
      <TreeItem node={data} />
    </div>
  );
}
