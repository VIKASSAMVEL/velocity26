# VELOCITY '26

The official landing page for **VELOCITY '26**, a national-level hackathon organized by the CSE Department & IEEE.

## 🕷️ Theme: Spider-Verse Tech
This project features a highly customized, God-Level "Spider-Verse" interactive theme designed to break away from traditional SaaS layouts.
- **Color Palette:** Neon Red (`#FF0033`), Web Cyan (`#00E5FF`), Prowler Purple (`#7C3AED`), Obsidian (`#0A0A0A`).
- **Interactive Cursor:** A custom-built Miles Morales hand cursor that reacts to hover states and shoots SVG web strands on click.
- **Hanging Spider-Man:** A CSS-animated, swaying Miles Morales silhouette.
- **Prowler Mode:** A hidden toggle that instantly inverts the theme colors and triggers warning alarms.
- **Scroll-Driven Canon Events:** The timeline features a glowing neon web strand that draws itself exactly as the user scrolls.
- **Audio Integration:** Support for Thwip sound effects on click and Post Malone's Sunflower as background music.

## 🚀 Built With
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion & CSS Keyframes
- **Icons:** Lucide React

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, ensure you have placed the following downloaded assets into your `public` directory:
- `public/images/spider-hand.png` (Transparent PNG of Spider-Man's hand)
- `public/images/spider-hanging.png` (Transparent PNG of Spider-Man hanging upside down)
- `public/audio/thwip.mp3` (Web shooter sound effect)
- `public/audio/sunflower.mp3` (Background track)

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment
This project is optimized for deployment on Vercel. Ensure all environment variables (if any) are configured in your Vercel project settings.
