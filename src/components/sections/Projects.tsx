'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { ProjectModal } from '@/components/projects/ProjectModal'

const projects = [
  {
    id: 1,
    title: 'DeFi Lending Protocol',
    description: 'Decentralized lending platform with automated liquidation and variable interest rates',
    image: '/projects/ecommerce.jpg',
    tags: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'Chainlink'],
    category: 'DeFi',
    github: '#',
    live: '#',
    challenge: 'Creating a secure and efficient lending protocol that handles liquidations automatically while maintaining user trust and preventing exploits.',
    solution: 'Implemented smart contract architecture with Chainlink oracles for price feeds, automated liquidation bots, and comprehensive test coverage achieving 98% code coverage.',
    metrics: [
      { label: 'TVL', value: '$2.5M+' },
      { label: 'Users', value: '1,200+' },
      { label: 'Gas Saved', value: '40%' },
      { label: 'Security Score', value: '98/100' },
    ],
    images: ['/projects/ecommerce.jpg', '/projects/ecommerce.jpg', '/projects/ecommerce.jpg'],
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    description: 'Full-featured NFT marketplace with lazy minting and royalty distribution',
    image: '/projects/taskapp.jpg',
    tags: ['Solidity', 'Web3.js', 'IPFS', 'Next.js', 'ERC-721'],
    category: 'NFT',
    github: '#',
    live: '#',
    challenge: 'Building a scalable NFT marketplace that supports lazy minting, royalty payments, and decentralized storage while keeping gas costs low.',
    solution: 'Developed ERC-721 and ERC-1155 compatible contracts with lazy minting, integrated IPFS for metadata storage, and implemented EIP-2981 for royalty standards.',
    metrics: [
      { label: 'NFTs Sold', value: '5,000+' },
      { label: 'Volume', value: '$800K+' },
      { label: 'Creators', value: '450+' },
      { label: 'Avg Gas', value: '0.02 ETH' },
    ],
    images: ['/projects/taskapp.jpg', '/projects/taskapp.jpg'],
  },
  {
    id: 3,
    title: 'DAO Governance Platform',
    description: 'Decentralized autonomous organization with on-chain voting and treasury management',
    image: '/projects/chatbot.jpg',
    tags: ['Solidity', 'Hardhat', 'TypeScript', 'The Graph', 'IPFS'],
    category: 'DAO',
    github: '#',
    live: '#',
    challenge: 'Creating a transparent and efficient governance system that allows community participation while preventing manipulation and ensuring fair voting.',
    solution: 'Built modular DAO contracts with timelock mechanisms, quadratic voting, and The Graph integration for efficient proposal tracking and historical data.',
    metrics: [
      { label: 'Members', value: '3,500+' },
      { label: 'Proposals', value: '150+' },
      { label: 'Treasury', value: '$1.2M+' },
      { label: 'Participation', value: '72%' },
    ],
    images: ['/projects/chatbot.jpg'],
  },
]

const categories = ['All', 'DeFi', 'NFT', 'DAO']

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" ref={ref} className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Some of my recent blockchain work
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">View Details →</span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs md:text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs md:text-sm text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4 text-sm md:text-base">
                    <a 
                      href={project.github} 
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a 
                      href={project.live} 
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  )
}
