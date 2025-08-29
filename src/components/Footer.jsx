import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiLinkedin, FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Electric MSCB Contractor</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            License No: <span className="font-mono">MSCB-XXXX-2025</span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Trusted Electrical Solutions for Residential, Commercial and Industrial Projects.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-electric.blue" to="/">Home</Link></li>
            <li><Link className="hover:text-electric.blue" to="/about">About</Link></li>
            <li><Link className="hover:text-electric.blue" to="/services">Services</Link></li>
            <li><Link className="hover:text-electric.blue" to="/projects">Projects</Link></li>
            <li><Link className="hover:text-electric.blue" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FiPhone/> <a href="tel:+919999999999">+91 99999 99999</a></li>
            <li>Email: <a className="hover:text-electric.blue" href="mailto:info@example.com">info@example.com</a></li>
            <li>Address: 123 Industrial Estate, Pune, MH</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-electric.blue"><FiFacebook/></a>
            <a href="#" aria-label="Instagram" className="hover:text-electric.blue"><FiInstagram/></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-electric.blue"><FiLinkedin/></a>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-gray-500 dark:text-gray-400">
        © <span>{new Date().getFullYear()}</span> Electric MSCB Contractor. All rights reserved.
      </div>
    </footer>
  )
}
