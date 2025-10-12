import SEO from "@/components/universal/SEO";
import Header from "@/components/universal/Header";
import Link from "next/link";
import PrimaryButton from "@/components/items/PrimaryButton";
import OutlineButton from "@/components/items/OutlineButton";
import DangerButton from "@/components/items/DangerButton";
import PricingCard from "@/components/items/PricingCard";
import TextInput from "@/components/items/TextInput";
import SearchInput from "@/components/items/SearchInput";
import SuccessBadge from "@/components/items/SuccessBadge";
import ErrorBadge from "@/components/items/ErrorBadge";
import WarningBadge from "@/components/items/WarningBadge";
import Accordion from "@/components/items/Accordion";
import SimpleTable from "@/components/items/SimpleTable";
import Footer from "@/components/universal/Footer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div
      id="HomePage"
      className="flex flex-col w-full min-h-screen m-0 p-0 bg-[#101010]"
    >
      <SEO
        title="FlowerUI - Beautiful React Components for Modern Applications"
        description="Watch your application bloom with FlowerUI. Flawlessly designed React TSX components built with Tailwind CSS and Framer Motion. Copy, paste, and customize 90+ production-ready components to build stunning applications faster."
        keywords="react components, tsx components, tailwind css components, framer motion, ui component library, react ui, nextjs components, free react components, open source ui library, modern ui components"
      />
      <Header />
      <motion.main
        id="main flowerUI"
        className="flex flex-col w-full h-full px-2 sm:px-6 md:px-12 lg:px-[120px] xl:px-[200px] pt-[100px] sm:pt-[140px] md:pt-[180px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <section
          id="hero"
          className="flex flex-col justify-center items-center mb-10"
        >
          <motion.div
            className="text-neutral-100 text-xs sm:text-sm md:text-base bg-neutral-800 duration-200 ease-in-out px-2 sm:px-3 py-1 rounded-full flex flex-row gap-2 items-center mb-3 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-[5px] h-[5px] bg-blue-500 rounded-full" />
            FlowerUI Released!
          </motion.div>
          <motion.h1
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center whitespace-pre-line break-words animate-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="">Watch Your Application Bloom</span>
          </motion.h1>
          <motion.p
            className={` text-neutral-100 text-[14px] sm:text-[16px] mt-4 mb-7 text-center`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Flawlessly designed and built for growth: FlowerUI provides the
            artisan-quality components <br className="hidden sm:block" /> you
            need to easily customize, effortlessly extend, and confidently
            evolve your application.
          </motion.p>
          <motion.div
            id="hero-buttons"
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href={"/docs"}
              className={`text-neutral-900 bg-neutral-50 hover:bg-neutral-100 duration-200 ease-in-out py-2 px-3 rounded-md text-[13px] sm:text-[15px] w-full sm:w-auto text-center`}
            >
              Get Started
            </Link>
            <Link
              href={"/components"}
              className={` text-neutral-50 hover:bg-neutral-800 duration-200 ease-in-out py-2 px-3 rounded-md flex flex-row items-center gap-2 text-[13px] sm:text-[15px] w-full sm:w-auto justify-center`}
            >
              View Components
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>
        </section>

        <motion.section
          id="hero2 flowerUI"
          className="flex flex-col items-center w-full mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Header */}
          <div className="w-full text-center mb-12">
            <motion.h2
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Beautiful Components
            </motion.h2>
            <motion.p
              className="text-neutral-400 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Copy, paste, and customize. Build faster with production-ready components.
            </motion.p>
          </div>

          {/* Component Showcase Grid */}
          <motion.div
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Buttons Demo */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
              <div className="mb-4">
                <h3 className="text-white text-sm font-semibold mb-1">Buttons</h3>
                <p className="text-neutral-500 text-xs">Multiple button variants for every use case</p>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <PrimaryButton />
                <OutlineButton />
                <DangerButton />
              </div>
            </div>

            {/* Input Demo */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
              <div className="mb-4">
                <h3 className="text-white text-sm font-semibold mb-1">Input Fields</h3>
                <p className="text-neutral-500 text-xs">Clean, accessible form inputs</p>
              </div>
              <div className="space-y-4">
                <TextInput />
                <SearchInput />
              </div>
            </div>

            {/* Status Badges */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
              <div className="mb-4">
                <h3 className="text-white text-sm font-semibold mb-1">Status Badges</h3>
                <p className="text-neutral-500 text-xs">Colorful indicators for different states</p>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <SuccessBadge />
                <ErrorBadge />
                <WarningBadge />
              </div>
            </div>

            {/* Accordion */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
              <div className="mb-4">
                <h3 className="text-white text-sm font-semibold mb-1">Accordion</h3>
                <p className="text-neutral-500 text-xs">Expandable content panels</p>
              </div>
              <Accordion />
            </div>

            {/* Pricing Cards - Full Width */}
            <div className="md:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-white text-sm font-semibold mb-1">Pricing Cards</h3>
                <p className="text-neutral-500 text-xs">Beautiful pricing tiers for your SaaS product</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full hover:border-neutral-700 transition-colors">
                  <div className="mb-4">
                    <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-wider">Starter</h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-white text-4xl font-bold">$9</span>
                      <span className="text-neutral-500 text-sm">/month</span>
                    </div>
                  </div>
                  <p className="text-neutral-300 text-sm mb-6">
                    Perfect for individuals and small projects.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      5 projects
                    </li>
                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Basic support
                    </li>
                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      1GB storage
                    </li>
                  </ul>
                  <button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors">
                    Get Started
                  </button>
                </div>

                {/* Pro Plan */}
                <PricingCard />

                {/* Enterprise Plan */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full hover:border-neutral-700 transition-colors">
                  <div className="mb-4">
                    <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-wider">Enterprise</h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-white text-4xl font-bold">$99</span>
                      <span className="text-neutral-500 text-sm">/month</span>
                    </div>
                  </div>
                  <p className="text-neutral-300 text-sm mb-6">
                    For large teams and organizations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited projects
                    </li>
                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 dedicated support
                    </li>
                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited storage
                    </li>
                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom integrations
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>

            {/* Table Demo - Full Width */}
            <div className="md:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-white text-sm font-semibold mb-1">Data Tables</h3>
                <p className="text-neutral-500 text-xs">Display structured data with style</p>
              </div>
              <SimpleTable />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={"/components"}
              className="inline-flex items-center gap-2 text-neutral-50 bg-neutral-800 hover:bg-neutral-700 duration-200 ease-in-out py-3 px-6 rounded-lg text-sm font-medium"
            >
              Browse All Components
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}
