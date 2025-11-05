'use client'

import { motion } from 'framer-motion'
import { Code, BarChart3, Megaphone, Headphones, Database, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices. From simple websites to complex enterprise solutions.',
    features: ['React & Next.js', 'Full-stack Development', 'API Integration', 'Performance Optimization'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Optimization'],
  },
  {
    icon: BarChart3,
    title: 'Business Consulting',
    description: 'Strategic guidance to help your business grow, optimize operations, and achieve long-term success.',
    features: ['Strategy Planning', 'Process Optimization', 'Market Analysis', 'Growth Consulting'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing strategies to boost your online presence and drive measurable results.',
    features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
  },
  {
    icon: Database,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to modernize your IT operations.',
    features: ['Cloud Migration', 'AWS & Azure', 'DevOps', 'Infrastructure as Code'],
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance to keep your business running smoothly.',
    features: ['24/7 Monitoring', 'Quick Response', 'Proactive Maintenance', 'Expert Support Team'],
  },
]

export default function ServiceList() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all hover:border-primary-300"
            >
              <div className="bg-primary-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="text-primary-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

