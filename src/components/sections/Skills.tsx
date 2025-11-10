'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaEthereum, FaGitAlt, FaCube, FaCode } from 'react-icons/fa'
import { SiTypescript, SiSolidity, SiIpfs, SiRust, SiPolkadot } from 'react-icons/si'

const skills = [
  { name: 'Solidity', icon: SiSolidity, level: 95, color: '#363636' },
  { name: 'Ethereum', icon: FaEthereum, level: 92, color: '#627EEA' },
  { name: 'Web3.js', icon: FaCode, level: 90, color: '#F16822' },
  { name: 'Hardhat', icon: FaCube, level: 88, color: '#FFF100' },
  { name: 'React', icon: FaReact, level: 93, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, level: 90, color: '#3178C6' },
  { name: 'IPFS', icon: SiIpfs, level: 85, color: '#65C2CB' },
  { name: 'Rust', icon: SiRust, level: 82, color: '#CE412B' },
  { name: 'Node.js', icon: FaNodeJs, level: 87, color: '#339933' },
  { name: 'Polkadot', icon: SiPolkadot, level: 80, color: '#E6007A' },
  { name: 'Git', icon: FaGitAlt, level: 94, color: '#F05032' },
  { name: 'Truffle', icon: FaEthereum, level: 84, color: '#5E464D' },
]

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" ref={ref} className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card p-4 md:p-6 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl mb-3 md:mb-4 mx-auto w-fit"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </motion.div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-gray-100 mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
