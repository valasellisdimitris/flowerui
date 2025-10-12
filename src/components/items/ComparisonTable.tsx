export default function ComparisonTable() {
  return (
    <div className="w-full max-w-4xl overflow-x-auto rounded-lg">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-neutral-800">
            <th className="p-2 sm:p-4 text-left text-neutral-400 text-xs sm:text-sm font-medium whitespace-nowrap">Feature</th>
            <th className="p-2 sm:p-4 text-center text-neutral-400 text-xs sm:text-sm font-medium whitespace-nowrap">Free</th>
            <th className="p-2 sm:p-4 text-center text-neutral-400 text-xs sm:text-sm font-medium whitespace-nowrap">Pro</th>
            <th className="p-2 sm:p-4 text-center text-neutral-400 text-xs sm:text-sm font-medium whitespace-nowrap">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {[
            { feature: "Projects", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
            { feature: "Team Members", free: "1", pro: "10", enterprise: "Unlimited" },
            { feature: "Storage", free: "1GB", pro: "100GB", enterprise: "Unlimited" },
            { feature: "Support", free: "❌", pro: "✅", enterprise: "✅" },
            { feature: "API Access", free: "❌", pro: "✅", enterprise: "✅" },
          ].map((row, idx) => (
            <tr key={idx} className="border-b border-neutral-800 hover:bg-neutral-900/50">
              <td className="p-2 sm:p-4 text-neutral-300 text-xs sm:text-sm whitespace-nowrap">{row.feature}</td>
              <td className="p-2 sm:p-4 text-center text-neutral-400 text-xs sm:text-sm">{row.free}</td>
              <td className="p-2 sm:p-4 text-center text-neutral-300 text-xs sm:text-sm font-medium">{row.pro}</td>
              <td className="p-2 sm:p-4 text-center text-blue-400 text-xs sm:text-sm font-medium">{row.enterprise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
