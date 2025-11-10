'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'CTO, DeFi Protocol',
    content: 'Sanchit\'s expertise in smart contract development is exceptional. The DeFi protocol was delivered with thorough testing, gas optimization, and security best practices that exceeded industry standards.',
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Founder, NFT Marketplace',
    content: 'Working with Sanchit on our NFT platform was outstanding. Deep blockchain knowledge, clean smart contract code, and excellent Web3 integration. Highly recommend for any Web3 project!',
    rating: 5,
  },
]

export function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="testimonials" ref={ref} className="section bg-white dark:bg-gray-950">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-4">
            Testimonials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="card p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm md:text-base" />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{testimonial.content}</p>
              <div>
                <div className="font-bold text-sm md:text-base">{testimonial.name}</div>
                <div className="text-xs md:text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
