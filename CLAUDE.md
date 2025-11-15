# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React 18 application for Fundación Mundo de Niños Felices (fundacionmundodeninosfelices.org), built with Vite and deployed to Azure Static Web Apps. This is a "coming soon" landing page with animations and interactive features.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (opens automatically at http://localhost:3000)
npm run dev

# Development server with network access
npm run dev -- --host

# Production build (outputs to dist/)
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Build Configuration

**Important**: The project uses `esbuild` for minification (not `terser`) for Azure compatibility. This is configured in vite.config.js:11.

**Azure Static Web Apps deployment settings**:
- App location: `/`
- API location: `` (empty)
- Output location: `dist`
- Auto-deploys on push to `main` branch via GitHub Actions

## Architecture

### Component Structure

The app follows a component-per-file structure with co-located CSS modules:

```
src/
├── App.jsx                 # Root component, orchestrates all hooks
├── main.jsx                # Vite entry point
├── hooks/
│   └── useAnimations.js    # Three custom hooks for UI effects
└── components/
    ├── Header.jsx          # Logo and title
    ├── HamburgerMenu.jsx   # Mobile navigation menu
    ├── ConstructionContent.jsx  # Main content area
    ├── AnimationContainer.jsx   # Floating particle container
    ├── FeatureSection.jsx       # Grid of features with hover effects
    ├── ComingSoonSection.jsx    # List of upcoming features
    └── Footer.jsx               # Social links and copyright
```

### Custom Hooks Pattern

The app uses three custom hooks exported from `src/hooks/useAnimations.js`:

1. **`useFloatingParticles()`** - Creates emoji particles that float up from bottom (❤️, 🌟, 😊, 🎈, 🌈)
2. **`useProgressAnimation(delay)`** - Shows a progress indicator in bottom-right corner (0-85%)
3. **`useWelcomeMessage(delay)`** - Displays a centered welcome toast message

All three hooks are initialized in App.jsx:9-12 and create DOM elements imperatively (not through React rendering). They handle their own cleanup.

### Parallax Effect

App.jsx:14-28 implements a scroll-based parallax effect on `.floating-elements` using vanilla JavaScript with a -0.5 rate multiplier.

### Styling Architecture

- Each component has its own CSS file (e.g., `Header.jsx` + `Header.css`)
- Global styles in root-level `styles.css`
- Responsive breakpoints: 768px (tablet), 480px (mobile)
- Grid layout: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)

## Azure Configuration

`staticwebapp.config.json` handles:
- Asset caching (max-age: 1 year for `/assets/*`)
- SPA routing (all routes serve `index.html`)
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- 404 fallback to index.html

## Dependencies

**Runtime**: React 18.2, React-DOM 18.2
**Build**: Vite 5, @vitejs/plugin-react
**Linting**: ESLint 8 with react, react-hooks, and react-refresh plugins

## Key Technical Decisions

1. **No TypeScript** - Project uses plain JavaScript despite @types packages in devDependencies
2. **Imperative animations** - Hooks manipulate DOM directly rather than using React state for performance
3. **esbuild minifier** - Required for Azure Static Web Apps compatibility (changed from terser)
4. **Manual chunking** - Vendor bundle separates React/React-DOM from app code (vite.config.js:15-17)
5. **Port 3000** - Development server configured to use port 3000 by default (vite.config.js:22)

## Git Workflow

Standard flow: `main` branch → GitHub Actions → Azure deployment (2-3 minutes)

## Files to Note

- `index.html` - Contains the app's mapping from design mockup
- `Site.svg` - Large (59MB) design reference file
- `script.js` - Legacy vanilla JS (not imported by React app)
- `styles.css` - Global styles (not module-based)
- `config.json` - Configuration file (purpose unclear without inspection)
