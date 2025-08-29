import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-6 bg-white dark:bg-gray-900 hover:shadow-glow transition-shadow"
    >
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}
