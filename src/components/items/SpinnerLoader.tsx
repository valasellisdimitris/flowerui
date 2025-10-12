export default function SpinnerLoader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-neutral-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <span className="text-neutral-400 text-sm">Loading...</span>
    </div>
  );
}
