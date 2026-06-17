import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../data/portfolio'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
          <span className="text-gray-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="glass border-t border-surface-border md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-gray-300 hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
