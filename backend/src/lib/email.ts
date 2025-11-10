import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  html: string
}

// Create transporter only if email credentials are configured
let transporter: nodemailer.Transporter | null = null

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

export async function sendEmail({ to, subject, html }: EmailOptions): Promise<void> {
  if (!transporter) {
    console.log('⚠️  Email not configured - skipping email to:', to)
    console.log('   Subject:', subject)
    return // Don't throw error, just log and continue
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@sanchit.dev',
      to,
      subject,
      html,
    })
    console.log(`✅ Email sent to ${to}`)
  } catch (error) {
    console.error('❌ Email error:', error)
    // Don't throw error - email is optional, the form submission should still work
    console.log('⚠️  Continuing without email notification')
  }
}
