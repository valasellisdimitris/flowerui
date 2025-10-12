export default function LoadingProcessing() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm p-6 border border-dashed border-neutral-800 rounded-xl bg-transparent text-center">
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full w-8 h-8 border-2 border-neutral-700 border-t-blue-500" />
        </div>

        <h3 className="text-base font-medium text-neutral-100 mb-2">
          Processing your request
        </h3>
        <p className="text-xs text-neutral-300 mb-4">
          Do NOT close or refresh the page.
        </p>

        <div className="flex justify-center">
          <button className="text-sm bg-neutral-800 text-neutral-100 border border-neutral-700 px-3 py-1 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
