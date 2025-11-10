import { Router } from 'express'
import prisma from '../lib/prisma'

const router = Router()

// GET /api/blog - Get all published blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        featuredImage: true,
        category: true,
        tags: true,
        readTime: true,
        author: true,
        createdAt: true,
      },
    })
    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' })
  }
})

// GET /api/blog/:slug - Get single blog post
router.get('/:slug', async (req, res) => {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug: req.params.slug },
    })
    
    if (!post || !post.published) {
      return res.status(404).json({ error: 'Blog post not found' })
    }

    // Increment view count
    await prisma.blogPost.update({
      where: { id: post.id },
      data: { views: post.views + 1 },
    })

    res.json(post)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog post' })
  }
})

export default router
