'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '50+', label: 'Team Members' },
  { value: '15+', label: 'Years Experience' },
]

export default function Stats() {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-200 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

