# PLAN: Velocity '26 Landing Page

Overview: A "god-level" high-performance landing page for VELOCITY '26 National Hackathon.

Project Type: WEB

## Success Criteria
- [ ] 100/100 Lighthouse performance score.
- [ ] "IIT-level" extreme animations (smooth, purposeful, high-energy).
- [ ] Fully responsive on all breakpoints.
- [ ] Deployed and working on Vercel.

## Tech Stack
- Frontend: Next.js 15+ (App Router, Server Components)
- Styling: Tailwind CSS v4
- Animation: Framer Motion
- Icons: Lucide React (no emojis)
- Deployment: Vercel

## File Structure
```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Tracks.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── PrizePool.tsx
│   │   │   ├── Sponsors.tsx
│   │   │   ├── WhyParticipate.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── CustomCursor.tsx
│   │       ├── Countdown.tsx
│   │       └── GlassCard.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   └── assets/
└── tailwind.config.ts
```

## Task Breakdown

### Phase 2: Infrastructure
- **Task 2.1**: Initialize Next.js project with Tailwind CSS v4.
  - Agent: `frontend-specialist` | Skill: `app-builder`
  - Input: Empty directory
  - Output: Working Next.js app
  - Verify: `npm run dev` starts successfully.
- **Task 2.2**: Configure Design System.
  - Agent: `frontend-specialist` | Skill: `frontend-design`
  - Input: `tailwind.config.ts`, `globals.css`
  - Output: Custom tokens for "Kinetic Futurism" palette.
  - Verify: Design tokens are usable in components.

### Phase 3: Core Implementation
- **Task 3.1**: Custom Cursor & Scrollbar.
  - Agent: `frontend-specialist` | Skill: `frontend-design`
  - Verify: Cursor reacts to hover, scrollbar is themed.
- **Task 3.2**: Hero Section.
  - Agent: `frontend-specialist` | Skill: `frontend-design`
  - Verify: Logo pulse, countdown active, particle bg smooth.

## Phase X: Verification
- [ ] No purple hex codes used.
- [ ] `ux_audit.py` passes with zero criticals.
- [ ] `lighthouse_audit.py` > 95 on performance.
- [ ] Vercel deployment success.
