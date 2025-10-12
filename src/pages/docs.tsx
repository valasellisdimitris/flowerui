import { useState, useEffect } from "react";
import SEO from "@/components/universal/SEO";
import Link from "next/link";
import Header from "@/components/universal/Header";
import { motion, AnimatePresence } from "framer-motion";
import FAQItem from "@/components/items/FAQItem";

type DocSection = {
  id: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

const docSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    category: "Introduction",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-4">Getting Started</h2>
        <p className="text-neutral-300 leading-relaxed text-lg">
          FlowerUI is a collection of beautifully designed React TSX components that you can copy and paste into your applications. Built with Tailwind CSS, React, and Framer Motion, these components are production-ready and fully customizable.
        </p>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <p className="text-blue-300 text-sm">
            <strong>Note:</strong> FlowerUI is not an npm package. Components are designed to be copied directly from GitHub into your project, giving you full control and ownership of the code.
          </p>
        </div>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <p className="text-green-300 text-sm">
            <strong>How it works:</strong> Browse components on this site → Go to GitHub → Copy source code → Paste into your project. Only dependency: Framer Motion.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "installation",
    title: "Installation",
    category: "Introduction",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-4">Installation</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Prerequisites</h3>
          <p className="text-neutral-300 leading-relaxed">
            Before using FlowerUI components, ensure your project has the following dependencies:
          </p>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 space-y-3">
            <div>
              <h4 className="text-white font-medium mb-2">Required Dependencies:</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
                <li>Next.js (13+)</li>
                <li>React (18+)</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <p className="text-amber-300 text-sm">
              <strong>Important:</strong> FlowerUI components use <strong>Framer Motion</strong> for animations. Install it with: <code className="bg-neutral-800 px-2 py-1 rounded">npm install framer-motion</code>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">How to Get Components</h3>
          <p className="text-neutral-300 leading-relaxed">
            FlowerUI is a copy-and-paste component library. To use a component, you need to copy its source code from GitHub and paste it into your project.
          </p>
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-300 text-sm">
              <strong>Quick Tip:</strong> Browse our <Link href="/components" className="text-blue-400 hover:text-blue-300 underline">Components page</Link> to preview all components, then grab the source code from GitHub.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-white pt-2">Step-by-Step Guide</h4>
          <ol className="list-decimal list-inside space-y-3 text-neutral-300">
            <li>
              Visit the GitHub repository: <a href="https://github.com/valasellisdimitris/flowerui" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">github.com/valasellisdimitris/flowerui</a>
            </li>
            <li>Navigate to the <code className="text-sm bg-neutral-800 px-2 py-1 rounded">src/components</code> folder</li>
            <li>Find the component file you want (e.g., <code className="text-sm bg-neutral-800 px-2 py-1 rounded">PrimaryButton.tsx</code>)</li>
            <li>Copy the entire source code from that file</li>
            <li>Create a new file in your project&apos;s components folder with the same name</li>
            <li>Paste the copied code into your new file</li>
            <li>Import and use the component in your application</li>
          </ol>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
            <p className="text-amber-300 text-sm">
              <strong>Note:</strong> The Components page on this site shows previews and usage examples only. You must visit GitHub or download the component files directly to get the actual source code.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "usage",
    title: "Usage",
    category: "Setup",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-4">Usage</h2>
        <p className="text-neutral-300 leading-relaxed">
          Once you&apos;ve copied a component into your project, you can import and use it like any other React component.
        </p>
        
        <h3 className="text-xl font-semibold text-white">Basic Example</h3>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <code className="text-sm text-neutral-300">
            import PrimaryButton from &quot;@/components/items/PrimaryButton&quot;;<br />
            <br />
            export default function App() {"{"}<br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;PrimaryButton /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}
          </code>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6">Requirements</h3>
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          <li>React 18 or higher</li>
          <li>Tailwind CSS configured in your project</li>
          <li>TypeScript (recommended)</li>
        </ul>
      </div>
    ),
  },
  {
    id: "setup-requirements",
    title: "Setup Requirements",
    category: "Setup",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-4">Setup Requirements</h2>
        
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <p className="text-green-300 text-sm">
            <strong>Good news!</strong> 99% of FlowerUI components are completely standalone and ready to use immediately.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-white">Copy & Paste Ready (90+ Components)</h3>
        <p className="text-neutral-300 leading-relaxed">
          Most components work right out of the box. Simply copy the code and import it:
        </p>
        
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <code className="text-sm text-neutral-300">
            import PrimaryButton from &quot;@/components/items/PrimaryButton&quot;;<br />
            import Carousel from &quot;@/components/items/Carousel&quot;;<br />
            import Rating from &quot;@/components/items/Rating&quot;;<br />
            <br />
            {"// Use them directly - no setup needed!"}<br />
            &lt;PrimaryButton /&gt;
          </code>
        </div>

        <p className="text-neutral-400 text-sm">
          ✅ Includes: All Buttons, Cards, Inputs, Navigation, Data Display, Badges, Modals, Tabs, and more!
        </p>

        <h3 className="text-xl font-semibold text-white mt-8">Toast Component (Requires Provider)</h3>
        <p className="text-neutral-300 leading-relaxed">
          Only the <strong>Toast Notification</strong> component requires a one-time setup with a provider wrapper.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-2 text-sm">Step 1: Copy ToastProvider.tsx</h4>
            <p className="text-neutral-400 text-sm mb-2">
              Copy both <code className="bg-neutral-800 px-2 py-0.5 rounded">Toast.tsx</code> and <code className="bg-neutral-800 px-2 py-0.5 rounded">ToastProvider.tsx</code> to your components folder.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2 text-sm">Step 2: Wrap your app</h4>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <code className="text-sm text-neutral-300">
                {`// In _app.tsx or layout.tsx`}<br />
                import {"{"} ToastProvider {"}"} from &quot;@/components/items/ToastProvider&quot;;<br />
                <br />
                export default function App({"{"} Component, pageProps {"}"}) {"{"}<br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;ToastProvider&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Component {"{...pageProps}"} /&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ToastProvider&gt;<br />
                &nbsp;&nbsp;);<br />
                {"}"}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2 text-sm">Step 3: Use anywhere in your app</h4>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <code className="text-sm text-neutral-300">
                import {"{"} useToast {"}"} from &quot;@/components/items/ToastProvider&quot;;<br />
                <br />
                function MyComponent() {"{"}<br />
                &nbsp;&nbsp;const {"{"} toast {"}"} = useToast();<br />
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}{`() => toast("Success!", "Saved", "success")`}{"}"}&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
                &nbsp;&nbsp;);<br />
                {"}"}
              </code>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
          <p className="text-blue-300 text-sm">
            <strong>That&apos;s it!</strong> All other components work without any provider or context setup.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "theming",
    title: "Theming & Styling",
    category: "Customization",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-4">Theming & Styling</h2>
        <p className="text-neutral-300 leading-relaxed">
          FlowerUI components are built with Tailwind CSS, making customization simple and straightforward. Since you own the code, you can modify any component to match your brand and design system.
        </p>

        <h3 className="text-xl font-semibold text-white">Customizing Components</h3>
        <p className="text-neutral-300 leading-relaxed">
          Simply edit the Tailwind classes in the component file to change colors, spacing, borders, and more.
        </p>
        
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <code className="text-sm text-neutral-300">
            {`// Before`}<br />
            className=&quot;bg-blue-600 text-white&quot;<br />
            <br />
            {`// After - Change to your brand colors`}<br />
            className=&quot;bg-purple-600 text-white&quot;
          </code>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6">Global Theme Colors</h3>
        <p className="text-neutral-300 leading-relaxed">
          You can extend your Tailwind config to add custom colors that work across all components:
        </p>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <code className="text-sm text-neutral-300">
            {`// tailwind.config.js`}<br />
            module.exports = {"{"}<br />
            &nbsp;&nbsp;theme: {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;extend: {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primary: &apos;#your-color&apos;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;secondary: &apos;#your-color&apos;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"},"}<br />
            &nbsp;&nbsp;{"},"}<br />
            {"}"}
          </code>
        </div>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    category: "Help",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <FAQItem
            question="How do I use FlowerUI components?"
            answer="Visit the GitHub repository (github.com/valasellisdimitris/flowerui), navigate to src/components, copy the full source code of the component you want, paste it into your project's components folder, and import it. The Components page on this site is for previewing only - you need to get the actual code from GitHub."
            defaultOpen={true}
          />

          <FAQItem
            question="Do I need to install anything?"
            answer="No npm package installation for FlowerUI! Just copy-paste the components. However, you need React, Tailwind CSS, and Framer Motion (npm install framer-motion) as dependencies in your project."
          />

          <FAQItem
            question="Can I modify the components?"
            answer="Absolutely! That's the whole point. Once you copy a component, you own it completely. Modify the styling, add features, or adapt it to your needs."
          />

          <FAQItem
            question="How do I change the colors?"
            answer="All styling is done with Tailwind CSS classes. Simply edit the className attributes in the component file to change colors, spacing, and other styles."
          />

          <FAQItem
            question="Are the components accessible?"
            answer="We strive to make components accessible, but since you own the code, you're responsible for ensuring they meet your accessibility requirements."
          />

          <FAQItem
            question="Can I use this in a commercial project?"
            answer="Yes! FlowerUI is open source and free to use in any project, commercial or personal."
          />

          <FAQItem
            question="Where can I get the GitHub repository?"
            answer={
              <>
                Visit our GitHub repository to browse all components and their source code:{" "}
                <a 
                  href="https://github.com/valasellisdimitris/flowerui" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  github.com/valasellisdimitris/flowerui
                </a>
              </>
            }
          />
        </div>
      </div>
    ),
  },
];

