export default function BlogCard() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden w-full max-w-sm hover:border-neutral-700 transition-colors">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-neutral-500 text-xs">Mar 12, 2024</span>
          <span className="text-neutral-700">•</span>
          <span className="text-neutral-500 text-xs">5 min read</span>
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">
          Building Modern UIs with React
        </h3>
        <p className="text-neutral-400 text-sm mb-4">
          Learn best practices for creating beautiful and performant user interfaces with React and Tailwind CSS.
        </p>
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
          Read Article →
        </button>
      </div>
    </div>
  );
}
