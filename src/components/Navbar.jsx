import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─────────────────────────────────────────────────────
// Ícone: sol (light mode)
const SunIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>
)

// Ícone: lua (dark mode)
const MoonIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
  </svg>
)

// ─────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: 'sobre',        label: 'Sobre' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos',    label: 'Projetos' },
  { id: 'contato',     label: 'Contato' },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// ─────────────────────────────────────────────────────
export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.button
          onClick={() => scrollTo('hero')}
          className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          garbeline<span className="text-zinc-400 dark:text-zinc-500">.</span>dev
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="relative text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 group"
              whileHover={{ y: -1 }}
            >
              {link.label}
              {/* Underline animado */}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-zinc-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}

          {/* Toggle tema */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            title="Alternar tema"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-500 dark:hover:border-zinc-500 transition-all duration-200"
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </motion.button>
        </div>

        {/* Mobile: hamburguer */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          <motion.span
            className="block h-0.5 w-6 bg-zinc-600 dark:bg-zinc-400 rounded-full"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-zinc-600 dark:bg-zinc-400 rounded-full"
            animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-zinc-600 dark:bg-zinc-400 rounded-full"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/60"
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.id)}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-left transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
                {darkMode ? 'Modo claro' : 'Modo escuro'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
