import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import { FiCpu, FiZap, FiTool, FiShield, FiPackage } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Home — Electric MSCB Contractor</title>
        <meta name="description" content="Certified MSCB contractor providing wiring, approvals, transformer installation, load sanctioning, and maintenance." />
      </Helmet>

      <Hero />

      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We are certified and experienced professionals delivering safe, code-compliant electrical projects.
              From MSCB approvals to turnkey transformer installations — we handle it all with transparent timelines.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><FiShield/> Certified & Insured</li>
              <li className="flex items-center gap-2"><FiZap/> On-time Execution</li>
              <li className="flex items-center gap-2"><FiTool/> Preventive Maintenance</li>
            </ul>
            <div className="mt-6">
              <Link to="/about" className="text-electric.blue hover:underline">Learn more →</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-6 bg-white dark:bg-gray-900">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {icon: FiZap, title: 'Electrical wiring'},
                {icon: FiShield, title: 'MSCB approvals'},
                {icon: FiCpu, title: 'Transformer installation'},
                {icon: FiPackage, title: 'Load sanctioning'},
              ].map((s) => (
                <div key={s.title} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                  <s.icon/>
                  <span className="text-sm font-medium">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {icon: FiZap, title: 'Electrical wiring', description: 'New builds, retrofits, and panel upgrades with safety-first approach.'},
            {icon: FiShield, title: 'MSCB approvals', description: 'Complete documentation and liaison for swift approvals.'},
            {icon: FiCpu, title: 'Transformer installation', description: 'Supply, erection, testing and commissioning.'},
            {icon: FiPackage, title: 'Load sanctioning', description: 'Accurate load calculations and sanctioned capacity filings.'},
            {icon: FiTool, title: 'Maintenance', description: 'AMC, thermography checks, and preventive maintenance plans.'},
          ].map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Projects & Clients</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title:'Industrial Plant – 2MVA Transformer', subtitle:'Turnkey supply & commissioning'},
            {title:'Commercial Complex – Wiring & Panels', subtitle:'LV distribution & approvals'},
            {title:'Residential Township – Load Sanction', subtitle:'Sanction & meter installations'},
          ].map((p) => (
            <ProjectCard key={p.title} title={p.title} subtitle={p.subtitle} />
          ))}
        </div>
      </AnimatedSection>
    </main>
  )
}
