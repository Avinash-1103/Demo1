import React from 'react'
import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import { FiCpu, FiZap, FiTool, FiShield, FiPackage } from 'react-icons/fi'

const data = [
  {icon: FiZap, title: 'Electrical wiring', description: 'Design & execution for residential, commercial and industrial projects.'},
  {icon: FiShield, title: 'MSCB approvals', description: 'End-to-end documentation and compliance handling.'},
  {icon: FiCpu, title: 'Transformer installation', description: 'ERECTION | TESTING | COMMISSIONING | AMC'},
  {icon: FiPackage, title: 'Load sanctioning', description: 'Load study, sanctioned capacity and meter liaison.'},
  {icon: FiTool, title: 'Maintenance', description: 'Preventive and breakdown maintenance with SLAs.'},
]

export default function Services() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>Services — Electric MSCB Contractor</title>
      </Helmet>
      <AnimatedSection>
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Professional, code-compliant electrical solutions.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((s) => <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description}/>)}
        </div>
      </AnimatedSection>
    </main>
  )
}
