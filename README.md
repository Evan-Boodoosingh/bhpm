# Beacon Hill Property Management

A modern, responsive single-page application for a Boston-based property management company, built with React, TypeScript, and Vite.

## Live Demo

🎥 [Watch the Project Walkthrough](https://www.loom.com/share/e7f2db20a099483da4792bf94739472f)

## Overview

This project showcases a professional web presence for BHPM (Beacon Hill Property Management), featuring a fully responsive design, smooth scroll animations, and an intuitive user experience across all device sizes.

## Key Technical Features

### Performance & Architecture
- **Component-Based Architecture**: Modular design with separate components for each major section (About, Services, Contact), promoting code reusability and maintainability
- **Type-Safe Development**: Full TypeScript implementation ensuring type safety and reducing runtime errors
- **Optimized Build System**: Vite-powered development and production builds for lightning-fast hot module replacement and optimized bundle sizes

### UI/UX Implementations
- **Custom Scroll Animations**: Implemented Intersection Observer API with custom threshold and root margin configurations for performant scroll-triggered fade-in effects
- **Smooth Navigation**: CSS-based smooth scrolling with programmatic scroll behavior and offset calculations to account for fixed navigation
- **Responsive Design System**: Mobile-first approach with carefully crafted breakpoints (sm, md, lg) and reduced padding strategies for ultra-small viewports (< 400px)
- **Dynamic Hover States**: Complex gradient transitions and interactive elements with precise state management

### Advanced Styling
- **Tailwind CSS v4**: Leveraging the latest Tailwind features with custom keyframe animations and utility classes
- **Custom CSS Animations**: Handcrafted @keyframes for fadeIn and fadeInUp effects with configurable duration and easing
- **Backdrop Blur Effects**: Modern glassmorphism design with backdrop-blur utilities for navigation and hero elements
- **Gradient Systems**: Multi-layer gradient overlays and custom amber color palette integration

### Technical Challenges Solved
- **Fixed Navigation Offset**: Implemented precise padding calculations (pt-15) to prevent navbar from covering content when using smooth scroll anchor navigation
- **Viewport-Constrained Layouts**: Full-screen sections (min-h-screen) with flexbox centering, ensuring proper content fitting across all viewport sizes
- **Content Alignment**: Solved bullet point alignment issues in service cards using flex-shrink-0 and flexbox strategies
- **Horizontal Overflow Prevention**: Comprehensive overflow-x: hidden implementation across html, body, and root elements with min-width constraints

### Form Integration
- **Toast Notifications**: Integrated Sonner for elegant, non-intrusive user feedback
- **Accessible Forms**: Semantic HTML with proper label associations and ARIA attributes
- **Controlled Components**: React state management for form inputs with validation-ready architecture

## Technology Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4.1.12
- **Icons**: Lucide React
- **UI Components**: Custom-built components with Radix UI primitives
- **Animations**: CSS keyframes + Intersection Observer API

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── About.tsx          # About section component
│   │   ├── Contact.tsx        # Contact section wrapper
│   │   ├── ContactForm.tsx    # Contact form with validation
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Landing hero section
│   │   ├── Navigation.tsx     # Fixed navigation bar
│   │   ├── Services.tsx       # Service cards (Residential, Commercial, Construction)
│   │   └── ui/                # Reusable UI components
│   └── App.tsx                # Main application component
├── styles/
│   ├── tailwind.css           # Custom Tailwind configuration & animations
│   ├── fonts.css              # Typography setup
│   └── theme.css              # Color and theme variables
└── main.tsx                   # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Highlights

This project demonstrates proficiency in:
- Modern React patterns and hooks (useEffect, useState)
- Advanced CSS techniques and animation systems
- Responsive design principles and mobile optimization
- TypeScript for type-safe development
- Performance optimization strategies
- Component architecture and code organization
- Browser API integration (Intersection Observer)
- Cross-browser compatibility

## Performance Considerations

- Lazy loading for scroll-triggered animations
- Optimized image loading with proper sizing
- Minimized bundle size through selective component usage
- Efficient re-render management with React best practices

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Built with attention to detail, performance, and user experience.
