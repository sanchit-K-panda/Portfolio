'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Senior Blockchain Developer',
    company: 'DeFi Labs',
    period: '2022 - Present',
    description: 'Leading development of DeFi protocols and smart contracts on Ethereum and Layer-2 solutions. Architecting secure, gas-optimized contracts and mentoring blockchain engineers.',
  },
  {
    title: 'Smart Contract Engineer',
    company: 'Web3 Ventures',
    period: '2020 - 2022',
    description: 'Built and audited smart contracts for NFT marketplaces, DAOs, and DeFi applications. Implemented security best practices and optimized gas efficiency.',
  },
  {
    title: 'Blockchain Developer',
    company: 'Crypto Solutions',
    period: '2018 - 2020',
    description: 'Developed decentralized applications and integrated Web3 wallets. Specialized in Solidity, Web3.js, and building user-friendly blockchain interfaces.',
  },
]

export function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" ref={ref} className="section bg-white dark:bg-gray-950">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="card p-4 md:p-6"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">{exp.title}</h3>
              <div className="text-sm md:text-base text-primary-600 dark:text-primary-400 mb-2">{exp.company}</div>
              <div className="text-xs md:text-sm text-gray-500 mb-4">{exp.period}</div>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
