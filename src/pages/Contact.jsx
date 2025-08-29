import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\+?\d[\d\s-]{7,}$/.test(form.phone)) e.phone = 'Valid phone is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    // simulate success
    setSent(true)
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>Contact — Electric MSCB Contractor</title>
      </Helmet>

      <AnimatedSection>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">We usually respond within the same business day.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-electric.blue" />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-electric.blue" />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-electric.blue" />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea rows="4" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-electric.blue"></textarea>
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="px-6 py-3 rounded-2xl bg-electric.blue text-white font-medium hover:translate-y-[-1px] transition-transform">Send Message</button>
            {sent && <p className="text-green-600">Thanks! We will get back to you shortly.</p>}
          </form>

          <div className="space-y-4">
            <div className="aspect-video rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-800/60">
              <iframe
                title="Google Maps"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.534!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06!2sPune!5e0!3m2!1sen!2sin!4v1680000000000">
              </iframe>
            </div>
            <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 p-4">
              <p><strong>Phone:</strong> <a href="tel:+919999999999" className="hover:text-electric.blue">+91 99999 99999</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/919999999999" className="hover:text-electric.blue" target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@example.com" className="hover:text-electric.blue">info@example.com</a></p>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/919999999999"
          className="fixed bottom-6 right-6 rounded-full shadow-glow bg-green-500 text-white px-4 py-3"
          aria-label="WhatsApp"
        >
          WhatsApp
        </a>
      </AnimatedSection>
    </main>
  )
}
