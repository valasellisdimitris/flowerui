import { useRef, useState } from "react";

export default function OTPInput() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <div className="flex gap-1.5 sm:gap-2 w-full justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-semibold bg-neutral-900 border-2 border-neutral-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors flex-shrink-0"
          />
        ))}
      </div>
      <p className="text-neutral-500 text-xs text-center">Enter verification code</p>
    </div>
  );
}
