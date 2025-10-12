import { useState } from "react";

export default function FileUpload() {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="w-full max-w-md">
      <label className="block text-neutral-300 text-sm font-medium mb-2">
        Upload File
      </label>
      <div className="relative">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="
            w-full
            bg-neutral-900
            border-2
            border-dashed
            border-neutral-800
            hover:border-blue-500
            text-neutral-400
            rounded-lg
            px-4
            py-8
            text-sm
            cursor-pointer
            transition-colors
            flex
            flex-col
            items-center
            gap-2
          "
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          {fileName ? (
            <span className="text-white">{fileName}</span>
          ) : (
            <>
              <span className="text-white font-medium">Click to upload</span>
              <span className="text-neutral-500 text-xs">or drag and drop</span>
            </>
          )}
        </label>
      </div>
    </div>
  );
}
