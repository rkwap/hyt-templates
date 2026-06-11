/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,md,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        macframe: "0px 3px 12px rgba(0, 0, 0, 0.09)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        highlight: "hsl(var(--highlight))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        readcv: {
          primary: "hsl(var(--readcv-primary))",
          secondary: "hsl(var(--readcv-secondary))",
          background: "hsl(var(--readcv-background))",
          grey: "hsl(var(--readcv-grey))",
        },
        monochrome: {
          primary: "hsl(var(--monochrome-primary))",
          secondary: "hsl(var(--monochrome-secondary))",
          tertiary: "hsl(var(--monochrome-tertiary))",
          background: "hsl(var(--monochrome-background))",
          border: "hsl(var(--monochrome-border))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blueAccent: {
          DEFAULT: "hsl(var(--blue-accent))",
        },
        mastodon: "#6364FF",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        main: {
          "bg-primary": "#f5f5f5",
          "bg-secondary": "#fafafa",
          "border-primary": "rgb(229 229 229 / 0.8)",
          "text-secondary": "#737373",
        },
        notion: {
          "text-primary": "hsl(var(--notion-text-primary))",
          "text-secondary": "hsl(var(--notion-text-secondary))",
          "text-tertiary": "hsl(var(--notion-text-tertiary))",
          "bg-primary": "hsl(var(--notion-bg-primary))",
          "bg-secondary": "hsl(var(--notion-bg-secondary))",
          "border-light": "hsl(var(--notion-border-light))",
          "border-medium": "hsl(var(--notion-border-medium))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "hover-pulse": {
          "0%": { boxShadow: "0 0 0 0 hsl(var(--primary))" },
          "100%": { boxShadow: "0 0 0 1em rgba(255, 0, 0, 0)" },
        },
        shake: {
          "0%": { marginLeft: "0rem" },
          "25%": { marginLeft: "0.5rem" },
          "75%": { marginLeft: "-0.5rem" },
          "100%": { marginLeft: "0rem" },
        },
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "hover-pulse": "hover-pulse 1s ease-in-out",
        shake: "shake 300ms ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 6s infinite ease-in-out",
      },
      scale: {
        200: "2.00",
        250: "2.50",
        300: "3.00",
        400: "4.00",
        500: "5.00",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
  safelist: [
    "bg-rose-600",
    "bg-amber-600",
    "bg-lime-600",
    "bg-cyan-500",
    "bg-fuchsia-500",
    "animate-pulse-slow",
    // Future-proof dynamic patterns (Simplified & Warning-Free)

    { pattern: /bg-(.+)-\d+/ },
    { pattern: /text-(.+)-\d+/ },
    { pattern: /bg-(.+)-\d+\/\d+/ },
    { pattern: /border-(.+)-\d+\/\d+/ },
    // The clean fix for your group-hover warning
    {
      pattern: /^bg-[a-z]+-\d+\/\d+$/,
      variants: ["group-hover"],
    },
    // { pattern: /group-hover:bg-(.+)-\d+\/\d+/ },
  ],
};
