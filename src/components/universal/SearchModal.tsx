import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

type SearchResult = {
  id: string;
  name: string;
  category: string;
  description: string;
};

const allComponents: SearchResult[] = [
  { id: "primary-button", name: "Primary Button", category: "Buttons", description: "Main call-to-action button" },
  { id: "secondary-button", name: "Secondary Button", category: "Buttons", description: "Alternative action button" },
  { id: "outline-button", name: "Outline Button", category: "Buttons", description: "Border styled button" },
  { id: "ghost-button", name: "Ghost Button", category: "Buttons", description: "Minimal transparent button" },
  { id: "danger-button", name: "Danger Button", category: "Buttons", description: "Destructive action button" },
  { id: "success-button", name: "Success Button", category: "Buttons", description: "Positive action button" },
  { id: "icon-button", name: "Icon Button", category: "Buttons", description: "Compact icon-only button" },
  { id: "loading-button", name: "Loading Button", category: "Buttons", description: "Button with loading state" },
  { id: "link-button", name: "Link Button", category: "Buttons", description: "Text-style link button" },
  { id: "carousel", name: "Carousel", category: "Interactive", description: "Image slider" },
  { id: "rating", name: "Rating", category: "Interactive", description: "Star rating component" },
  { id: "tag", name: "Tag/Chip", category: "Interactive", description: "Removable tags" },
  { id: "popover", name: "Popover", category: "Interactive", description: "Floating content panel" },
  { id: "drawer", name: "Drawer", category: "Interactive", description: "Slide-out sidebar" },
  { id: "text-input", name: "Text Input", category: "Inputs", description: "Standard text field" },
  { id: "search-input", name: "Search Input", category: "Inputs", description: "Search field with icon" },
  { id: "password-input", name: "Password Input", category: "Inputs", description: "Secure password field" },
  { id: "textarea-input", name: "Textarea Input", category: "Inputs", description: "Multi-line text input" },
  { id: "select-dropdown", name: "Select Dropdown", category: "Inputs", description: "Dropdown selection menu" },
  { id: "checkbox-input", name: "Checkbox Input", category: "Inputs", description: "Checkbox for selection" },
  { id: "multi-select", name: "Multi-Select", category: "Inputs", description: "Multiple selection dropdown" },
  { id: "combobox", name: "Combobox", category: "Inputs", description: "Searchable autocomplete" },
  { id: "otp-input", name: "OTP Input", category: "Inputs", description: "Verification code input" },
  { id: "color-picker", name: "Color Picker", category: "Inputs", description: "Color selection palette" },
  { id: "file-upload", name: "File Upload", category: "Inputs", description: "Drag-and-drop uploader" },
  { id: "range-slider", name: "Range Slider", category: "Inputs", description: "Numeric value slider" },
  { id: "slider", name: "Slider", category: "Inputs", description: "Custom styled slider" },
  { id: "date-picker", name: "Date Picker", category: "Inputs", description: "Date selection input" },
  { id: "radio-group", name: "Radio Group", category: "Inputs", description: "Single selection group" },
  { id: "switch-group", name: "Switch Group", category: "Inputs", description: "Multiple toggle switches" },
  { id: "profile-card", name: "Profile Card", category: "Cards", description: "User profile display" },
  { id: "product-card", name: "Product Card", category: "Cards", description: "E-commerce product card" },
  { id: "notification-card", name: "Notification Card", category: "Cards", description: "Alert notification card" },
  { id: "stats-card", name: "Stats Card", category: "Cards", description: "Dashboard statistics" },
  { id: "image-card", name: "Image Card", category: "Cards", description: "Media card with caption" },
  { id: "pricing-card", name: "Pricing Card", category: "Cards", description: "Pricing tier card" },
  { id: "blog-card", name: "Blog Card", category: "Cards", description: "Blog post preview" },
  { id: "feature-card", name: "Feature Card", category: "Cards", description: "Feature highlight" },
  { id: "code-block", name: "Code Block", category: "Data Display", description: "Code with copy button" },
  { id: "tree-view", name: "Tree View", category: "Data Display", description: "Hierarchical structure" },
  { id: "kanban-card", name: "Kanban Card", category: "Data Display", description: "Task board card" },
  { id: "metric-card", name: "Metric Card", category: "Data Display", description: "KPI metric card" },
  { id: "comparison-table", name: "Comparison Table", category: "Data Display", description: "Feature comparison" },
  { id: "image-gallery", name: "Image Gallery", category: "Data Display", description: "Lightbox gallery" },
  { id: "chat-bubble", name: "Chat Bubble", category: "Data Display", description: "Message bubbles" },
  { id: "simple-table", name: "Simple Table", category: "Data Display", description: "Data table" },
  { id: "accordion", name: "Accordion", category: "Data Display", description: "Expandable panels" },
  { id: "timeline", name: "Timeline", category: "Data Display", description: "Vertical timeline" },
  { id: "empty-state", name: "Empty State", category: "Data Display", description: "No data placeholder" },
  { id: "success-badge", name: "Success Badge", category: "Status", description: "Success indicator" },
  { id: "error-badge", name: "Error Badge", category: "Status", description: "Error indicator" },
  { id: "warning-badge", name: "Warning Badge", category: "Status", description: "Warning indicator" },
  { id: "info-badge", name: "Info Badge", category: "Status", description: "Info indicator" },
  { id: "progress-bar", name: "Progress Bar", category: "Status", description: "Progress indicator" },
  { id: "spinner-loader", name: "Spinner Loader", category: "Status", description: "Loading spinner" },
  { id: "toast", name: "Toast Notification", category: "Feedback", description: "Temporary message" },
  { id: "alert-dialog", name: "Alert Dialog", category: "Feedback", description: "Confirmation dialog" },
  { id: "skeleton", name: "Skeleton Loader", category: "Feedback", description: "Loading placeholder" },
  { id: "skeleton-list", name: "Skeleton List", category: "Feedback", description: "List placeholder" },
  { id: "confirmation-prompt", name: "Confirmation Prompt", category: "Feedback", description: "Inline confirmation" },
  { id: "faq-item", name: "FAQ Accordion", category: "Feedback", description: "Collapsible FAQ" },
  { id: "breadcrumb", name: "Breadcrumb", category: "Navigation", description: "Navigation trail" },
  { id: "pagination", name: "Pagination", category: "Navigation", description: "Page navigation" },
  { id: "stepper", name: "Stepper", category: "Navigation", description: "Multi-step indicator" },
  { id: "bottom-navigation", name: "Bottom Navigation", category: "Navigation", description: "Mobile nav bar" },
  { id: "mega-menu", name: "Mega Menu", category: "Navigation", description: "Multi-column dropdown" },
  { id: "context-menu", name: "Context Menu", category: "Navigation", description: "Right-click menu" },
  { id: "divider-horizontal", name: "Divider", category: "Utility", description: "Content separator" },
  { id: "tooltip-component", name: "Tooltip", category: "Utility", description: "Hover information" },
  { id: "modal-dialog", name: "Modal Dialog", category: "Utility", description: "Popup modal" },
  { id: "tabs-component", name: "Tabs", category: "Utility", description: "Tabbed navigation" },
  { id: "avatar-component", name: "Avatar", category: "Utility", description: "User avatar" },
  { id: "toggle-switch", name: "Toggle Switch", category: "Utility", description: "On/off switch" },
  { id: "dropdown", name: "Dropdown", category: "Utility", description: "Custom dropdown menu" },
  { id: "fab", name: "Floating Action Button", category: "Utility", description: "Floating button" },
  { id: "notification-bell", name: "Notification Bell", category: "Utility", description: "Notification icon" },
  { id: "user-menu", name: "User Menu", category: "Utility", description: "Avatar dropdown" },
  { id: "copy-button", name: "Copy Button", category: "Utility", description: "Copy to clipboard" },
  { id: "share-button", name: "Share Button", category: "Utility", description: "Social sharing" },
  { id: "keyboard-shortcut", name: "Keyboard Shortcut", category: "Utility", description: "Key combinations" },
  { id: "command-palette", name: "Command Palette", category: "Advanced", description: "Command search" },
];

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const filteredResults = query.trim()
    ? allComponents.filter(
        (component) =>
          component.name.toLowerCase().includes(query.toLowerCase()) ||
          component.category.toLowerCase().includes(query.toLowerCase()) ||
          component.description.toLowerCase().includes(query.toLowerCase())
      )
    : allComponents.slice(0, 8);

  const handleSelect = useCallback((component: SearchResult) => {
    router.push(`/components?component=${component.id}`);
    onClose();
  }, [router, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredResults.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
      } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
        e.preventDefault();
        handleSelect(filteredResults[selectedIndex]);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose, handleSelect]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-neutral-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components..."
                  autoFocus
                  className="flex-1 bg-transparent text-white placeholder-neutral-500 outline-none text-base"
                />
                <button
                  onClick={onClose}
                  className="p-1.5 hover:bg-neutral-800 rounded-lg transition-colors"
                  aria-label="Close search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-neutral-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {filteredResults.length > 0 ? (
                  <div className="p-2">
                    {filteredResults.map((result, index) => (
                      <button
                        key={result.id}
                        onClick={() => handleSelect(result)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-start gap-3 px-3 py-3 rounded-lg transition-colors text-left ${
                          index === selectedIndex
                            ? "bg-blue-500/10 border border-blue-500/30"
                            : "hover:bg-neutral-800 border border-transparent"
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-white font-medium text-sm">{result.name}</h4>
                            <span className="text-neutral-500 text-xs px-2 py-0.5 bg-neutral-800 rounded">
                              {result.category}
                            </span>
                          </div>
                          <p className="text-neutral-400 text-xs mt-0.5 line-clamp-1">
                            {result.description}
                          </p>
                        </div>
                        {index === selectedIndex && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-500 flex-shrink-0 mt-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-neutral-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </div>
                    <p className="text-neutral-400 text-sm">No components found</p>
                    <p className="text-neutral-600 text-xs mt-1">Try a different search term</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2 bg-neutral-950 border-t border-neutral-800 text-xs text-neutral-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded border border-neutral-700">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded border border-neutral-700">↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded border border-neutral-700">↵</kbd>
                    Select
                  </span>
                </div>
                <span>{filteredResults.length} results</span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
