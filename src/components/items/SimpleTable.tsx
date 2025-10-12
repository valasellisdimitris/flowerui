export default function SimpleTable() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ];

  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="w-full border-collapse min-w-[500px]">
        <thead>
          <tr className="border-b border-neutral-800">
            <th className="text-left text-neutral-400 font-semibold text-xs sm:text-sm py-3 px-2 sm:px-4 whitespace-nowrap">Name</th>
            <th className="text-left text-neutral-400 font-semibold text-xs sm:text-sm py-3 px-2 sm:px-4 whitespace-nowrap">Email</th>
            <th className="text-left text-neutral-400 font-semibold text-xs sm:text-sm py-3 px-2 sm:px-4 whitespace-nowrap">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-neutral-800 hover:bg-neutral-900 transition-colors">
              <td className="text-white text-xs sm:text-sm py-3 px-2 sm:px-4 whitespace-nowrap">{row.name}</td>
              <td className="text-neutral-400 text-xs sm:text-sm py-3 px-2 sm:px-4">{row.email}</td>
              <td className="text-neutral-300 text-xs sm:text-sm py-3 px-2 sm:px-4">
                <span className="bg-neutral-800 px-2 py-1 rounded text-xs whitespace-nowrap">{row.role}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
