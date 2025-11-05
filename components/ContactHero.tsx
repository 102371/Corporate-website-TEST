'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-primary-100">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

