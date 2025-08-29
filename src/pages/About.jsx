import React from 'react'
import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>About Us — Electric MSCB Contractor</title>
      </Helmet>
      <AnimatedSection>
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          We are a certified MSCB electrical contractor with 10+ years of experience across residential,
          commercial, and industrial sectors. Our team is trained in the latest safety standards and
          compliance procedures, ensuring every job passes inspection the first time.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-6 bg-white dark:bg-gray-900">
            <h3 className="font-semibold">Certifications</h3>
            <ul className="mt-3 list-disc list-inside text-sm">
              <li>Licensed MSCB Contractor (License No: MSCB-XXXX-2025)</li>
              <li>ISO 9001:2015 Quality Management</li>
              <li>Safety & First Aid Certified</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-6 bg-white dark:bg-gray-900">
            <h3 className="font-semibold">Why Trust Us</h3>
            <ul className="mt-3 list-disc list-inside text-sm">
              <li>Transparent estimates and clear timelines</li>
              <li>Guaranteed workmanship and post-project support</li>
              <li>Dedicated liaison for approvals & inspections</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
