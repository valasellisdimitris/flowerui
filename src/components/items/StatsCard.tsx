export default function StatsCard() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-xs">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-neutral-400 text-sm font-medium">Total Revenue</h4>
        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </div>
      </div>
      <div className="mb-2">
        <h2 className="text-white text-3xl font-bold">$45,231</h2>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-green-400 text-sm font-medium">+12.5%</span>
        <span className="text-neutral-500 text-sm">from last month</span>
      </div>
    </div>
  );
}
