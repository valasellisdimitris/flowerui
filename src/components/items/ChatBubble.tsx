export default function ChatBubble() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      {/* Received Message */}
      <div className="flex items-end gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex-shrink-0" />
        <div className="bg-neutral-800 text-neutral-300 px-4 py-2 rounded-2xl rounded-bl-none max-w-[70%]">
          <p className="text-sm">Hey! How are you doing?</p>
          <span className="text-xs text-neutral-500 mt-1">10:30 AM</span>
        </div>
      </div>

      {/* Sent Message */}
      <div className="flex items-end gap-2 justify-end">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-none max-w-[70%]">
          <p className="text-sm">I&apos;m doing great! Thanks for asking 😊</p>
          <span className="text-xs text-blue-200 mt-1">10:32 AM</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0" />
      </div>
    </div>
  );
}
