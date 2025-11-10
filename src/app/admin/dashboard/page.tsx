'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AdminLayout } from '@/components/admin/AdminLayout'

interface DashboardStats {
  projects: number
  skills: number
  testimonials: number
  contacts: number
  subscribers: number
  blogPosts: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    projects: 0,
    skills: 0,
    testimonials: 0,
    contacts: 0,
    subscribers: 0,
    blogPosts: 0,
  })

  useEffect(() => {
    // Fetch dashboard stats from backend
    const fetchStats = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
        
        // Fetch all data in parallel
        const [projects, skills, testimonials, contacts, subscribers, blogPosts] = await Promise.all([
          fetch(`${API_URL}/api/projects`).then(r => r.json()),
          fetch(`${API_URL}/api/skills`).then(r => r.json()),
          fetch(`${API_URL}/api/testimonials`).then(r => r.json()),
          fetch(`${API_URL}/api/contact`).then(r => r.json()),
          fetch(`${API_URL}/api/newsletter`).then(r => r.json()),
          fetch(`${API_URL}/api/blog`).then(r => r.json()),
        ])

        setStats({
          projects: Array.isArray(projects) ? projects.length : 0,
          skills: Array.isArray(skills) ? skills.length : 0,
          testimonials: Array.isArray(testimonials) ? testimonials.length : 0,
          contacts: Array.isArray(contacts) ? contacts.length : 0,
          subscribers: Array.isArray(subscribers) ? subscribers.length : 0,
          blogPosts: Array.isArray(blogPosts) ? blogPosts.length : 0,
        })
      } catch (error) {
        console.error('Failed to fetch stats:', error)
        // Keep stats at 0 if fetch fails
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    { title: 'Projects', value: stats.projects, icon: '📁', link: '/admin/projects' },
    { title: 'Skills', value: stats.skills, icon: '⚡', link: '/admin/skills' },
    { title: 'Testimonials', value: stats.testimonials, icon: '💬', link: '/admin/testimonials' },
    { title: 'Contacts', value: stats.contacts, icon: '✉️', link: '/admin/contacts' },
    { title: 'Subscribers', value: stats.subscribers, icon: '📧', link: '/admin/subscribers' },
    { title: 'Blog Posts', value: stats.blogPosts, icon: '📝', link: '/admin/blog' },
  ]

  const quickActions = [
    { title: 'New Project', icon: '➕', link: '/admin/projects/new' },
    { title: 'New Blog Post', icon: '✍️', link: '/admin/blog/new' },
    { title: 'View Messages', icon: '📨', link: '/admin/contacts' },
    { title: 'Settings', icon: '⚙️', link: '/admin/settings' },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={stat.link}>
                <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-black dark:hover:border-white hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                    <div className="text-4xl opacity-60">{stat.icon}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link key={action.title} href={action.link}>
                <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer text-center">
                  <div className="text-3xl mb-2">{action.icon}</div>
                  <p className="text-sm font-medium">{action.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl">🚧</div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                Dashboard Under Construction
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                The admin dashboard is being built! Features coming soon:
              </p>
              <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                <li>✅ Authentication & Login</li>
                <li>🔄 Projects CRUD (Create, Read, Update, Delete)</li>
                <li>🔄 Blog Post Editor with MDX support</li>
                <li>🔄 Skills & Experience Management</li>
                <li>🔄 Contact Messages Viewer</li>
                <li>🔄 Newsletter Subscriber Management</li>
                <li>🔄 Analytics & Insights</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  )
}
