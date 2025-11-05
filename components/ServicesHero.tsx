'use client'

import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-100">
            Comprehensive solutions designed to help your business thrive in today's
            competitive landscape.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

