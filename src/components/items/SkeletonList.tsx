export default function SkeletonList() {
  return (
    <div className="w-full max-w-md space-y-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          {/* Avatar Skeleton */}
          <div className="w-12 h-12 bg-neutral-800 rounded-full animate-pulse" />
          
          {/* Content Skeleton */}
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-neutral-800 rounded animate-pulse w-3/4" />
            <div className="h-3 bg-neutral-800 rounded animate-pulse w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
