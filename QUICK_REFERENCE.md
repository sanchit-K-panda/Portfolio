# 🚀 Quick Reference - Your Portfolio Commands

## Start Development

### Backend Server (Terminal 1)
```powershell
cd C:\Users\Sanchit\OneDrive\Desktop\Portfolio\next-portfolio\backend
npm run dev
```
✅ Runs on: **http://localhost:5000**

### Frontend Server (Terminal 2)
```powershell
cd C:\Users\Sanchit\OneDrive\Desktop\Portfolio\next-portfolio
npm run dev
```
✅ Runs on: **http://localhost:3000**

---

## Important URLs

| Service | URL | Description |
|---------|-----|-------------|
| **Homepage** | http://localhost:3000 | Main portfolio site |
| **Admin Login** | http://localhost:3000/admin/login | Admin panel login |
| **Admin Dashboard** | http://localhost:3000/admin/dashboard | Dashboard (after login) |
| **Backend API** | http://localhost:5000 | API server |
| **Health Check** | http://localhost:5000/health | API status |

---

## Admin Credentials

**Email**: `admin@sanchit.dev`  
**Password**: `admin123`

⚠️ Change password after first login in production!

---

## API Endpoints

### Public Endpoints
```bash
GET  /api/projects          # All projects
GET  /api/projects/:id      # Single project
GET  /api/skills            # All skills
GET  /api/experience        # Work history
GET  /api/testimonials      # Client testimonials
GET  /api/blog              # All blog posts
GET  /api/blog/:slug        # Single blog post
POST /api/contact           # Contact form
POST /api/newsletter        # Subscribe
POST /api/newsletter/unsubscribe  # Unsubscribe
```

### Auth Endpoints
```bash
POST /api/auth/login        # Admin login
```

---

## Test Commands

### Health Check
```powershell
curl http://localhost:5000/health
```

### Get Projects
```powershell
curl http://localhost:5000/api/projects
```

### Test Login
```powershell
curl -X POST http://localhost:5000/api/auth/login `
  -H "Content-Type: application/json" `
  -d '{\"email\":\"admin@sanchit.dev\",\"password\":\"admin123\"}'
```

### Test Contact Form
```powershell
curl -X POST http://localhost:5000/api/contact `
  -H "Content-Type: application/json" `
  -d '{\"name\":\"Test\",\"email\":\"test@test.com\",\"message\":\"Hello!\"}'
```

---

## MongoDB Setup (Optional but Recommended)

### Option 1: Local MongoDB
```powershell
# 1. Download: https://www.mongodb.com/try/download/community
# 2. Install MongoDB
# 3. Start MongoDB service
# 4. Already configured in backend/.env!

# Push schema
cd backend
npx prisma db push

# Create admin user
npm run seed:admin
```

### Option 2: MongoDB Atlas (Free Cloud)
```powershell
# 1. Create account: https://www.mongodb.com/cloud/atlas
# 2. Create free cluster
# 3. Get connection string
# 4. Update backend/.env:
#    DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/portfolio"

# Push schema
cd backend
npx prisma db push

# Create admin user
npm run seed:admin
```

---

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn (optional)
```

### Backend (.env)
```env
DATABASE_URL=mongodb://localhost:27017/portfolio
JWT_SECRET=8f3e9a7b2c1d4e5f6a7b8c9d0e1f2a3b...
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Email (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---

## File Structure

```
next-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout with Analytics
│   │   ├── sitemap.ts         # SEO sitemap
│   │   └── admin/
│   │       ├── login/         # Admin login
│   │       └── dashboard/     # Admin dashboard
│   └── components/
│       ├── ui/
│       │   ├── ParticleBackground.tsx
│       │   └── DownloadCV.tsx
│       ├── projects/
│       │   └── ProjectModal.tsx
│       ├── newsletter/
│       │   └── Newsletter.tsx
│       └── sections/
│           ├── Hero.tsx       # With particles
│           ├── Projects.tsx   # With filtering & modal
│           ├── Blog.tsx       # Blog posts
│           └── About.tsx      # With CV download
└── backend/
    ├── src/
    │   ├── server.ts          # Main server
    │   ├── routes/            # 8 API routes
    │   ├── lib/               # Utils
    │   └── scripts/           # Seed scripts
    └── prisma/
        └── schema.prisma      # Database models
```

---

## Features Checklist

### ✅ Frontend Features
- [x] Particle background with mouse interaction
- [x] Project modal with image carousel
- [x] Blog section with posts
- [x] Category filtering (All/DeFi/NFT/DAO)
- [x] Newsletter subscription
- [x] CV download button
- [x] SEO optimization (sitemap, robots.txt, structured data)
- [x] Admin login page
- [x] Admin dashboard
- [x] Vercel Analytics
- [x] Sentry error tracking setup
- [x] Dark mode support
- [x] Responsive design
- [x] Animations with Framer Motion

### ✅ Backend Features
- [x] Express server with TypeScript
- [x] 8 RESTful API endpoints
- [x] JWT authentication
- [x] MongoDB with Prisma ORM
- [x] Email integration (Nodemailer)
- [x] Rate limiting
- [x] Input validation
- [x] CORS protection
- [x] Error handling
- [x] Environment configuration

---

## Useful Commands

### Development
```powershell
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production
npm start

# Type check
npm run type-check

# Lint
npm run lint
```

### Backend Specific
```powershell
# Generate Prisma Client
npm run prisma:generate

# Push schema to DB
npx prisma db push

# Open Prisma Studio (DB GUI)
npm run prisma:studio

# Create admin user
npm run seed:admin
```

---

## Troubleshooting

### Port Already in Use
```powershell
# Find process on port 3000
netstat -ano | findstr :3000

# Kill process
taskkill /PID <PID> /F
```

### Backend Won't Start
- Check MongoDB is running (if using local)
- Verify .env file exists in backend/
- Check port 5000 is free

### Frontend Build Errors
```powershell
# Clear cache and rebuild
rm -r .next
rm -r node_modules
npm install
npm run dev
```

### Prisma Issues
```powershell
cd backend
npm run prisma:generate
npx prisma db push
```

---

## Deploy to Production

### Frontend (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd next-portfolio
vercel

# Add environment variables in Vercel dashboard:
# - NEXT_PUBLIC_API_URL=your-backend-url
# - NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn (optional)
```

### Backend (Railway)
```bash
# 1. Push to GitHub
# 2. Go to: https://railway.app
# 3. New Project → Deploy from GitHub
# 4. Add environment variables from backend/.env
# 5. Deploy automatically
```

---

## Documentation

- **API Docs**: `backend/README.md`
- **Setup Guide**: `NEXT_STEPS.md`
- **Feature List**: `ALL_FEATURES_COMPLETE.md`
- **This Guide**: `QUICK_REFERENCE.md`

---

## Need Help?

Common issues and solutions are in `NEXT_STEPS.md` under "Troubleshooting" section.

---

**Pro Tip**: Keep both terminal windows open while developing. The backend and frontend run simultaneously and communicate via the API!
