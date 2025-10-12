# 🌸 FlowerUI

**Beautiful, production-ready React components for Next.js**

FlowerUI is a modern component library featuring 90+ carefully crafted components with smooth animations, dark theme design, and full customization. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-ff69b4)](https://www.framer.com/motion/)

---

## ✨ Features

- 🎨 **90+ Components** - Buttons, inputs, cards, navigation, data display, and more
- 🎭 **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 🌙 **Dark Theme** - Beautiful dark-mode-first design system
- 📱 **Fully Responsive** - Works perfectly on all screen sizes
- ♿ **Accessible** - Built with accessibility best practices
- 🎯 **TypeScript** - Fully typed for better developer experience
- 🎨 **Tailwind CSS** - Easy to customize and extend
- 📦 **Copy & Paste** - No npm installation, you own the code
- 🚀 **Production Ready** - Battle-tested and optimized for performance

---

## 🚀 Quick Start

### Prerequisites

Before using FlowerUI components, ensure your project has:

- **Next.js** 13 or higher
- **React** 18 or higher
- **Tailwind CSS** configured
- **Framer Motion** installed

### Installation

1. **Install Framer Motion** (if not already installed):
```bash
npm install framer-motion
```

2. **Copy Components**:
   - Browse the [Components Page](https://flowerui.vercel.app/components)
   - Find the component you need
   - Copy the code
   - Paste it into your project's components folder
   - Import and use!

### Example Usage

```tsx
import Carousel from "@/components/items/Carousel";
import Rating from "@/components/items/Rating";
import Tag from "@/components/items/Tag";

export default function MyPage() {
  return (
    <div>
      <Carousel />
      <Rating />
      <Tag />
    </div>
  );
}
```

---

## 📦 Component Categories

### 🔘 **Buttons** (9 components)
Primary, Secondary, Outline, Ghost, Danger, Success, Icon, Loading, Link

### 🎴 **Cards** (6 components)
Profile, Product, Notification, Stats, Image, Pricing, Blog, Feature

### 📝 **Inputs** (13 components)
Text, Search, Password, Textarea, Select, Checkbox, File Upload, Range, Date, Multi-Select, Combobox, OTP, Color Picker, Radio, Switch Group

### 📊 **Data Display** (12 components)
Table, Accordion, Timeline, Tree View, Kanban Card, Metric Card, Comparison Table, Image Gallery, Chat Bubble, Code Block, Empty State, Skeleton

### 🎯 **Status & Feedback** (7 components)
Success Badge, Error Badge, Warning Badge, Info Badge, Progress Bar, Spinner, Toast, Alert Dialog, Skeleton List, Confirmation Prompt, FAQ Accordion

### 🧭 **Navigation** (6 components)
Breadcrumb, Pagination, Stepper, Bottom Navigation, Mega Menu, Context Menu

### 🎨 **Interactive** (5 components)
Carousel, Rating, Tag/Chip, Popover, Drawer

### 🛠️ **Utility** (10 components)
Divider, Tooltip, Modal, Tabs, Avatar, Toggle, Dropdown, FAB, Notification Bell, User Menu, Copy Button, Share Button, Keyboard Shortcut

### 🔥 **Advanced** (3 components)
Command Palette, and more...

---

## 🎨 Customization

All components use Tailwind CSS classes, making customization simple:

```tsx
// Change colors by editing className
<button className="bg-purple-600 hover:bg-purple-700 text-white">
  Custom Button
</button>
```

You can also extend your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

---

## 🏃 Development

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

## 📖 Documentation

- **Live Site**: [flowerui.vercel.app](https://flowerui.vercel.app)
- **Components**: [flowerui.vercel.app/components](https://flowerui.vercel.app/components)
- **Documentation**: [flowerui.vercel.app/docs](https://flowerui.vercel.app/docs)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new components
- Submit pull requests
- Improve documentation

---

## 📄 License

**Dual License:**

- ✅ **Components** (`/src/components/`) - **MIT License** - Free to use in any project, commercial or personal
- ❌ **Website Code** (`/src/pages/`, configs, etc.) - **All Rights Reserved** - Proprietary

You are free to copy and use any UI components from this library in your projects. The website structure and application code is proprietary. See [LICENSE](LICENSE) for full details.

---

## 👨‍💻 Author

**Dimitris Valasellis**

- GitHub: [@valasellisdimitris](https://github.com/valasellisdimitris)

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## ⭐ Show Your Support

If you like FlowerUI, give it a ⭐ on GitHub!

---

**Watch Your Application Bloom 🌸**
