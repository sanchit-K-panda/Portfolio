'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { VisitorsChart, ProjectsChart, SkillsChart } from '@/components/admin/Charts'
import { FaEye, FaMousePointer, FaClock, FaUsers } from 'react-icons/fa'

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    pageViews: 12543,
    uniqueVisitors: 3421,
    avgTimeOnSite: '3:24',
    bounceRate: '42%',
  })

  const statCards = [
    {
      title: 'Page Views',
      value: stats.pageViews.toLocaleString(),
      icon: FaEye,
      change: '+12.5%',
      trend: 'up',
    },
    {
      title: 'Unique Visitors',
      value: stats.uniqueVisitors.toLocaleString(),
      icon: FaUsers,
      change: '+8.3%',
      trend: 'up',
    },
    {
      title: 'Avg. Time on Site',
      value: stats.avgTimeOnSite,
      icon: FaClock,
      change: '-2.1%',
      trend: 'down',
    },
    {
      title: 'Bounce Rate',
      value: stats.bounceRate,
      icon: FaMousePointer,
      change: '-5.7%',
      trend: 'up',
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor your portfolio performance and visitor insights
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-black dark:hover:border-white shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="text-3xl text-gray-900 dark:text-white" />
                  <span className="text-sm font-semibold px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Visitors Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Weekly Visitors
            </h3>
            <div className="h-64">
              <VisitorsChart />
            </div>
          </motion.div>

          {/* Projects Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Projects by Category
            </h3>
            <div className="h-64">
              <ProjectsChart />
            </div>
          </motion.div>
        </div>

        {/* Skills Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Top Skills Distribution
          </h3>
          <div className="h-80 flex items-center justify-center">
            <div className="w-full max-w-md">
              <SkillsChart />
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              { action: 'New contact message', user: 'John Doe', time: '5 min ago', type: 'message' },
              { action: 'New newsletter subscriber', user: 'jane@example.com', time: '12 min ago', type: 'subscriber' },
              { action: 'Project viewed', user: 'Anonymous', time: '23 min ago', type: 'view' },
              { action: 'Blog post read', user: 'Anonymous', time: '1 hour ago', type: 'read' },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'message' ? 'bg-blue-500' :
                    activity.type === 'subscriber' ? 'bg-green-500' :
                    activity.type === 'view' ? 'bg-purple-500' :
                    'bg-orange-500'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.user}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  )
}
