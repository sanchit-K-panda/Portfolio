import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))

app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString() 
  })
})

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend API is working!' })
})

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📝 Environment: ${process.env.NODE_ENV}`)
  console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL}`)
  console.log(`✅ Server is ready to accept requests`)
})

// Keep process alive
process.stdin.resume()

// Handle server errors
server.on('error', (error: any) => {
  console.error('❌ Server error:', error)
  process.exit(1)
})

process.on('SIGINT', () => {
  console.log('\n👋 Shutting down gracefully...')
  server.close(() => {
    console.log('✅ Server closed')
    process.exit(0)
  })
})

export default app
