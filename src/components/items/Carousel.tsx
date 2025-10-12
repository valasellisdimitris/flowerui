import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Beautiful Design",
    description: "Crafted with attention to detail",
    bgClass: "bg-neutral-800",
  },
  {
    id: 2,
    title: "Smooth Animations",
    description: "Powered by Framer Motion",
    bgClass: "bg-neutral-850",
  },
  {
    id: 3,
    title: "Easy to Use",
    description: "Copy, paste, and customize",
    bgClass: "bg-neutral-800",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-64 overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 ${slides[currentIndex].bgClass} flex flex-col items-center justify-center p-8 text-center`}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {slides[currentIndex].title}
            </h3>
            <p className="text-white/90">{slides[currentIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-neutral-700 hover:bg-neutral-600 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-neutral-700 hover:bg-neutral-600 text-white p-2 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
