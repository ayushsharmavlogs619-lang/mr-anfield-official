# Mr. Anfield - Premium LFC News Platform

## 🚀 Project Overview
Mr. Anfield is a premium sports news platform dedicated to Liverpool FC. It features:
- **Magazin-Style UI**: High-impact visuals, bold typography, and cinematic hero sections.
- **Live Data Visuals**: Match center, trending news sidebar, and transfer rumor grid.
- **Dynamic Content**: Ready for CMS integration (Firebase/Sanity).

## 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS (Custom LFC Color Palette)
- **Images**: Next/Image with Unsplash integration
- **Icons**: Lucide React

## 📦 How to Deploy (Production)

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Run deployment:
   ```bash
   vercel login
   vercel
   ```
3. Follow the prompts.

### Option 2: Netlify
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run deployment:
   ```bash
   netlify login
   netlify deploy --prod
   ```

### Option 3: GitHub (Version Control)
To save your work to the cloud:
1. Create a new repository on GitHub.
2. Run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/mr-anfield.git
   git branch -M main
   git push -u origin main
   ```

## 🔑 Environment Secrets
To enable Firebase for the newsletter or database:
1. Create a `.env.local` file.
2. Add your keys:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key_here
   ```
