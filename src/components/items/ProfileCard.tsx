export default function ProfileCard() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
          JD
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">John Doe</h3>
          <p className="text-neutral-400 text-sm">@johndoe</p>
        </div>
      </div>
      <p className="text-neutral-300 text-sm mb-4">
        Full-stack developer passionate about building beautiful UIs and scalable systems.
      </p>
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
          Follow
        </button>
        <button className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
          Message
        </button>
      </div>
    </div>
  );
}
