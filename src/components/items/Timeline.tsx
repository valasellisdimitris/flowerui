export default function Timeline() {
  const events = [
    { date: "Jan 2024", title: "Project Started", description: "Initial planning and design phase" },
    { date: "Feb 2024", title: "Development", description: "Core features implementation" },
    { date: "Mar 2024", title: "Beta Launch", description: "Released to early adopters" },
  ];

  return (
    <div className="w-full max-w-2xl">
      {events.map((event, index) => (
        <div key={index} className="flex gap-4 pb-8 last:pb-0">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            {index !== events.length - 1 && (
              <div className="w-0.5 h-full bg-neutral-800 mt-2"></div>
            )}
          </div>
          <div className="flex-1 pb-4">
            <div className="text-neutral-500 text-xs mb-1">{event.date}</div>
            <h3 className="text-white font-semibold text-sm mb-1">{event.title}</h3>
            <p className="text-neutral-400 text-sm">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
