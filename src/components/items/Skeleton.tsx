export default function Skeleton() {
  return (
    <div className="w-full max-w-sm space-y-4 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-neutral-800"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
          <div className="h-3 bg-neutral-800 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-neutral-800 rounded"></div>
        <div className="h-3 bg-neutral-800 rounded w-5/6"></div>
      </div>
    </div>
  );
}
