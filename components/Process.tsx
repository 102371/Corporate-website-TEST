'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and challenges.',
    number: '01',
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'We develop a customized strategy tailored to your specific needs.',
    number: '02',
  },
  {
    icon: Code2,
    title: 'Implementation',
    description: 'Our team executes the plan with precision and attention to detail.',
    number: '03',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We launch your solution and provide ongoing support for success.',
    number: '04',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="text-primary-600 text-6xl font-bold opacity-20 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-primary-300"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

