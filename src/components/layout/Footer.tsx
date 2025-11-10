'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from 'react-icons/fa'
import { Newsletter } from '@/components/newsletter/Newsletter'

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { icon: FaGithub, href: 'https://github.com/sanchit', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/sanchit', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/sanchit', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:hello@sanchit.dev', label: 'Email' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
              Sanchit
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Blockchain Developer & Web3 Engineer crafting decentralized solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="my-12">
          <Newsletter />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Sanchit. Made with <FaHeart className="inline text-red-500 mx-1" /> and lots of{' '}
            <span className="font-mono">{'<code/>'}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
