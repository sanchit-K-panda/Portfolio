import { Router } from 'express'
import prisma from '../lib/prisma'

const router = Router()

// GET /api/experience - Get all experience
router.get('/', async (req, res) => {
  try {
    const experience = await prisma.experience.findMany({
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    })
    res.json(experience)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experience' })
  }
})

export default router
