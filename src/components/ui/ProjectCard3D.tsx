'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Tilt3D } from './Tilt3D'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
  onClick?: () => void
}

export function ProjectCard3D({
  title,
  description,
  image,
  tags,
  github,
  demo,
  featured = false,
  onClick,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Tilt3D className="h-full">
      <motion.div
        whileHover={{ y: -10 }}
        className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
        onClick={onClick}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-10 bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <FaStar />
            Featured
          </div>
        )}

        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
          )}
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick Actions on Hover */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 shadow-lg hover:bg-white transition-colors"
              >
                <FaGithub size={20} />
              </motion.a>
            )}
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 shadow-lg hover:bg-white transition-colors"
              >
                <FaExternalLinkAlt size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full border border-gray-300 dark:border-gray-600"
              >
                {tag}
              </motion.span>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />
        </div>
      </motion.div>
    </Tilt3D>
  )
}
