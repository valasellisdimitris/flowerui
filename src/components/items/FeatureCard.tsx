export default function FeatureCard() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-sm">
      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">
        Lightning Fast
      </h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        Built with performance in mind. Components are optimized for speed and efficiency out of the box.
      </p>
    </div>
  );
}
