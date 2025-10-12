export default function ImageCard() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden w-full max-w-sm group cursor-pointer">
      <div className="relative h-56 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-20 h-20 opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-base mb-1">Beautiful Landscape</h3>
        <p className="text-neutral-400 text-sm">Mountain view at sunset</p>
      </div>
    </div>
  );
}
