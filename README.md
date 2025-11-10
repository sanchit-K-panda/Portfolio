# 🚀 Sanchit's Premium Portfolio Website

A stunning, high-performance portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features advanced animations, smooth transitions, dark mode, and a fully responsive design.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Preview)

## ✨ Features

### 🎨 Design & UI
- **Animated Hero Section** with gradient mesh background and mouse parallax
- **Type Animation Effect** for dynamic role display
- **Glassmorphism UI Elements** with backdrop blur effects
- **Custom Cursor** with smooth tracking and pointer interactions
- **Dark/Light Mode** with smooth color transitions
- **Responsive Design** optimized for all devices (mobile, tablet, desktop)

### 🎭 Animations & Interactions
- **Framer Motion** for sophisticated animations
- **Scroll-triggered animations** using Intersection Observer
- **Animated skill bars** that fill on scroll
- **Smooth page transitions** and micro-interactions
- **Parallax effects** on hero section
- **Hover animations** on all interactive elements
- **Loading skeleton screens** with shimmer effects
- **Confetti animation** on form submission

### 📱 Sections
- **Hero** - Animated landing with typewriter effect
- **About** - Introduction and personal statement
- **Stats** - Animated counters for achievements
- **Skills** - Rotating icons with progress bars
- **Experience** - Timeline of work history
- **Projects** - Showcase of featured work
- **Testimonials** - Client reviews and ratings
- **Contact** - Form with validation and animations

### ⚡ Performance
- **Next.js 14 App Router** for optimal performance
- **Image Optimization** with Next/Image
- **Code Splitting** for faster load times
- **GPU Acceleration** for smooth animations
- **Lazy Loading** for images and components
- **Lighthouse Score 95+** target

### ♿ Accessibility
- **WCAG 2.1 AA Compliant**
- **Keyboard Navigation** support
- **ARIA Labels** for screen readers
- **Respect for `prefers-reduced-motion`**
- **Semantic HTML** structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (React 18)
- **Language**: TypeScript 5.3+
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 11+, React Spring
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: React Icons 5+
- **Type Animation**: react-type-animation
- **Confetti**: canvas-confetti
- **Theme**: next-themes
- **Fonts**: Inter, Space Grotesk, JetBrains Mono

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **npm** or **yarn** or **pnpm**
- **Git**

## 🚀 Quick Start

### 1. Clone or navigate to the project

```bash
cd C:\Users\Sanchit\OneDrive\Desktop\Portfolio\next-portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Sentry (Optional)
NEXT_PUBLIC_SENTRY_DSN=
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
next-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & Tailwind
│   │   ├── layout.tsx            # Root layout with fonts
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   ├── layout/
│   │   │   └── Footer.tsx        # Footer component
│   │   ├── navigation/
│   │   │   └── Navbar.tsx        # Navigation bar
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero section
│   │   │   ├── About.tsx         # About section
│   │   │   ├── Stats.tsx         # Statistics section
│   │   │   ├── Skills.tsx        # Skills section
│   │   │   ├── Experience.tsx    # Experience timeline
│   │   │   ├── Projects.tsx      # Projects showcase
│   │   │   ├── Testimonials.tsx  # Client testimonials
│   │   │   └── Contact.tsx       # Contact form
│   │   ├── ui/
│   │   │   ├── CustomCursor.tsx  # Custom cursor effect
│   │   │   ├── ScrollProgress.tsx # Scroll progress bar
│   │   │   └── ScrollToTop.tsx   # Scroll to top button
│   │   └── Providers.tsx         # Theme & animation providers
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   └── types/
│       └── index.ts              # TypeScript types
├── public/
│   └── (static assets)
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your information:

**src/app/layout.tsx** - Metadata & SEO:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Your description here',
  // ... update all metadata
}
```

**src/components/sections/Hero.tsx** - Name and titles:
```typescript
// Change name
I'm <span>Your Name</span>

// Change roles in TypeAnimation
['Your Role 1', 2000, 'Your Role 2', 2000, ...]
```

### 2. Social Links

Update social links in:
- **src/components/sections/Hero.tsx**
- **src/components/layout/Footer.tsx**

```typescript
{ href: 'https://github.com/yourname', label: 'GitHub' },
{ href: 'https://linkedin.com/in/yourname', label: 'LinkedIn' },
```

### 3. Projects

Edit **src/components/sections/Projects.tsx**:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    image: '/path/to/image.jpg',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/...',
    live: 'https://...',
  },
]
```

### 4. Skills

Edit **src/components/sections/Skills.tsx**:
```typescript
const skills = [
  { name: 'Skill Name', icon: IconComponent, level: 90, color: '#hex' },
]
```

### 5. Experience

Edit **src/components/sections/Experience.tsx**:
```typescript
const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    period: 'Year - Year',
    description: 'What you did',
  },
]
```

### 6. Colors & Theme

Edit **tailwind.config.ts** to customize colors:
```typescript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  accent: { /* your accent colors */ },
}
```

### 7. Fonts

The project uses three fonts:
- **Inter** - Body text
- **Space Grotesk** - Headings
- **JetBrains Mono** - Code/monospace

To change fonts, update **src/app/layout.tsx**.

## 🔧 Scripts

```bash
# Development
npm run dev          # Start development server at localhost:3000

# Building
npm run build        # Create production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

```bash
npm run build
```

Then drag the `.next` folder to Netlify's deploy interface.

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- **Railway**
- **Render**
- **AWS Amplify**
- **Google Cloud Run**
- **Digital Ocean App Platform**

## 📊 Performance Optimization Tips

1. **Optimize Images**: Use WebP format and Next/Image component
2. **Minimize JavaScript**: Code splitting is automatic with Next.js
3. **Use CDN**: Deploy to Vercel for global CDN
4. **Enable Caching**: Configure cache headers
5. **Lazy Load**: Components load only when needed
6. **Reduce Bundle Size**: Remove unused dependencies

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear .next directory
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### TypeScript Errors

All type errors should resolve after running:
```bash
npm install
```

### Animation Issues

If animations are not working:
1. Check browser compatibility
2. Ensure JavaScript is enabled
3. Check for `prefers-reduced-motion` setting

## 📝 License

This project is licensed under the MIT License - feel free to use it for your own portfolio!

## 👤 Author

**Sanchit**
- Portfolio: [https://sanchit-portfolio.vercel.app](https://sanchit-portfolio.vercel.app)
- GitHub: [@sanchit](https://github.com/sanchit)
- LinkedIn: [sanchit](https://linkedin.com/in/sanchit)

## 🙏 Acknowledgments

- Design inspiration from premium portfolio templates
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📧 Support

For questions or issues:
- Open an issue on GitHub
- Email: hello@sanchit.dev

---

**Made with ❤️ and lots of <code/>**

⭐ Star this repo if you found it helpful!
