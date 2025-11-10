'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from 'react-icons/fa'
import { ParticleBackground } from '@/components/ui/ParticleBackground'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 animate-gradient">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(168, 85, 247, 0.3) 0px, transparent 50%),
            radial-gradient(at 50% 80%, rgba(249, 115, 22, 0.3) 0px, transparent 50%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Floating Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-72 h-72 rounded-full bg-white/5 backdrop-blur-3xl"
          animate={{
            x: [0, 100 * (i + 1), 0],
            y: [0, 50 * (i + 1), 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: i * 0.5,
          }}
          style={{
            left: `${20 * i}%`,
            top: `${15 * i}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6 py-12">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-8"
        >
          <div className="glass-strong px-6 py-3 rounded-full text-white/90 text-sm md:text-base font-medium shadow-lg">
            👋 Welcome to my portfolio
          </div>
        </motion.div>

        {/* Name with Parallax */}
        <motion.div
          style={{
            x: useTransform(useMotionValue(mousePosition.x), [-0.5, 0.5], [-20, 20]),
            y: useTransform(useMotionValue(mousePosition.y), [-0.5, 0.5], [-20, 20]),
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold mb-6 leading-tight text-white"
          >
            I&apos;m <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">Sanchit</span>
          </motion.h1>
        </motion.div>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 font-light min-h-[48px] flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              'Blockchain Developer',
              2000,
              'Web3 Engineer',
              2000,
              'Smart Contract Architect',
              2000,
              'DeFi Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl lg:max-w-3xl mx-auto mb-10 leading-relaxed px-4"
        >
          Building decentralized applications and smart contracts for the future of Web3.
          Specializing in DeFi protocols, NFT marketplaces, and blockchain solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-2xl hover:shadow-white/50 transition-all text-base md:text-lg"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all text-base md:text-lg"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-4 sm:gap-6 mb-16"
        >
          {[
            { Icon: FaGithub, href: 'https://github.com/sanchit', label: 'GitHub' },
            { Icon: FaLinkedin, href: 'https://linkedin.com/in/sanchit', label: 'LinkedIn' },
            { Icon: FaTwitter, href: 'https://twitter.com/sanchit', label: 'Twitter' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-all"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2 },
            y: { duration: 2, repeat: Infinity },
          }}
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <FaChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  )
}
