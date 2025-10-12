import { useState } from "react";

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Account", "Profile", "Preferences", "Complete"];

  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center relative z-10">
              <div
                className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold mb-2
                  ${
                    index + 1 <= currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-neutral-800 text-neutral-500"
                  }
                `}
              >
                {index + 1}
              </div>
              <span
                className={`text-[10px] sm:text-xs text-center whitespace-nowrap ${
                  index + 1 <= currentStep ? "text-white" : "text-neutral-500"
                }`}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 -mx-4 sm:-mx-0 relative">
                <div
                  className={`absolute inset-0 h-0.5 ${
                    index + 1 < currentStep ? "bg-blue-600" : "bg-neutral-800"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
          disabled={currentStep === steps.length}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
