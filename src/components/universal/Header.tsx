import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchModal from "./SearchModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
    <header
      id="Header"
      className="w-full fixed top-0 h-[80px] sm:h-[100px] md:h-[120px] px-4 sm:px-8 md:px-[30px] flex items-center justify-between bg-[#101010] border-b-[1px] border-b-neutral-900 z-50"
    >
      {/* Left Section */}
      <div
        id="header-left"
        className="flex flex-row gap-6 sm:gap-12 md:gap-20 items-center"
      >
        {/* Note: Replaced Next/Image with regular img for compatibility in this environment, 
            but kept the structure for Next.js users. Using placeholder URLs here. */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-flower.png"
            alt="Logo Flower FlowerUI"
            width={30}
            height={30}
          />
          <span className=" text-white text-xl font-bold">FlowerUI</span>
        </Link>
        {/* Desktop Navigation */}
        <nav id="header-navigation" className="hidden lg:block">
          <ul className="flex flex-row gap-3 items-center list-none">
            <li>
              <Link
                href="/"
                className={`text-white hover:text-neutral-200 duration-200 ease-in-out text-[17px] hover:bg-neutral-800 px-3 py-2 rounded-md`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/components"
                className={` text-white hover:text-neutral-200 duration-200 ease-in-out text-[17px] hover:bg-neutral-800 px-3 py-2 rounded-md`}
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className={` text-white hover:text-neutral-200 duration-200 ease-in-out text-[17px] hover:bg-neutral-800 px-3 py-2 rounded-md`}
              >
                Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger for mobile/tablet */}
      <div className="lg:hidden flex items-center z-50">
        <button
          aria-label="Open menu"
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Right Section (desktop only) - Adjusted max-width and search button width */}
      <div
        id="header-right"
        className="hidden lg:flex flex-row items-center gap-4 max-w-full"
      >
        {/* Search Button */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="hidden lg:inline">Search</span>
        </button>
        
        <Link
          href="https://github.com/valasellisdimitris"
          target="_blank"
          className="flex flex-row gap-2 items-center hover:opacity-80 transition duration-200"
        >
          <Image
            src="/github-icon.png"
            alt="Github Logo"
            width={20}
            height={20}
            className="invert"
          />
          <span className="text-white">Github</span>
        </Link>
      </div>

      {/* Mobile/Tablet Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#101010] bg-opacity-95 z-[999] flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              aria-label="Close menu"
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-neutral-800 transition duration-200"
              onClick={() => setMenuOpen(false)}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
            <nav>
              <motion.ul
                className="flex flex-col gap-5 items-center text-white text-text-base"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.15,
                    },
                  },
                }}
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setSearchOpen(true);
                    }}
                    className="flex items-center gap-2 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <span>Search</span>
                  </button>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-neutral-300 transition duration-150 text-lg px-6 py-3 rounded-lg hover:bg-neutral-800"
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href="/components"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-neutral-300 transition duration-150 text-base px-4 py-2 rounded-lg hover:bg-neutral-800"
                  >
                    Components
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href="/docs"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-neutral-300 transition duration-150 text-base px-4 py-2 rounded-lg hover:bg-neutral-800"
                  >
                    Docs
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href="https://github.com/valasellisdimitris"
                    target="_blank"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-neutral-300 transition duration-150 text-base px-4 py-2 rounded-lg hover:bg-neutral-800"
                  >
                    Github
                  </Link>
                </motion.li>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    
    <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
