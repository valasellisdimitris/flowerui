export default function ErrorBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-3 py-1.5 rounded-full text-sm font-medium">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      Error
    </div>
  );
}
