export default function AvatarComponent() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
        AB
      </div>
      <div>
        <h4 className="text-white text-sm font-semibold">Alex Brown</h4>
        <p className="text-neutral-500 text-xs">alex.brown@example.com</p>
      </div>
    </div>
  );
}
