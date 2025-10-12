import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: 1, color: "from-purple-500 to-pink-500" },
  { id: 2, color: "from-blue-500 to-cyan-500" },
  { id: 3, color: "from-green-500 to-emerald-500" },
  { id: 4, color: "from-orange-500 to-red-500" },
];

export default function ImageGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {images.map((img) => (
          <motion.div
            key={img.id}
            layoutId={`image-${img.id}`}
            onClick={() => setSelectedId(img.id)}
            className={`aspect-square bg-gradient-to-br ${img.color} rounded-lg cursor-pointer`}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`image-${selectedId}`}
                className={`w-full max-w-2xl aspect-square bg-gradient-to-br ${
                  images.find((i) => i.id === selectedId)?.color
                } rounded-lg`}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
