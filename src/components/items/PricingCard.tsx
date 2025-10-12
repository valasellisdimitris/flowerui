export default function PricingCard() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-sm hover:border-blue-500 transition-colors">
      <div className="mb-4">
        <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-wider">Pro</h3>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-white text-4xl font-bold">$29</span>
          <span className="text-neutral-500 text-sm">/month</span>
        </div>
      </div>
      <p className="text-neutral-300 text-sm mb-6">
        Perfect for growing teams and businesses.
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-2 text-neutral-300 text-sm">
          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Unlimited projects
        </li>
        <li className="flex items-start gap-2 text-neutral-300 text-sm">
          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Advanced analytics
        </li>
        <li className="flex items-start gap-2 text-neutral-300 text-sm">
          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Priority support
        </li>
      </ul>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors">
        Get Started
      </button>
    </div>
  );
}
