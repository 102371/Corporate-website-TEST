'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, BarChart3, Megaphone, Headphones } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
  },
  {
    icon: BarChart3,
    title: 'Business Consulting',
    description: 'Strategic guidance to help your business grow and succeed.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing strategies to boost your online presence.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock support to keep your business running smoothly.',
  },
]

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all hover:border-primary-300"
            >
              <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

