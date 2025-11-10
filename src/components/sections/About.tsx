'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DownloadCV } from '@/components/ui/DownloadCV'

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" ref={ref} className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a passionate blockchain developer with 5+ years of experience building decentralized applications and smart contracts.
            I specialize in Solidity, Web3 technologies, DeFi protocols, and NFT marketplaces, with deep expertise in Ethereum and Layer-2 solutions.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            My mission is to push the boundaries of what's possible with blockchain technology, creating secure and innovative
            decentralized solutions. I'm deeply involved in the Web3 ecosystem, contributing to open-source projects and staying
            at the forefront of blockchain innovation.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <DownloadCV />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
