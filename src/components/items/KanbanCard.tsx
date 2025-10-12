import { motion } from "framer-motion";

export default function KanbanCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-white font-medium text-sm">Design new landing page</h4>
        <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs rounded">High</span>
      </div>
      <p className="text-neutral-400 text-xs mb-3">
        Create modern, responsive design for the homepage
      </p>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-neutral-900" />
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-neutral-900" />
        </div>
        <div className="flex items-center gap-1 text-neutral-500 text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          Mar 15
        </div>
      </div>
    </motion.div>
  );
}
