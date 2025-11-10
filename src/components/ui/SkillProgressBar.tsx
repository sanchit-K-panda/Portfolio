'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SkillProgressBarProps {
  name: string
  level: number
  icon?: string
  color?: string
  delay?: number
}

export function SkillProgressBar({ 
  name, 
  level, 
  icon, 
  color = 'from-primary to-secondary',
  delay = 0 
}: SkillProgressBarProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-2xl">{icon}</span>}
          <span className="font-semibold text-gray-800 dark:text-gray-200">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 0.5, type: 'spring' }}
          className="text-sm font-bold text-black dark:text-white"
        >
          {level}%
        </motion.span>
      </div>

      <div className="relative h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 1, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 bg-black dark:bg-white rounded-full"
        >
          {/* Animated shine effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'linear',
              delay: delay + 1,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-black/20 to-transparent"
            style={{ width: '50%' }}
          />
        </motion.div>

        {/* Animated dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.8 }}
          className="absolute inset-0 flex items-center justify-end pr-2"
          style={{ width: `${level}%` }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
              }}
              className="w-1 h-1 bg-white rounded-full mx-0.5"
            />
          ))}
        </motion.div>
      </div>

      {/* Hover effect text */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileHover={{ opacity: 1, height: 'auto' }}
        className="mt-1 text-xs text-gray-600 dark:text-gray-400 overflow-hidden"
      >
        {level >= 90 && '🔥 Expert Level'}
        {level >= 70 && level < 90 && '⭐ Advanced'}
        {level >= 50 && level < 70 && '💪 Intermediate'}
        {level < 50 && '📚 Learning'}
      </motion.div>
    </motion.div>
  )
}
