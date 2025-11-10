'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: 'Building Secure Smart Contracts: Best Practices for 2025',
    excerpt: 'Learn the essential security patterns and common vulnerabilities to avoid when developing smart contracts on Ethereum.',
    image: '/blog/smart-contracts.jpg',
    category: 'Security',
    readTime: '8 min read',
    date: 'Oct 25, 2025',
    slug: 'building-secure-smart-contracts-2025',
  },
  {
    id: 2,
    title: 'DeFi Protocol Design: Lessons from Real-World Projects',
    excerpt: 'Explore the architecture decisions and trade-offs in designing production-ready DeFi protocols.',
    image: '/blog/defi-design.jpg',
    category: 'DeFi',
    readTime: '12 min read',
    date: 'Oct 20, 2025',
    slug: 'defi-protocol-design-lessons',
  },
  {
    id: 3,
    title: 'Gas Optimization Techniques for Solidity Developers',
    excerpt: 'Practical tips and patterns to reduce gas costs in your smart contracts without compromising security.',
    image: '/blog/gas-optimization.jpg',
    category: 'Development',
    readTime: '10 min read',
    date: 'Oct 15, 2025',
    slug: 'gas-optimization-techniques-solidity',
  },
]

export function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="blog" ref={ref} className="section bg-white dark:bg-gray-950">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Insights and tutorials on blockchain development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card overflow-hidden group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-4 transition-all">
                    <span>Read More</span>
                    <FaArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
          >
            <span>View All Posts</span>
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
