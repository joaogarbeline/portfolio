import { motion } from 'framer-motion'

// ─── Dados dos stats ───────────────────────────────
const STATS = [
  { value: '2+',   label: 'Anos de dedicação' },
  { value: '10+',  label: 'Projetos entregues' },
  { value: '15+',  label: 'Tecnologias' },
  { value: '500+', label: 'Commits no GitHub' },
]

// ─── Animação padrão ao entrar na viewport ─────────
const slideIn = (direction = 'left', delay = 0) => ({
  initial:    { opacity: 0, x: direction === 'left' ? -30 : 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function About() {
  return (
    <section id="sobre" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Cabeçalho da seção ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-600 mb-2 uppercase">
            01 — Sobre
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            Quem sou eu
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Texto ── */}
          <motion.div {...slideIn('left', 0)}>
            <div className="space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-[15px]">
              <p className="text-zinc-800 dark:text-zinc-200 text-lg font-medium">
                Olá! Sou&nbsp;
                <span className="text-zinc-900 dark:text-white font-bold">João Pedro de Lima Garbeline</span>,
                desenvolvedor Fullstack com foco principal em Java e o ecossistema Spring.
              </p>
              <p>
                Minha jornada na programação é movida por dedicação intensa ao aprendizado contínuo
                e pela paixão em resolver problemas complexos com código limpo e eficiente.
                Tenho construído experiência sólida no desenvolvimento de{' '}
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">APIs RESTful</span>,
                arquitetura de{' '}
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">microsserviços</span>{' '}
                e integração de sistemas com{' '}
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">Spring Boot</span>.
              </p>
              <p>
                No frontend, trabalho com{' '}
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">React</span>{' '}
                para criar interfaces modernas, responsivas e com foco na experiência do usuário.
                Acredito no poder de dominar o stack completo para entregar soluções mais coesas
                e de maior qualidade.
              </p>
              <p>
                Valorizo boas práticas como{' '}
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">Clean Code</span>,
                princípios{' '}
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">SOLID</span>,
                testes automatizados e versionamento eficiente com Git. Estou sempre em busca
                do próximo desafio que me permita crescer como profissional.
              </p>
            </div>

            <motion.a
              href="https://github.com/joaogarbeline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white group transition-colors duration-200"
              whileHover={{ x: 4 }}
            >
              Ver meu GitHub
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* ── Stats + snippet de código ── */}
          <motion.div {...slideIn('right', 0.1)} className="flex flex-col gap-4">

            {/* Grid de estatísticas */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="group bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                >
                  <p className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Snippet de código decorativo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="relative bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/40 rounded-2xl p-6 overflow-hidden"
            >
              {/* Dot-grid interna */}
              <div className="absolute inset-0 dot-grid-dark opacity-[0.07]" />

              {/* Barra de título do "editor" */}
              <div className="relative flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="ml-2 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">developer.ts</span>
              </div>

              {/* Código */}
              <pre className="relative font-mono text-[13px] leading-7 text-zinc-500 dark:text-zinc-500 overflow-x-auto">
                <span className="text-zinc-400 dark:text-zinc-400">const</span>
                {' '}<span className="text-zinc-700 dark:text-zinc-200">developer</span>
                {' = \{\n'}
                {'  '}<span className="text-zinc-500 dark:text-zinc-500">name</span>{': '}
                <span className="text-zinc-600 dark:text-zinc-400">"João Pedro"</span>{',\n'}
                {'  '}<span className="text-zinc-500 dark:text-zinc-500">role</span>{': '}
                <span className="text-zinc-600 dark:text-zinc-400">"Fullstack Java Dev"</span>{',\n'}
                {'  '}<span className="text-zinc-500 dark:text-zinc-500">location</span>{': '}
                <span className="text-zinc-600 dark:text-zinc-400">"Brasil"</span>{',\n'}
                {'  '}<span className="text-zinc-500 dark:text-zinc-500">available</span>{': '}
                <span className="text-green-600 dark:text-green-400">true</span>{'\n\};'}
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
