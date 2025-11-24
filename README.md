# Zebbingo Official Website

This is the official website for Zebbingo, an AI-enabled smart companion for children. The website is built with **Next.js 14 (App Router)** and uses the **"Enchanted Glow"** design system powered by Tailwind CSS.

## Features

- **High-Fidelity Hero Section**: Interactive entrance with Framer Motion animations.
- **Character Showcase**: A responsive grid displaying 20+ characters with "Magic Reveal" hover effects.
- **Mission & Values**: A dedicated section and page explaining the company's "务虚" philosophy.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **SEO Ready**: Pre-configured metadata and OpenGraph tags.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Local Development

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment Guide

This project is a standard Next.js application and can be deployed easily.

### Option 1: Deploy to Vercel (Recommended)

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub/GitLab).
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js and configure the build settings.
4. Click **Deploy**.

### Option 2: Self-Hosting / Static Export

#### Standard Build (Node.js Server)
To deploy on a Node.js server (supports ISR, API routes):

1. **Build the project**:
   ```bash
   pnpm build
   ```
2. **Start the server**:
   ```bash
   pnpm start
   ```

#### Static Export (Optional)
If you need a purely static site (HTML/CSS/JS only) to host on Nginx/Apache without Node.js:

1. Update `next.config.ts` to include `output: 'export'`.
2. Run `pnpm build`.
3. The output will be in the `out` folder (not `.next` or `dist`).

## Project Structure

- `src/app`: App Router pages (`page.tsx`, `layout.tsx`, `globals.css`).
- `src/components`: Reusable UI components (`Hero`, `Navbar`, `CharacterCard`, etc.).
- `src/lib`: Utility functions and data constants (`data.ts`, `utils.ts`).
- `public/assets`: Static image resources.
