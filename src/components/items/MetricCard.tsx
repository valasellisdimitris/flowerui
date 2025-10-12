import { motion } from "framer-motion";

export default function MetricCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-neutral-900 border border-neutral-800 rounded-lg p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-neutral-400 text-sm mb-1">Total Revenue</p>
          <h3 className="text-3xl font-bold text-white">$45,231</h3>
        </div>
        <div className="p-3 bg-green-500/10 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 text-green-500 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
          +12.5%
        </span>
        <span className="text-neutral-500 text-sm">from last month</span>
      </div>
    </motion.div>
  );
}
