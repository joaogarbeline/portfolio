import { motion } from 'framer-motion'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// Variantes de animação
const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 28 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Fundo: grid de pontos ── */}
      <div className="absolute inset-0 dot-grid-dark dark:dot-grid-dark dot-grid-light dark:opacity-100 opacity-60" />

      {/* ── Gradientes de borda para suavizar ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-zinc-950 via-transparent to-white dark:to-zinc-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-zinc-950 via-transparent to-white dark:to-zinc-950" />

      {/* ── Orbs flutuantes ── */}
      <motion.div
        className="absolute top-1/4 left-[15%] w-80 h-80 rounded-full bg-zinc-200/40 dark:bg-zinc-800/25 blur-3xl"
        animate={{ y: [0, -24, 0], x: [0, 16, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[15%] w-72 h-72 rounded-full bg-zinc-300/30 dark:bg-zinc-700/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -12, 0], scale: [1, 0.92, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-zinc-200/20 dark:bg-zinc-800/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* ── Conteúdo ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-40 text-center">

        {/* Badge de disponibilidade */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-900/60 backdrop-blur-sm text-zinc-500 dark:text-zinc-400 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
          Disponível para novas oportunidades
        </motion.div>

        {/* Nome principal */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-5"
        >
          <span className="text-gradient-light dark:text-gradient-dark">
            João Pedro
          </span>
          <br />
          <span className="text-zinc-900 dark:text-white">de Lima Garbeline</span>
        </motion.h1>

        {/* Título */}
        <motion.div {...fadeUp(0.2)} className="flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
          <p className="font-mono text-base md:text-lg tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
            Fullstack Java Developer
          </p>
          <div className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
        </motion.div>

        {/* Descrição */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-zinc-500 dark:text-zinc-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-12"
        >
          Construindo APIs robustas com&nbsp;
          <span className="text-zinc-700 dark:text-zinc-300 font-medium">Java &amp; Spring Boot</span>
          &nbsp;e interfaces modernas com&nbsp;
          <span className="text-zinc-700 dark:text-zinc-300 font-medium">React</span>.
          Soluções fullstack que funcionam de ponta a ponta.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primário */}
          <motion.button
            onClick={() => scrollTo('projetos')}
            className="relative px-8 py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold text-sm overflow-hidden btn-glow group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              className="absolute inset-0 bg-zinc-700 dark:bg-zinc-200"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Ver Projetos
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>

          {/* Secundário */}
          <motion.button
            onClick={() => scrollTo('contato')}
            className="px-8 py-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white font-semibold text-sm transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Entrar em Contato
          </motion.button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-600"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
