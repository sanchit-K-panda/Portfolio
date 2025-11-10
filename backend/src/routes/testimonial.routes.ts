import { Router } from 'express'
import prisma from '../lib/prisma'

const router = Router()

// GET /api/testimonials - Get all approved testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { approved: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    })
    res.json(testimonials)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' })
  }
})

export default router
