import { useState } from "react";
import { motion } from "framer-motion";

export default function Rating() {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={star <= (hover || rating) ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8 transition-colors ${
                star <= (hover || rating) ? "text-yellow-500" : "text-neutral-600"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </motion.button>
        ))}
      </div>
      <span className="text-neutral-400 text-sm">{rating} out of 5</span>
    </div>
  );
}
