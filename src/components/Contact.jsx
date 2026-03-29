import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// ─── TODO: Substitua pelo seu e-mail real ──────────
const EMAIL = 'jp.garbeline@gmail.com'

const LINKS = [
  {
    Icon:        FaGithub,
    label:       'GitHub',
    display:     '@joaogarbeline',
    href:        'https://github.com/joaogarbeline',
    description: 'Veja meus projetos e contribuições',
  },
  {
    Icon:        FaLinkedin,
    label:       'LinkedIn',
    display:     'linkedin.com/in/garbeline',
    href:        'https://linkedin.com/in/garbeline',
    description: 'Conecte-se profissionalmente',
  },
  {
    Icon:        FaEnvelope,
    label:       'E-mail',
    display:     EMAIL,
    href:        `mailto:${EMAIL}`,
    description: 'Mande uma mensagem direta',
  },
]

// ─── Card de contato ────────────────────────────────
function ContactCard({ Icon, label, display, href, description, index }) {
  const isEmail = href.startsWith('mailto')
  return (
    <motion.a
      href={href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group flex flex-col items-center text-center gap-4 p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/40 dark:hover:shadow-zinc-900/60 cursor-pointer"
    >
      {/* Ícone */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700/60 transition-all duration-300">
        <Icon className="w-6 h-6 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Info */}
      <div>
        <p className="font-semibold text-zinc-900 dark:text-zinc-200 text-sm mb-1 group-hover:text-zinc-700 dark:group-hover:text-white transition-colors">
          {label}
        </p>
        <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 break-all">
          {display}
        </p>
      </div>

      <p className="text-xs text-zinc-400 dark:text-zinc-600 leading-relaxed">
        {description}
      </p>
    </motion.a>
  )
}

// ─── Seção de contato ───────────────────────────────
export default function Contact() {
  return (
    <section id="contato" className="py-32 relative">
      {/* Fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-100/50 dark:via-zinc-900/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-600 mb-2 uppercase">
            04 — Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Vamos conversar
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 max-w-md mx-auto text-sm leading-relaxed">
            Estou aberto a novas oportunidades, projetos freelance e parcerias.
            Não hesite em entrar em contato — responderei o mais rápido possível!
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-14">
          {LINKS.map((link, i) => (
            <ContactCard key={link.label} {...link} index={i} />
          ))}
        </div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm btn-glow transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-100"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FaEnvelope className="w-4 h-4" />
            Enviar mensagem
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
