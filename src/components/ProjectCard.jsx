import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, subtitle, img }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-800/60 bg-white dark:bg-gray-900">
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm text-gray-500">Project Image</span>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  )
}
