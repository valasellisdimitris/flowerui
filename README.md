# 🌸 FlowerUI

**Beautiful, production-ready React components for Next.js**

FlowerUI is a modern component library featuring 90+ carefully crafted components with smooth animations, dark theme design, and full customization. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Component Categories](#component-categories)
- [Customization](#customization)
- [Development](#development)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Support](#support)
- [FAQ](#frequently-asked-questions)

---

## Features

- **90+ Components**: Buttons, inputs, cards, navigation, data display, and more
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Dark Theme**: Beautiful dark-mode-first design system
- **Fully Responsive**: Works perfectly on all screen sizes
- **Accessible**: Built with accessibility best practices
- **TypeScript**: Fully typed for better developer experience
- **Tailwind CSS**: Easy to customize and extend
- **Copy & Paste**: No npm installation, you own the code
- **Production Ready**: Battle-tested and optimized for performance

---

## Quick Start

### Prerequisites

Before using FlowerUI components, ensure your project has:

- Next.js 13 or higher
- React 18 or higher
- Tailwind CSS configured
- Framer Motion installed

### Installation

1. Install Framer Motion:
```bash
npm install framer-motion
```

2. Copy components:
   - Browse the [Components Page](https://flowerui.vercel.app/components)
   - Find the component you need
   - Copy the code
   - Paste into your project's components folder
   - Import and use!

### Example Usage

```tsx
import { Carousel, Rating, Tag } from "@/components/items";

export default function MyPage() {
  return (
    <div className="space-y-4">
      <Carousel />
      <Rating />
      <Tag>New Feature</Tag>
    </div>
  );
}
```

---

## Component Categories

| Category | Components | Key Elements |
|----------|------------|--------------|
| **Buttons** | 9 | Primary, Secondary, Outline, Ghost, Danger |
| **Cards** | 6 | Profile, Product, Notification, Stats |
| **Inputs** | 13 | Text, Select, Checkbox, Date, File Upload |
| **Data Display** | 12 | Table, Accordion, Timeline, Tree View |
| **Status & Feedback** | 7 | Toast, Progress Bar, Spinner, Badges |
| **Navigation** | 6 | Breadcrumb, Pagination, Stepper, Mega Menu |
| **Interactive** | 5 | Carousel, Rating, Tag/Chip, Popover |
| **Utility** | 10 | Tooltip, Modal, Tabs, Avatar, Dropdown |
| **Advanced** | 3 | Command Palette, Context Menus |

---

## Customization

All components use Tailwind CSS classes, making customization simple:

```tsx
<Button 
  className="bg-indigo-700 hover:bg-indigo-800 text-white"
>
  Custom Button
</Button>
```

Extend your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#6366f1',
        'brand-secondary': '#8b5cf6',
      },
    },
  },
};
```

---

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Documentation

- [Live Site](https://flowerui.vercel.app)
- [Components Gallery](https://flowerui.vercel.app/components)
- [Documentation](https://flowerui.vercel.app/docs)

---

## Contributing

We welcome contributions! Please:

1. Report bugs through GitHub Issues
2. Suggest new components
3. Submit pull requests
4. Improve documentation

---

## License

**Dual License:**

- **Components** (`/src/components/`): 
  - MIT License
  - Free for commercial/personal use
  
- **Website Code** (`/src/pages/`):
  - All Rights Reserved
  - Proprietary

See [LICENSE](LICENSE) for details.

---

## Author

**Dimitris Valasellis**  
GitHub: [@valasellisdimitris](https://github.com/valasellisdimitris)

---

## Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## Support

If you find FlowerUI useful, please give it a ⭐ on [GitHub](https://github.com/valasellisdimitris/flowerui)!

---

## Frequently Asked Questions

<details>
<summary><strong>What is FlowerUI?</strong></summary>
FlowerUI is a modern component library featuring 90+ carefully crafted components with smooth animations, dark theme design, and full customization.
</details>

<details>
<summary><strong>What is the license model?</strong></summary>
Components are MIT licensed (free for any use), while the website code is proprietary.
</details>

<details>
<summary><strong>Can I use this commercially?</strong></summary>
Yes! Components are MIT licensed and free for commercial use.
</details>

<details>
<summary><strong>How do I customize components?</strong></summary>
Edit Tailwind classes directly or extend your tailwind.config.js file.
</details>

---

**Watch Your Application Bloom 🌸**
