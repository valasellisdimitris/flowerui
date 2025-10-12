export default function DividerHorizontal() {
  return (
    <div className="w-full max-w-md flex items-center gap-4">
      <div className="flex-1 h-px bg-neutral-800"></div>
      <span className="text-neutral-500 text-sm">OR</span>
      <div className="flex-1 h-px bg-neutral-800"></div>
    </div>
  );
}
