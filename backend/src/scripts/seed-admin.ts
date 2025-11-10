import bcrypt from 'bcryptjs'
import prisma from '../lib/prisma'
import dotenv from 'dotenv'

dotenv.config()

async function seedAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL || 'admin@sanchit.dev'
    const password = process.env.ADMIN_PASSWORD || 'admin123'

    // Check if admin already exists
    const existing = await prisma.user.findUnique({ where: { email } })

    if (existing) {
      console.log('❌ Admin user already exists')
      return
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'admin',
      },
    })

    console.log('✅ Admin user created successfully!')
    console.log(`📧 Email: ${admin.email}`)
    console.log(`🔑 Password: ${password}`)
    console.log('\n⚠️  Make sure to change the password after first login!')
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seedAdmin()
