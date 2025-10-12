export default function ProductCard() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden w-full max-w-sm hover:border-neutral-700 transition-colors">
      <div className="h-48 bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-semibold text-lg">Premium Product</h3>
          <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-medium">
            New
          </span>
        </div>
        <p className="text-neutral-400 text-sm mb-4">
          High-quality product with amazing features and benefits.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-xl">$99.00</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
