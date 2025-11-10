'use client'

import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import { useState } from 'react'

export function DownloadCV() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    // Simulate download delay
    setTimeout(() => {
      // Create a link and trigger download
      const link = document.createElement('a')
      link.href = '/cv/Sanchit_Blockchain_Developer_CV.pdf'
      link.download = 'Sanchit_Blockchain_Developer_CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setIsDownloading(false)
    }, 1000)
  }

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDownloading ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Preparing...</span>
        </>
      ) : (
        <>
          <FaDownload className="w-5 h-5" />
          <span>Download CV</span>
        </>
      )}
    </motion.button>
  )
}
