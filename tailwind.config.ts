import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "base-small": "clamp(0.821rem, 0.3071rem + 0.4647vi, 0.8943rem)",
        "base": "clamp(1.2rem, 1rem + 1vw, 1.05rem)",
        "base-large": "clamp(1.1rem, 0.7071rem + 0.5143vi, 1.4rem)",
        'heading-6': 'clamp(1rem, 0.928rem + 0.36vw, 1.25rem)',
        "heading-5": "clamp(1.2rem, 1rem + 0.45vw, 1.57rem)",
        "heading-4": "clamp(1.4rem, 0.9rem + 0.5vw, 1.5rem)",
        "heading-3": "clamp(1.4rem, 0.9rem + 0.5vw, 1.5rem)",
        "heading-2": "clamp(2rem, 1.5rem + 2.2vi, 1.6rem)",
        "heading-1": "clamp(3.5rem, 3.25rem + 1vw, 3.2rem)",
        "heading-display": "clamp(4.6518rem, 4.88rem + 3.459vi, 6.3131rem)",
      },
      spacing: {
        "3xs": "clamp(0.3125rem, 0.3125rem + 0vi, 0.3125rem)",
        "2xs": "clamp(0.5625rem, 0.5446rem + 0.0893vi, 0.625rem)",
        "xs": "clamp(0.875rem, 0.8571rem + 0.0893vi, 0.9375rem)",
        "sm": "clamp(1.125rem, 1.0893rem + 0.1786vi, 1.25rem)",
        "md": "clamp(1.6875rem, 1.6339rem + 0.2679vi, 1.875rem)",
        "lg": "clamp(2.25rem, 2.1786rem + 0.3571vi, 2.5rem)",
        "xl": "clamp(3.375rem, 3.2679rem + 0.5357vi, 3.75rem)",
        "2xl": "clamp(4.5rem, 4.3571rem + 0.7143vi, 5rem)",
        "3xl": "clamp(5.75rem, 6.2571rem + 1.2023vi, 7.25rem)",
      },
      colors: {
        "dark": "var(--dark)",
        "semi-dark": "var(--semi-dark)",
        "violet": "var(--violet)",
        "light-violet": "var(--light-violet)",
        "bluish": "var(--bluish)",
        "white": "var(--white)",
      },
      fontFamily: {
        light: "var(--text-light)",
        regular: "var(--text-regular)",
        medium: "var(--text-medium)",
        bold: "var(--text-bold)",
      },
    },
  },
  plugins: [],
} satisfies Config;
