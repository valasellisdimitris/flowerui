import { useToast } from "./ToastProvider";

export default function Toast() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => toast("Success!", "Your changes have been saved", "success")}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Success Toast
      </button>
      
      <button
        onClick={() => toast("Error occurred", "Please try again later", "error")}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Error Toast
      </button>
      
      <button
        onClick={() => toast("Warning", "This action cannot be undone", "warning")}
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Warning Toast
      </button>
      
      <button
        onClick={() => toast("Info", "New update available", "info")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Info Toast
      </button>
    </div>
  );
}
