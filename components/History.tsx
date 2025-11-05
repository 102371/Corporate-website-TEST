'use client'

import { motion } from 'framer-motion'

export default function History() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Founded in 2008, we started as a small team with a big vision: to help
              businesses leverage technology for growth and success. Over the years,
              we've grown into a trusted partner for hundreds of companies worldwide.
            </p>
            <p className="text-gray-700 mb-4">
              Our commitment to excellence, innovation, and client satisfaction has
              been the driving force behind our success. We believe in building
              long-term relationships and delivering solutions that make a real impact.
            </p>
            <p className="text-gray-700">
              Today, we continue to evolve and adapt, staying at the forefront of
              industry trends and technologies to provide our clients with the best
              possible service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

