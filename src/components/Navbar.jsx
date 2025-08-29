import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from './ThemeProvider'
import { FiMoon, FiSun } from 'react-icons/fi'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-wide">
          <span className="inline-flex h-8 w-8 rounded-xl bg-electric.blue/10 items-center justify-center shadow-glow">
            ⚡
          </span>
          <span>Electric MSCB Contractor</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-electric.blue transition-colors ${isActive ? 'text-electric.blue' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-2 hover:shadow-glow transition-shadow"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>
    </header>
  )
}
