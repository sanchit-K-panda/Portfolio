import { Router } from 'express'
import prisma from '../lib/prisma'

const router = Router()

// GET /api/skills - Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: [{ order: 'asc' }, { level: 'desc' }],
    })
    res.json(skills)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' })
  }
})

export default router