export default function DocsPage() {
  const [selectedSection, setSelectedSection] = useState<DocSection>(docSections[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle URL hash for direct section selection
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove '#'
      if (hash) {
        const section = docSections.find((s) => s.id === hash);
        if (section) {
          setSelectedSection(section);
        }
      }
    };

    // Check hash on mount
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const categories = Array.from(new Set(docSections.map((s) => s.category)));

  return (
    <div
      id="DocsPage"
      className="flex flex-col w-full min-h-screen m-0 p-0 bg-[#101010]"
    >
      <SEO
        title="FlowerUI Documentation - Complete Setup & Installation Guide"
        description="Learn how to install and use FlowerUI components in your React and Next.js projects. Complete documentation for 90+ beautiful, production-ready components built with Tailwind CSS and Framer Motion. Step-by-step guides, FAQs, and best practices."
        keywords="flowerui documentation, react component docs, tsx component guide, tailwind css tutorial, framer motion components, react setup guide, nextjs components installation, ui library docs"
        type="article"
      />
      <Header />
      <div className="flex flex-col lg:flex-row w-full pt-[80px] sm:pt-[100px]">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-neutral-50 text-neutral-900 p-3 rounded-full shadow-lg hover:bg-neutral-200 duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Scrollable Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-[80px] sm:top-[100px] left-0
            w-[280px] bg-neutral-900 border-r border-neutral-800
            transition-transform duration-300 ease-in-out z-40
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)]
            overflow-y-auto
          `}
        >
          <div className="p-4 sm:p-6">
            <h2 className="text-white text-lg font-bold mb-6">Documentation</h2>

            {categories.map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  {category}
                </h3>
                <div className="flex flex-col gap-1">
                  {docSections
                    .filter((s) => s.category === category)
                    .map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setSelectedSection(section);
                          window.location.hash = section.id;
                          setSidebarOpen(false);
                        }}
                        className={`
                          text-left px-3 py-2 rounded-md text-sm transition-colors duration-200
                          ${
                            selectedSection.id === section.id
                              ? "bg-neutral-800 text-white font-medium"
                              : "text-neutral-300 hover:bg-neutral-800/50 hover:text-white"
                          }
                        `}
                      >
                        {section.title}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] overflow-y-auto">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSection.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Breadcrumb */}
                <div className="mb-6">
                  <div className="text-neutral-500 text-sm flex items-center gap-2">
                    <span>Docs</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="text-neutral-400">{selectedSection.category}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="text-white">{selectedSection.title}</span>
                  </div>
                </div>

                {/* Content */}
                <article className="prose prose-invert max-w-none">
                  {selectedSection.content}
                </article>

                {/* Navigation Footer */}
                <div className="mt-12 pt-6 border-t border-neutral-800 flex justify-between items-center">
              <button
                onClick={() => {
                  const currentIndex = docSections.findIndex(s => s.id === selectedSection.id);
                  if (currentIndex > 0) {
                    setSelectedSection(docSections[currentIndex - 1]);
                    window.location.hash = docSections[currentIndex - 1].id;
                  }
                }}
                disabled={docSections.findIndex(s => s.id === selectedSection.id) === 0}
                className="text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                Previous
              </button>
              <button
                onClick={() => {
                  const currentIndex = docSections.findIndex(s => s.id === selectedSection.id);
                  if (currentIndex < docSections.length - 1) {
                    setSelectedSection(docSections[currentIndex + 1]);
                    window.location.hash = docSections[currentIndex + 1].id;
                  }
                }}
                disabled={docSections.findIndex(s => s.id === selectedSection.id) === docSections.length - 1}
                className="text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm transition-colors"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
