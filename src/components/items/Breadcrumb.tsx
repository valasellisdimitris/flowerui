export default function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <button className="text-neutral-400 hover:text-white transition-colors">
        Home
      </button>
      <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <button className="text-neutral-400 hover:text-white transition-colors">
        Products
      </button>
      <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <span className="text-white font-medium">Electronics</span>
    </nav>
  );
}
