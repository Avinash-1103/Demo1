import React from 'react'
import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>Projects — Electric MSCB Contractor</title>
      </Helmet>
      <AnimatedSection>
        <h1 className="text-3xl font-bold">Projects & Clients</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">A snapshot of our recent work and happy clients.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title:'Industrial Plant – 2MVA Transformer', subtitle:'Turnkey supply & commissioning'},
            {title:'Commercial Complex – Wiring & Panels', subtitle:'LV distribution & approvals'},
            {title:'Residential Township – Load Sanction', subtitle:'Sanction & meter installations'},
            {title:'Manufacturing Unit – Preventive AMC', subtitle:'24x7 on-call support'},
            {title:'IT Park – HT/LT Panels', subtitle:'Design & execution'},
            {title:'Hospital – Electrical Audit', subtitle:'Compliance & safety upgrades'},
          ].map((p) => (
            <ProjectCard key={p.title} title={p.title} subtitle={p.subtitle} />
          ))}
        </div>
      </AnimatedSection>
    </main>
  )
}
