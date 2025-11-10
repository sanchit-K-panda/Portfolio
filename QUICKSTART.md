# Quick Start Guide

## Fastest Way to Get Running

### Option 1: Automated Setup (Recommended)

Run the setup script in PowerShell:

```powershell
cd C:\Users\Sanchit\OneDrive\Desktop\Portfolio\next-portfolio
.\setup.ps1
```

### Option 2: Manual Setup

```powershell
# 1. Navigate to project
cd C:\Users\Sanchit\OneDrive\Desktop\Portfolio\next-portfolio

# 2. Install dependencies
npm install

# 3. Copy environment file
copy .env.example .env.local

# 4. Start development server
npm run dev
```

## 🚀 Your site will be live at:
**http://localhost:3000**

## ⚡ Next Steps

1. **Customize Content**:
   - Edit `src/components/sections/Hero.tsx` - Update your name
   - Edit `src/components/sections/Projects.tsx` - Add your projects
   - Edit `src/components/sections/Skills.tsx` - Update your skills
   - Edit `src/components/sections/Experience.tsx` - Add your experience

2. **Update Links**:
   - Social media links in `src/components/sections/Hero.tsx`
   - Footer links in `src/components/layout/Footer.tsx`

3. **Add Images**:
   - Place project images in `public/projects/`
   - Update image paths in components

4. **Deploy**:
   - Push to GitHub
   - Deploy to Vercel (recommended)
   - Configure environment variables on Vercel

## 📝 Common Commands

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm run start      # Start production server
npm run lint       # Run linter
```

## 🎨 Customization Priority

### High Priority (Do First)
- [ ] Update name in Hero section
- [ ] Change social media links
- [ ] Add your actual projects
- [ ] Update skills list
- [ ] Modify experience timeline

### Medium Priority
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Add testimonials
- [ ] Configure contact form backend

### Low Priority
- [ ] Add more animations
- [ ] Create additional pages
- [ ] Set up analytics
- [ ] Add blog section

## 🐛 Issues?

If you encounter any issues:

1. **Clear cache**: Delete `.next` folder and run `npm run dev` again
2. **Reinstall**: Delete `node_modules`, run `npm install`
3. **Check Node version**: Must be 18.0.0 or higher

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Need Help?** Check the main README.md for detailed documentation!
