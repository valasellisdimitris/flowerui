import { useState, useEffect } from "react";
import SEO from "@/components/universal/SEO";
import Header from "@/components/universal/Header";
import { motion, AnimatePresence } from "framer-motion";

// Button Components
import PrimaryButton from "@/components/items/PrimaryButton";
import SecondaryButton from "@/components/items/SecondaryButton";
import OutlineButton from "@/components/items/OutlineButton";
import GhostButton from "@/components/items/GhostButton";
import DangerButton from "@/components/items/DangerButton";
import SuccessButton from "@/components/items/SuccessButton";
import IconButton from "@/components/items/IconButton";
import LoadingButton from "@/components/items/LoadingButton";

// Card Components
import ProfileCard from "@/components/items/ProfileCard";
import ProductCard from "@/components/items/ProductCard";
import NotificationCard from "@/components/items/NotificationCard";
import StatsCard from "@/components/items/StatsCard";
import ImageCard from "@/components/items/ImageCard";

// Input Components
import TextInput from "@/components/items/TextInput";
import SearchInput from "@/components/items/SearchInput";
import PasswordInput from "@/components/items/PasswordInput";
import TextareaInput from "@/components/items/TextareaInput";
import SelectDropdown from "@/components/items/SelectDropdown";
import CheckboxInput from "@/components/items/CheckboxInput";

// Status Components
import SuccessBadge from "@/components/items/SuccessBadge";
import ErrorBadge from "@/components/items/ErrorBadge";
import WarningBadge from "@/components/items/WarningBadge";
import InfoBadge from "@/components/items/InfoBadge";
import ProgressBar from "@/components/items/ProgressBar";
import SpinnerLoader from "@/components/items/SpinnerLoader";

// Utility Components
import DividerHorizontal from "@/components/items/DividerHorizontal";
import TooltipComponent from "@/components/items/TooltipComponent";
import ModalDialog from "@/components/items/ModalDialog";
import TabsComponent from "@/components/items/TabsComponent";
import AvatarComponent from "@/components/items/AvatarComponent";
import ToggleSwitch from "@/components/items/ToggleSwitch";

// New Components
import LinkButton from "@/components/items/LinkButton";
import PricingCard from "@/components/items/PricingCard";
import BlogCard from "@/components/items/BlogCard";
import FeatureCard from "@/components/items/FeatureCard";
import FileUpload from "@/components/items/FileUpload";
import RangeSlider from "@/components/items/RangeSlider";
import DatePicker from "@/components/items/DatePicker";
import Breadcrumb from "@/components/items/Breadcrumb";
import Pagination from "@/components/items/Pagination";
import SimpleTable from "@/components/items/SimpleTable";
import Accordion from "@/components/items/Accordion";
import Timeline from "@/components/items/Timeline";
import Toast from "@/components/items/Toast";
import Skeleton from "@/components/items/Skeleton";
import EmptyState from "@/components/items/EmptyState";
import Dropdown from "@/components/items/Dropdown";
import AlertDialog from "@/components/items/AlertDialog";
import RadioGroup from "@/components/items/RadioGroup";
import Stepper from "@/components/items/Stepper";
import CommandPalette from "@/components/items/CommandPalette";

// New Advanced Components
import Carousel from "@/components/items/Carousel";
import Rating from "@/components/items/Rating";
import Tag from "@/components/items/Tag";
import Popover from "@/components/items/Popover";
import Drawer from "@/components/items/Drawer";
import MultiSelect from "@/components/items/MultiSelect";
import Combobox from "@/components/items/Combobox";
import OTPInput from "@/components/items/OTPInput";
import ColorPicker from "@/components/items/ColorPicker";
import CodeBlock from "@/components/items/CodeBlock";
import TreeView from "@/components/items/TreeView";
import KanbanCard from "@/components/items/KanbanCard";
import MetricCard from "@/components/items/MetricCard";
import ComparisonTable from "@/components/items/ComparisonTable";
import ImageGallery from "@/components/items/ImageGallery";
import BottomNavigation from "@/components/items/BottomNavigation";
import FAB from "@/components/items/FAB";
import NotificationBell from "@/components/items/NotificationBell";
import UserMenu from "@/components/items/UserMenu";
import ChatBubble from "@/components/items/ChatBubble";
import CopyButton from "@/components/items/CopyButton";
import ShareButton from "@/components/items/ShareButton";
import KeyboardShortcut from "@/components/items/KeyboardShortcut";
import ContextMenu from "@/components/items/ContextMenu";
import MegaMenu from "@/components/items/MegaMenu";
import SwitchGroup from "@/components/items/SwitchGroup";
import ConfirmationPrompt from "@/components/items/ConfirmationPrompt";
import SkeletonList from "@/components/items/SkeletonList";
import FAQItem from "@/components/items/FAQItem";
import Slider from "@/components/items/Slider";

type ComponentItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  component: React.ReactNode;
  code: string;
};

const components: ComponentItem[] = [
  // Buttons
  {
    id: "primary-button",
    name: "Primary Button",
    category: "Buttons",
    description: "Main call-to-action button with prominent styling. Use for primary actions like 'Submit', 'Save', or 'Continue'.",
    component: <PrimaryButton />,
    code: `import PrimaryButton from "@/components/items/PrimaryButton";\n\n<PrimaryButton />`,
  },
  {
    id: "secondary-button",
    name: "Secondary Button",
    category: "Buttons",
    description: "Alternative action button with less visual weight. Ideal for secondary actions like 'Cancel' or 'Back'.",
    component: <SecondaryButton />,
    code: `import SecondaryButton from "@/components/items/SecondaryButton";\n\n<SecondaryButton />`,
  },
  {
    id: "outline-button",
    name: "Outline Button",
    category: "Buttons",
    description: "Button with border styling for subtle emphasis. Perfect for tertiary actions or when you need visual hierarchy.",
    component: <OutlineButton />,
    code: `import OutlineButton from "@/components/items/OutlineButton";\n\n<OutlineButton />`,
  },
  {
    id: "ghost-button",
    name: "Ghost Button",
    category: "Buttons",
    description: "Minimal button with transparent background. Best for navigation or less important actions.",
    component: <GhostButton />,
    code: `import GhostButton from "@/components/items/GhostButton";\n\n<GhostButton />`,
  },
  {
    id: "danger-button",
    name: "Danger Button",
    category: "Buttons",
    description: "Destructive action button with warning color. Use for delete, remove, or irreversible actions.",
    component: <DangerButton />,
    code: `import DangerButton from "@/components/items/DangerButton";\n\n<DangerButton />`,
  },
  {
    id: "success-button",
    name: "Success Button",
    category: "Buttons",
    description: "Positive action button indicating success or confirmation. Ideal for approve, accept, or complete actions.",
    component: <SuccessButton />,
    code: `import SuccessButton from "@/components/items/SuccessButton";\n\n<SuccessButton />`,
  },
  {
    id: "icon-button",
    name: "Icon Button",
    category: "Buttons",
    description: "Compact button with only an icon. Perfect for toolbars, action menus, or space-constrained interfaces.",
    component: <IconButton />,
    code: `import IconButton from "@/components/items/IconButton";\n\n<IconButton />`,
  },
  {
    id: "loading-button",
    name: "Loading Button",
    category: "Buttons",
    description: "Button with loading state and spinner animation. Shows progress during async operations like API calls.",
    component: <LoadingButton />,
    code: `import LoadingButton from "@/components/items/LoadingButton";\n\n<LoadingButton />`,
  },

  // Cards
  {
    id: "profile-card",
    name: "Profile Card",
    category: "Cards",
    description: "User profile display with avatar, name, and action buttons. Perfect for user listings or social features.",
    component: <ProfileCard />,
    code: `import ProfileCard from "@/components/items/ProfileCard";\n\n<ProfileCard />`,
  },
  {
    id: "product-card",
    name: "Product Card",
    category: "Cards",
    description: "E-commerce product card with image, price, and purchase button. Ideal for product catalogs and stores.",
    component: <ProductCard />,
    code: `import ProductCard from "@/components/items/ProductCard";\n\n<ProductCard />`,
  },
  {
    id: "notification-card",
    name: "Notification Card",
    category: "Cards",
    description: "Alert notification with icon and dismiss button. Use for system messages, updates, or important alerts.",
    component: <NotificationCard />,
    code: `import NotificationCard from "@/components/items/NotificationCard";\n\n<NotificationCard />`,
  },
  {
    id: "stats-card",
    name: "Stats Card",
    category: "Cards",
    description: "Dashboard statistics card showing metrics and trends. Perfect for analytics dashboards and KPI displays.",
    component: <StatsCard />,
    code: `import StatsCard from "@/components/items/StatsCard";\n\n<StatsCard />`,
  },
  {
    id: "image-card",
    name: "Image Card",
    category: "Cards",
    description: "Media card with image and caption. Ideal for galleries, portfolios, or content grids.",
    component: <ImageCard />,
    code: `import ImageCard from "@/components/items/ImageCard";\n\n<ImageCard />`,
  },

  // Inputs
  {
    id: "text-input",
    name: "Text Input",
    category: "Inputs",
    description: "Standard text input field with label. Essential for forms, user data collection, and text entry.",
    component: <TextInput />,
    code: `import TextInput from "@/components/items/TextInput";\n\n<TextInput />`,
  },
  {
    id: "search-input",
    name: "Search Input",
    category: "Inputs",
    description: "Search field with icon and clear button. Perfect for search bars, filters, and query interfaces.",
    component: <SearchInput />,
    code: `import SearchInput from "@/components/items/SearchInput";\n\n<SearchInput />`,
  },
  {
    id: "password-input",
    name: "Password Input",
    category: "Inputs",
    description: "Secure password input with show/hide toggle. Essential for authentication and security forms.",
    component: <PasswordInput />,
    code: `import PasswordInput from "@/components/items/PasswordInput";\n\n<PasswordInput />`,
  },
  {
    id: "textarea-input",
    name: "Textarea Input",
    category: "Inputs",
    description: "Multi-line text input with character counter. Ideal for comments, messages, and long-form content.",
    component: <TextareaInput />,
    code: `import TextareaInput from "@/components/items/TextareaInput";\n\n<TextareaInput />`,
  },
  {
    id: "select-dropdown",
    name: "Select Dropdown",
    category: "Inputs",
    description: "Dropdown selection menu with multiple options. Perfect for choice selection and categorization.",
    component: <SelectDropdown />,
    code: `import SelectDropdown from "@/components/items/SelectDropdown";\n\n<SelectDropdown />`,
  },
  {
    id: "checkbox-input",
    name: "Checkbox Input",
    category: "Inputs",
    description: "Checkbox for boolean selection with label. Essential for agreements, preferences, and multi-select.",
    component: <CheckboxInput />,
    code: `import CheckboxInput from "@/components/items/CheckboxInput";\n\n<CheckboxInput />`,
  },

  // Status
  {
    id: "success-badge",
    name: "Success Badge",
    category: "Status",
    description: "Green success indicator badge. Use to show completed states, successful operations, or positive statuses.",
    component: <SuccessBadge />,
    code: `import SuccessBadge from "@/components/items/SuccessBadge";\n\n<SuccessBadge />`,
  },
  {
    id: "error-badge",
    name: "Error Badge",
    category: "Status",
    description: "Red error indicator badge. Shows failed operations, errors, or critical issues that need attention.",
    component: <ErrorBadge />,
    code: `import ErrorBadge from "@/components/items/ErrorBadge";\n\n<ErrorBadge />`,
  },
  {
    id: "warning-badge",
    name: "Warning Badge",
    category: "Status",
    description: "Yellow warning indicator badge. Alerts users to caution states, potential issues, or important notices.",
    component: <WarningBadge />,
    code: `import WarningBadge from "@/components/items/WarningBadge";\n\n<WarningBadge />`,
  },
  {
    id: "info-badge",
    name: "Info Badge",
    category: "Status",
    description: "Blue information indicator badge. Displays helpful information, tips, or general status updates.",
    component: <InfoBadge />,
    code: `import InfoBadge from "@/components/items/InfoBadge";\n\n<InfoBadge />`,
  },
  {
    id: "progress-bar",
    name: "Progress Bar",
    category: "Status",
    description: "Animated progress indicator with percentage. Shows upload progress, task completion, or loading states.",
    component: <ProgressBar />,
    code: `import ProgressBar from "@/components/items/ProgressBar";\n\n<ProgressBar />`,
  },
  {
    id: "spinner-loader",
    name: "Spinner Loader",
    category: "Status",
    description: "Rotating spinner loading indicator. Classic loading animation for async operations and data fetching.",
    component: <SpinnerLoader />,
    code: `import SpinnerLoader from "@/components/items/SpinnerLoader";\n\n<SpinnerLoader />`,
  },

  // Utility
  {
    id: "divider-horizontal",
    name: "Divider Horizontal",
    category: "Utility",
    description: "Horizontal divider line with optional text. Separates content sections and improves visual hierarchy.",
    component: <DividerHorizontal />,
    code: `import DividerHorizontal from "@/components/items/DividerHorizontal";\n\n<DividerHorizontal />`,
  },
  {
    id: "tooltip-component",
    name: "Tooltip",
    category: "Utility",
    description: "Hover tooltip with contextual information. Provides additional details without cluttering the interface.",
    component: <TooltipComponent />,
    code: `import TooltipComponent from "@/components/items/TooltipComponent";\n\n<TooltipComponent />`,
  },
  {
    id: "modal-dialog",
    name: "Modal Dialog",
    category: "Utility",
    description: "Popup modal overlay for focused interactions. Captures user attention for important actions or forms.",
    component: <ModalDialog />,
    code: `import ModalDialog from "@/components/items/ModalDialog";\n\n<ModalDialog />`,
  },
  {
    id: "tabs-component",
    name: "Tabs Component",
    category: "Utility",
    description: "Tabbed navigation for content organization. Efficiently displays multiple views in a single space.",
    component: <TabsComponent />,
    code: `import TabsComponent from "@/components/items/TabsComponent";\n\n<TabsComponent />`,
  },
  {
    id: "avatar-component",
    name: "Avatar",
    category: "Utility",
    description: "User avatar with initials and info. Essential for user identification and profile displays.",
    component: <AvatarComponent />,
    code: `import AvatarComponent from "@/components/items/AvatarComponent";\n\n<AvatarComponent />`,
  },
  {
    id: "toggle-switch",
    name: "Toggle Switch",
    category: "Utility",
    description: "On/off toggle switch for binary settings. Intuitive control for enabling or disabling features.",
    component: <ToggleSwitch />,
    code: `import ToggleSwitch from "@/components/items/ToggleSwitch";\n\n<ToggleSwitch />`,
  },

  // More Buttons
  {
    id: "link-button",
    name: "Link Button",
    category: "Buttons",
    description: "Text-style button that looks like a link. Minimal styling for navigation or tertiary actions.",
    component: <LinkButton />,
    code: `import LinkButton from "@/components/items/LinkButton";\n\n<LinkButton />`,
  },

  // More Cards
  {
    id: "pricing-card",
    name: "Pricing Card",
    category: "Cards",
    description: "Pricing tier card with features list. Essential for subscription plans and pricing pages.",
    component: <PricingCard />,
    code: `import PricingCard from "@/components/items/PricingCard";\n\n<PricingCard />`,
  },
  {
    id: "blog-card",
    name: "Blog Card",
    category: "Cards",
    description: "Blog post preview card with image and metadata. Perfect for content listings and article grids.",
    component: <BlogCard />,
    code: `import BlogCard from "@/components/items/BlogCard";\n\n<BlogCard />`,
  },
  {
    id: "feature-card",
    name: "Feature Card",
    category: "Cards",
    description: "Feature highlight card with icon. Showcases product features and benefits effectively.",
    component: <FeatureCard />,
    code: `import FeatureCard from "@/components/items/FeatureCard";\n\n<FeatureCard />`,
  },

  // More Inputs
  {
    id: "file-upload",
    name: "File Upload",
    category: "Inputs",
    description: "Drag-and-drop file uploader with preview. User-friendly file selection interface.",
    component: <FileUpload />,
    code: `import FileUpload from "@/components/items/FileUpload";\n\n<FileUpload />`,
  },
  {
    id: "range-slider",
    name: "Range Slider",
    category: "Inputs",
    description: "Slider for selecting numeric values. Great for volume, price ranges, or adjustable settings.",
    component: <RangeSlider />,
    code: `import RangeSlider from "@/components/items/RangeSlider";\n\n<RangeSlider />`,
  },
  {
    id: "slider",
    name: "Slider",
    category: "Inputs",
    description: "Custom styled slider for value selection. Smooth animations and visual feedback.",
    component: <Slider />,
    code: `import Slider from "@/components/items/Slider";\n\n<Slider />`,
  },
  {
    id: "date-picker",
    name: "Date Picker",
    category: "Inputs",
    description: "Date selection input field. Native date picker styled to match your design system.",
    component: <DatePicker />,
    code: `import DatePicker from "@/components/items/DatePicker";\n\n<DatePicker />`,
  },
  {
    id: "dropdown",
    name: "Dropdown",
    category: "Inputs",
    description: "Custom dropdown select menu. Fully styled alternative to native select elements.",
    component: <Dropdown />,
    code: `import Dropdown from "@/components/items/Dropdown";\n\n<Dropdown />`,
  },
  {
    id: "radio-group",
    name: "Radio Group",
    category: "Inputs",
    description: "Radio button group for single selection. Clear option selection with visual feedback.",
    component: <RadioGroup />,
    code: `import RadioGroup from "@/components/items/RadioGroup";\n\n<RadioGroup />`,
  },

  // Navigation
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    description: "Breadcrumb navigation trail. Shows user's location in site hierarchy.",
    component: <Breadcrumb />,
    code: `import Breadcrumb from "@/components/items/Breadcrumb";\n\n<Breadcrumb />`,
  },
  {
    id: "pagination",
    name: "Pagination",
    category: "Navigation",
    description: "Page navigation with numbered buttons. Essential for long lists and table data.",
    component: <Pagination />,
    code: `import Pagination from "@/components/items/Pagination";\n\n<Pagination />`,
  },
  {
    id: "stepper",
    name: "Stepper",
    category: "Navigation",
    description: "Multi-step progress indicator. Perfect for wizards, forms, and onboarding flows.",
    component: <Stepper />,
    code: `import Stepper from "@/components/items/Stepper";\n\n<Stepper />`,
  },

  // Data Display
  {
    id: "simple-table",
    name: "Simple Table",
    category: "Data Display",
    description: "Clean data table with hover states. Display structured data in rows and columns.",
    component: <SimpleTable />,
    code: `import SimpleTable from "@/components/items/SimpleTable";\n\n<SimpleTable />`,
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "Data Display",
    description: "Expandable content panels. Organize information in collapsible sections.",
    component: <Accordion />,
    code: `import Accordion from "@/components/items/Accordion";\n\n<Accordion />`,
  },
  {
    id: "timeline",
    name: "Timeline",
    category: "Data Display",
    description: "Vertical timeline with events. Display chronological information and history.",
    component: <Timeline />,
    code: `import Timeline from "@/components/items/Timeline";\n\n<Timeline />`,
  },
  {
    id: "empty-state",
    name: "Empty State",
    category: "Data Display",
    description: "Empty state placeholder with CTA. Guide users when no data is available.",
    component: <EmptyState />,
    code: `import EmptyState from "@/components/items/EmptyState";\n\n<EmptyState />`,
  },

  // Feedback
  {
    id: "toast",
    name: "Toast Notification",
    category: "Feedback",
    description: "Temporary notification message. Non-intrusive feedback for user actions.",
    component: <Toast />,
    code: `// 1. Wrap your app with ToastProvider in _app.tsx
import { ToastProvider } from "@/components/items/ToastProvider";

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

// 2. Use the toast hook in any component
import { useToast } from "@/components/items/ToastProvider";

export default function MyComponent() {
  const { toast } = useToast();

  const handleClick = () => {
    toast("Success!", "Your changes have been saved", "success");
    // Types: "success" | "error" | "warning" | "info"
  };

  return <button onClick={handleClick}>Show Toast</button>;
}`,
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    category: "Feedback",
    description: "Confirmation dialog for critical actions. Prevents accidental destructive operations.",
    component: <AlertDialog />,
    code: `import AlertDialog from "@/components/items/AlertDialog";\n\n<AlertDialog />`,
  },
  {
    id: "skeleton",
    name: "Skeleton Loader",
    category: "Feedback",
    description: "Content loading placeholder. Improves perceived performance during data fetching.",
    component: <Skeleton />,
    code: `import Skeleton from "@/components/items/Skeleton";\n\n<Skeleton />`,
  },

  // Advanced
  {
    id: "command-palette",
    name: "Command Palette",
    category: "Advanced",
    description: "Quick command search interface. Power-user feature for keyboard navigation.",
    component: <CommandPalette />,
    code: `import CommandPalette from "@/components/items/CommandPalette";\n\n<CommandPalette />`,
  },
  {
    id: "carousel",
    name: "Carousel",
    category: "Interactive",
    description: "Image slider with smooth transitions. Perfect for showcasing products or testimonials.",
    component: <Carousel />,
    code: `import Carousel from "@/components/items/Carousel";\n\n<Carousel />`,
  },
  {
    id: "rating",
    name: "Rating",
    category: "Interactive",
    description: "Star rating component with hover effects. Essential for reviews and feedback.",
    component: <Rating />,
    code: `import Rating from "@/components/items/Rating";\n\n<Rating />`,
  },
  {
    id: "tag",
    name: "Tag/Chip",
    category: "Interactive",
    description: "Removable tags for categories and filters. Interactive with smooth animations.",
    component: <Tag />,
    code: `import Tag from "@/components/items/Tag";\n\n<Tag />`,
  },
  {
    id: "popover",
    name: "Popover",
    category: "Interactive",
    description: "Rich floating content panel. More detailed than tooltips for contextual information.",
    component: <Popover />,
    code: `import Popover from "@/components/items/Popover";\n\n<Popover />`,
  },
  {
    id: "drawer",
    name: "Drawer",
    category: "Interactive",
    description: "Slide-out sidebar panel. Perfect for filters, menus, or additional content.",
    component: <Drawer />,
    code: `import Drawer from "@/components/items/Drawer";\n\n<Drawer />`,
  },
  {
    id: "multi-select",
    name: "Multi-Select",
    category: "Inputs",
    description: "Dropdown with multiple selection checkboxes. Great for filtering and selection.",
    component: <MultiSelect />,
    code: `import MultiSelect from "@/components/items/MultiSelect";\n\n<MultiSelect />`,
  },
  {
    id: "combobox",
    name: "Combobox",
    category: "Inputs",
    description: "Searchable dropdown with autocomplete. Filter options as you type.",
    component: <Combobox />,
    code: `import Combobox from "@/components/items/Combobox";\n\n<Combobox />`,
  },
  {
    id: "otp-input",
    name: "OTP Input",
    category: "Inputs",
    description: "One-time password input for verification codes. Auto-focuses next field.",
    component: <OTPInput />,
    code: `import OTPInput from "@/components/items/OTPInput";\n\n<OTPInput />`,
  },
  {
    id: "color-picker",
    name: "Color Picker",
    category: "Inputs",
    description: "Color selection palette. Perfect for customization and design tools.",
    component: <ColorPicker />,
    code: `import ColorPicker from "@/components/items/ColorPicker";\n\n<ColorPicker />`,
  },
  {
    id: "switch-group",
    name: "Switch Group",
    category: "Inputs",
    description: "Multiple toggle switches with descriptions. Ideal for settings pages.",
    component: <SwitchGroup />,
    code: `import SwitchGroup from "@/components/items/SwitchGroup";\n\n<SwitchGroup />`,
  },
  {
    id: "code-block",
    name: "Code Block",
    category: "Data Display",
    description: "Syntax code display with copy button. Essential for documentation.",
    component: <CodeBlock />,
    code: `import CodeBlock from "@/components/items/CodeBlock";\n\n<CodeBlock />`,
  },
  {
    id: "tree-view",
    name: "Tree View",
    category: "Data Display",
    description: "Hierarchical tree structure. Perfect for file explorers and nested data.",
    component: <TreeView />,
    code: `import TreeView from "@/components/items/TreeView";\n\n<TreeView />`,
  },
  {
    id: "kanban-card",
    name: "Kanban Card",
    category: "Data Display",
    description: "Task card for kanban boards. Draggable with priority labels.",
    component: <KanbanCard />,
    code: `import KanbanCard from "@/components/items/KanbanCard";\n\n<KanbanCard />`,
  },
  {
    id: "metric-card",
    name: "Metric Card",
    category: "Data Display",
    description: "Dashboard metric card with trends. Show KPIs and statistics beautifully.",
    component: <MetricCard />,
    code: `import MetricCard from "@/components/items/MetricCard";\n\n<MetricCard />`,
  },
  {
    id: "comparison-table",
    name: "Comparison Table",
    category: "Data Display",
    description: "Feature comparison table. Perfect for pricing and plan comparisons.",
    component: <ComparisonTable />,
    code: `import ComparisonTable from "@/components/items/ComparisonTable";\n\n<ComparisonTable />`,
  },
  {
    id: "image-gallery",
    name: "Image Gallery",
    category: "Data Display",
    description: "Lightbox image gallery. Click to expand images with smooth transitions.",
    component: <ImageGallery />,
    code: `import ImageGallery from "@/components/items/ImageGallery";\n\n<ImageGallery />`,
  },
  {
    id: "chat-bubble",
    name: "Chat Bubble",
    category: "Data Display",
    description: "Message bubbles for chat interfaces. Sent and received message styles.",
    component: <ChatBubble />,
    code: `import ChatBubble from "@/components/items/ChatBubble";\n\n<ChatBubble />`,
  },
  {
    id: "skeleton-list",
    name: "Skeleton List",
    category: "Feedback",
    description: "Loading placeholder for lists. Shows content structure while loading.",
    component: <SkeletonList />,
    code: `import SkeletonList from "@/components/items/SkeletonList";\n\n<SkeletonList />`,
  },
  {
    id: "confirmation-prompt",
    name: "Confirmation Prompt",
    category: "Feedback",
    description: "Inline confirmation for destructive actions. Prevents accidental deletions.",
    component: <ConfirmationPrompt />,
    code: `import ConfirmationPrompt from "@/components/items/ConfirmationPrompt";\n\n<ConfirmationPrompt />`,
  },
  {
    id: "faq-item",
    name: "FAQ Accordion",
    category: "Feedback",
    description: "Collapsible FAQ item. Clean accordion for frequently asked questions.",
    component: <FAQItem question="How does this work?" answer="This is an example FAQ component with smooth animations." />,
    code: `import FAQItem from "@/components/items/FAQItem";\n\n<FAQItem question="Your question?" answer="Your answer." />`,
  },
  {
    id: "bottom-navigation",
    name: "Bottom Navigation",
    category: "Navigation",
    description: "Mobile-style bottom nav bar. Perfect for mobile-first applications.",
    component: <BottomNavigation />,
    code: `import BottomNavigation from "@/components/items/BottomNavigation";\n\n<BottomNavigation />`,
  },
  {
    id: "mega-menu",
    name: "Mega Menu",
    category: "Navigation",
    description: "Large dropdown with multiple columns. Great for complex navigation.",
    component: <MegaMenu />,
    code: `import MegaMenu from "@/components/items/MegaMenu";\n\n<MegaMenu />`,
  },
  {
    id: "context-menu",
    name: "Context Menu",
    category: "Navigation",
    description: "Right-click context menu. Provides quick actions on right-click.",
    component: <ContextMenu />,
    code: `import ContextMenu from "@/components/items/ContextMenu";\n\n<ContextMenu />`,
  },
  {
    id: "fab",
    name: "Floating Action Button",
    category: "Utility",
    description: "Material-style floating button. Expandable with multiple actions.",
    component: <FAB />,
    code: `import FAB from "@/components/items/FAB";\n\n<FAB />`,
  },
  {
    id: "notification-bell",
    name: "Notification Bell",
    category: "Utility",
    description: "Notification icon with badge and dropdown. Shows unread count and list.",
    component: <NotificationBell />,
    code: `import NotificationBell from "@/components/items/NotificationBell";\n\n<NotificationBell />`,
  },
  {
    id: "user-menu",
    name: "User Menu",
    category: "Utility",
    description: "Avatar dropdown with user actions. Profile menu with settings and logout.",
    component: <UserMenu />,
    code: `import UserMenu from "@/components/items/UserMenu";\n\n<UserMenu />`,
  },
  {
    id: "copy-button",
    name: "Copy Button",
    category: "Utility",
    description: "One-click copy to clipboard. Shows success feedback when copied.",
    component: <CopyButton />,
    code: `import CopyButton from "@/components/items/CopyButton";\n\n<CopyButton />`,
  },
  {
    id: "share-button",
    name: "Share Button",
    category: "Utility",
    description: "Social sharing menu. Share to multiple platforms with one click.",
    component: <ShareButton />,
    code: `import ShareButton from "@/components/items/ShareButton";\n\n<ShareButton />`,
  },
  {
    id: "keyboard-shortcut",
    name: "Keyboard Shortcut",
    category: "Utility",
    description: "Display keyboard shortcuts. Shows key combinations beautifully.",
    component: <KeyboardShortcut />,
    code: `import KeyboardShortcut from "@/components/items/KeyboardShortcut";\n\n<KeyboardShortcut />`,
  },
];

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem>(components[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState("");

  // Handle URL hash for direct component selection
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove '#'
      if (hash) {
        const component = components.find((c) => c.id === hash);
        if (component) {
          setSelectedComponent(component);
        }
      }
    };

    // Check hash on mount
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const categories = Array.from(new Set(components.map((c) => c.category)));
  
  // Filter components based on sidebar search
  const filteredComponents = sidebarSearch.trim()
    ? components.filter((c) =>
        c.name.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
        c.category.toLowerCase().includes(sidebarSearch.toLowerCase())
      )
    : components;

  return (
    <div
      id="ComponentsPage"
      className="flex flex-col w-full min-h-screen m-0 p-0 bg-[#101010]"
    >
      <SEO
        title="FlowerUI Component Library - 90+ Free React TSX Components"
        description="Browse and copy 90+ beautiful, production-ready React TSX components. Built with Tailwind CSS and Framer Motion. Includes buttons, cards, inputs, modals, tables, navigation, and more. All components are free, open-source, and fully customizable."
        keywords="react component library, tsx components, tailwind ui components, framer motion components, free react components, copy paste components, react button components, react card components, react form inputs, nextjs ui library"
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
            <h2 className="text-white text-lg font-bold mb-4">Components</h2>
            
            {/* Sidebar Search */}
            <div className="relative mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                placeholder="Filter components..."
                className="w-full pl-9 pr-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-300 placeholder-neutral-500 text-sm focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {sidebarSearch.trim() ? (
              /* Show all filtered results when searching */
              <div className="mb-6">
                <p className="text-neutral-500 text-xs mb-3">{filteredComponents.length} results</p>
                <div className="flex flex-col gap-1">
                  {filteredComponents.map((component) => (
                    <button
                      key={component.id}
                      onClick={() => {
                        setSelectedComponent(component);
                        window.location.hash = component.id;
                        setSidebarOpen(false);
                        setSidebarSearch("");
                      }}
                      className={`
                        text-left px-3 py-2 rounded-md text-sm transition-colors duration-200
                        ${
                          selectedComponent.id === component.id
                            ? "bg-neutral-800 text-white font-medium"
                            : "text-neutral-300 hover:bg-neutral-800/50 hover:text-white"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span>{component.name}</span>
                        <span className="text-xs text-neutral-600">{component.category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Show by category when not searching */
              categories.map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    {category}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {components
                      .filter((c) => c.category === category)
                      .map((component) => (
                        <button
                          key={component.id}
                          onClick={() => {
                            setSelectedComponent(component);
                            window.location.hash = component.id;
                            setSidebarOpen(false);
                          }}
                          className={`
                            text-left px-3 py-2 rounded-md text-sm transition-colors duration-200
                            ${
                              selectedComponent.id === component.id
                                ? "bg-neutral-800 text-white font-medium"
                                : "text-neutral-300 hover:bg-neutral-800/50 hover:text-white"
                            }
                          `}
                        >
                          {component.name}
                        </button>
                      ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content - Single Component View */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] overflow-y-auto">
          <div className="max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedComponent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Component Header */}
                <div className="mb-6">
                  <div className="text-neutral-100 text-xs sm:text-sm bg-neutral-800 duration-200 ease-in-out px-2 sm:px-3 py-1 rounded-full inline-flex flex-row gap-2 items-center mb-3 whitespace-nowrap">
                    <span className="w-[5px] h-[5px] bg-blue-500 rounded-full" />
                    {selectedComponent.category}
                  </div>
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    {selectedComponent.name}
                  </h1>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                    {selectedComponent.description}
                  </p>
                </div>

                {/* Component Preview */}
                <div className="mb-6">
                  <h3 className="text-white text-base font-semibold mb-3">Preview</h3>
                  <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
                    <div className="flex items-center justify-center min-h-[140px] rounded-lg bg-neutral-950/50 p-4 sm:p-6">
                      {selectedComponent.component}
                    </div>
                  </div>
                </div>

                {/* Code Section */}
                <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white text-base font-semibold">Usage</h3>
                <a
                  href="https://github.com/valasellisdimitris/flowerui/tree/main/src/components"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white text-xs flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-md transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 overflow-x-auto">
                <pre className="text-neutral-300 text-xs sm:text-sm font-mono leading-relaxed">
                  <code>{selectedComponent.code}</code>
                </pre>
              </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
