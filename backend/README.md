# 🚀 Premium Blockchain Portfolio - Backend API

Award-winning portfolio backend with Express.js, MongoDB, and complete authentication system.

## 📋 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account or local MongoDB
- Email service (Gmail recommended for development)

### Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment file
copy .env.example .env

# Configure your environment variables in .env

# Generate Prisma Client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Start development server
npm run dev
```

## 🔐 Environment Variables

Update `.env` with your actual values:

```env
# MongoDB Connection
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/portfolio"

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Authentication
JWT_SECRET=your-secure-secret-key-minimum-32-characters
JWT_EXPIRES_IN=7d

# Email Configuration (Gmail Example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_FROM=noreply@sanchit.dev

# Admin Credentials
ADMIN_EMAIL=admin@sanchit.dev
ADMIN_PASSWORD=secure-password-here

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Getting Gmail App Password
1. Enable 2FA on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate app password for "Mail"
4. Use this password in EMAIL_PASS

## 🛣️ API Endpoints

### Public Endpoints

#### **Projects**
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project by ID

#### **Skills**
- `GET /api/skills` - Get all skills

#### **Experience**
- `GET /api/experience` - Get work experience

#### **Testimonials**
- `GET /api/testimonials` - Get approved testimonials

#### **Blog**
- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/:slug` - Get single blog post (increments view count)

#### **Contact Form**
- `POST /api/contact` - Submit contact message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Collaboration Inquiry",
    "message": "Hi, I'd like to discuss..."
  }
  ```

#### **Newsletter**
- `POST /api/newsletter` - Subscribe to newsletter
  ```json
  {
    "email": "user@example.com"
  }
  ```
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter

#### **Authentication**
- `POST /api/auth/login` - Admin login
  ```json
  {
    "email": "admin@sanchit.dev",
    "password": "your-password"
  }
  ```

#### **Health Check**
- `GET /health` - Server health status

## 🗄️ Database Schema

### Models

**Project**
- id, title, description, challenge, solution
- image, images[], tags[], category
- github, live, featured, order
- metrics (JSON), timestamps

**Skill**
- id, name, category, level, icon, color, order
- timestamps

**Experience**
- id, title, company, period, description
- technologies[], order, timestamps

**Testimonial**
- id, name, role, content, rating
- image, approved, order, timestamps

**Contact**
- id, name, email, subject, message
- read, replied, timestamps

**Subscriber**
- id, email, confirmed, active
- timestamps

**BlogPost**
- id, title, slug, excerpt, content
- featuredImage, category, tags[], published
- views, readTime, author, timestamps

**User**
- id, email, password (hashed), role
- timestamps

## 🔒 Security Features

- ✅ Rate limiting (15 min window, 100 requests)
- ✅ Contact form rate limiting (15 min, 3 submissions)
- ✅ CORS protection with whitelist
- ✅ Input validation with express-validator
- ✅ Password hashing with bcrypt
- ✅ JWT authentication for admin routes
- ✅ Environment variable protection
- ✅ SQL injection prevention (Prisma ORM)

## 📧 Email Features

- Contact form submission notifications (admin)
- Contact form confirmation emails (user)
- Newsletter subscription confirmation
- All emails use responsive HTML templates

## 🛠️ Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Prisma commands
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio (database GUI)
```

## 📦 Production Deployment

### Railway/Render Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Railway/Render**
   - Import your GitHub repository
   - Set environment variables
   - Deploy automatically

3. **Environment Variables (Production)**
   - Add all variables from `.env.example`
   - Use production MongoDB URL
   - Set `NODE_ENV=production`
   - Update `FRONTEND_URL` to your Vercel domain

### Database Setup

1. **MongoDB Atlas**
   - Create cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Get connection string
   - Whitelist IP addresses (0.0.0.0/0 for development)
   - Update `DATABASE_URL`

2. **Run Migrations**
   ```bash
   npm run prisma:migrate
   ```

## 🧪 Testing

### Test Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

### Test Newsletter
```bash
curl -X POST http://localhost:5000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "data": { },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "error": {
    "message": "Error description",
    "status": 400
  }
}
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Prisma Client Not Generated
```bash
npm run prisma:generate
```

### Email Not Sending
- Check Gmail app password is correct
- Verify 2FA is enabled
- Check EMAIL_HOST and EMAIL_PORT
- Review firewall settings

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)
- [JWT Authentication](https://jwt.io/introduction)

## 🤝 Support

For issues or questions:
- Email: hello@sanchit.dev
- GitHub Issues: Create an issue on the repository

---

**Built with ❤️ by Sanchit** | Blockchain & Web3 Developer
