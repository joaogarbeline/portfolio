import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SOCIAL = [
  { Icon: FaGithub,   href: 'https://github.com/joaogarbeline',  label: 'GitHub'   },
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/garbeline', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-zinc-400 dark:text-zinc-600 text-center sm:text-left"
        >
          © {year} João Pedro de Lima Garbeline
        </motion.p>

        {/* Stack */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-zinc-400 dark:text-zinc-600"
        >
          React + TailwindCSS + Framer Motion
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          {SOCIAL.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
