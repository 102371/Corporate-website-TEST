'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '123 Business Street\nNew York, NY 10001\nUnited States',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567\n+1 (555) 123-4568',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@corporate.com\nsupport@corporate.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-6">
        {contactInfo.map((info) => (
          <div key={info.title} className="flex items-start">
            <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <info.icon className="text-primary-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

