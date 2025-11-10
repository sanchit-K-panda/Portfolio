import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import rateLimit from 'express-rate-limit'
import prisma from '../lib/prisma'
import { sendEmail } from '../lib/email'

const router = Router()

// Stricter rate limit for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // 3 requests per window
  message: 'Too many contact submissions from this IP, please try again later.',
})

// POST /api/contact - Submit contact form
router.post(
  '/',
  contactLimiter,
  [
    body('name').trim().isLength({ min: 2, max: 100 }).escape(),
    body('email').isEmail().normalizeEmail(),
    body('subject').optional().trim().isLength({ max: 200 }).escape(),
    body('message').trim().isLength({ min: 10, max: 2000 }).escape(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { name, email, subject, message } = req.body

      // Save to database
      const contact = await prisma.contact.create({
        data: {
          name,
          email,
          subject: subject || 'New Contact Form Submission',
          message,
        },
      })

      // Send email notification to admin
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'admin@sanchit.dev',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })

      // Send confirmation email to user
      await sendEmail({
        to: email,
        subject: 'Thanks for reaching out!',
        html: `
          <h2>Thank you for contacting me!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br/>Sanchit</p>
        `,
      })

      res.status(201).json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      })
    } catch (error) {
      console.error('Contact form error:', error)
      res.status(500).json({ error: 'Failed to send message. Please try again.' })
    }
  }
)

export default router
