import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import prisma from '../lib/prisma'
import { sendEmail } from '../lib/email'

const router = Router()

// POST /api/newsletter - Subscribe to newsletter
router.post(
  '/',
  [body('email').isEmail().normalizeEmail()],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { email } = req.body

      // Check if already subscribed
      const existing = await prisma.subscriber.findUnique({
        where: { email },
      })

      if (existing) {
        if (existing.active) {
          return res.status(400).json({ error: 'Email already subscribed' })
        } else {
          // Reactivate subscription
          await prisma.subscriber.update({
            where: { email },
            data: { active: true, confirmed: false },
          })
        }
      } else {
        // Create new subscriber
        await prisma.subscriber.create({
          data: { email },
        })
      }

      // Send confirmation email
      await sendEmail({
        to: email,
        subject: 'Confirm your newsletter subscription',
        html: `
          <h2>Welcome to my newsletter!</h2>
          <p>Thanks for subscribing! You'll receive updates on blockchain development, Web3 trends, and exclusive content.</p>
          <p>Best regards,<br/>Sanchit</p>
        `,
      })

      res.status(201).json({
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.',
      })
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      res.status(500).json({ error: 'Failed to subscribe. Please try again.' })
    }
  }
)

// POST /api/newsletter/unsubscribe - Unsubscribe from newsletter
router.post('/unsubscribe', [body('email').isEmail().normalizeEmail()], async (req, res) => {
  try {
    const { email } = req.body

    await prisma.subscriber.update({
      where: { email },
      data: { active: false },
    })

    res.json({ success: true, message: 'Successfully unsubscribed' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to unsubscribe' })
  }
})

export default router
