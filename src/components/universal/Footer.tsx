import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      id="footer"
      className="w-full h-auto md:h-[70px] flex flex-col md:flex-row items-center justify-between p-4 md:px-[120px] py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div id="footer-left" className="mb-2 md:mb-0">
        <div className="flex flex-row items-center">
          <span className="text-neutral-500 text-sm">© 2025-6 FlowerUI.</span>
        </div>
      </div>
      <div id="footer-right" className="text-center md:text-left">
        <p className="text-neutral-500 text-sm">
          Hand coded by{" "}
          <Link
            href={"https://github.com/valasellisdimitris"}
            target="_blank"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            Dimitris Valasellis
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
