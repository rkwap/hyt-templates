# HYT Templates 🎨

A Next.js 14 template rendering engine for developer portfolios. This repository contains beautifully crafted portfolio templates that render professional developer profiles, case studies, design portfolios, and freelance projects from a static, uniform data store.

---

## ⚡ Tech Stack

- **Core**: Next.js 14.2.5 (App Router, static rendering), React 18
- **Styling**: Tailwind CSS & Vanilla CSS
- **Components**: Radix UI Primitives & Lucide Icons
- **Formatting & Linting**: Biome (via Ultracite)
- **Package Manager**: Yarn

---

## 🚀 Getting Started

Follow these steps to set up the repository locally and run the development server:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/rkwap/hyt-templates.git
   cd hyt-templates
   ```

2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the templates catalog.

---

## 📖 How it Works

- **Homepage (`/`)**: A clean, search-equipped index that lists all registered templates in a light-themed table.
- **Dynamic Template Views (`/[templateName]`)**: Renders a specific template by name. For example:
  - `http://localhost:3000/DEFAULT_TEMPLATE`
  - `http://localhost:3000/RETRO_TEMPLATE`
  - `http://localhost:3000/READCV_TEMPLATE`
  - `http://localhost:3000/MONOCHROME_TEMPLATE`
- **Centralized Profile Data**: The mock profile data used for rendering is centralized inside [src/data/profile.js](file:///Users/rkwap/Repos/hyt-templates/src/data/profile.js).

---

## 🤝 How to Contribute (Adding a New Template)

We love contributions! Adding a new developer portfolio template is simple and modular. Follow this step-by-step guide to build and register your template:

### Step 1: Create the Template Component
Create a new directory for your template under `src/components/spaces-templates/`:
```bash
mkdir -p src/components/spaces-templates/YourNewTemplate
```

Create modular files for your sections (e.g. `hero.jsx`, `experience.jsx`, `projects.jsx`, `education.jsx`) inside that directory, and tie them together in a main component inside `index.jsx` or `index.js`.

> [!TIP]
> Use shared layout components and utility sections to build beautiful interfaces quickly:
> - **Markdown rendering**: Use `<MarkdownRenderer>` in `src/components/markdown-renderer.jsx` to render bios/descriptions safely.
> - **Case Studies**: Use the shared `<ProjectsPM>` component in `src/components/ui/templates/sections/projects-pm.jsx` to display media-rich project grids/carousels out of the box.
> - **Interactive Modals**: Use `<ProjectImageModal>` and `<ImagesCarousel>` for handling multi-image galleries.

### Step 2: Create a High-Level Template Wrapper
Create a new wrapper file inside `src/components/Templates/` (e.g., `YourNewTemplate.jsx`):
- It should import your main template component from `src/components/spaces-templates/YourNewTemplate`.
- It accepts a `data` prop representing the profile data.
- Keep the interface simple and feed the profile data down to your subcomponents.

### Step 3: Register the Template
To make your template live, register it in **only one place**:

1. **Register in Config**: In `src/config/templates.js`, import your high-level component and add your template key, component reference, and wrapping styling rules inside `TEMPLATES_CONFIG`:
   ```javascript
   import YourNewTemplate from "@/components/Templates/YourNewTemplate";

   export const TEMPLATES_CONFIG = {
     // ... existing templates ...
     YOUR_NEW_TEMPLATE: {
       component: YourNewTemplate,
       className: "bg-white text-zinc-900 min-h-screen w-full",
     },
   };
   ```

**That's it!** The template renderer will automatically:
- Render your new template at `http://localhost:3000/YOUR_NEW_TEMPLATE`
- Include it dynamically in the homepage search catalog table.
- Compile it via Next.js Dynamic Static Pre-rendering during builds (`generateStaticParams`).

---

## 🛠 Linting & Verification

We enforce clean, professional code using **Biome** via **Ultracite**. Before submitting a pull request, please ensure your additions satisfy the code-style:

### 1. Run Linter & Formatter
Automatically scan and format your files:
```bash
yarn run fix
```
This runs `ultracite fix` which will check and auto-format your components according to the strict, clean codebase rules.

### 2. Verify Compilation
Always run a production build to verify static site compilation and routing are completely error-free:
```bash
yarn build
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](file:///Users/rkwap/Repos/hyt-templates/LICENSE) file for details.

