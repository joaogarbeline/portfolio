import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// ─── Dados dos projetos ────────────────────────────
// Atualize os campos `github` e `demo` com os links reais dos seus projetos
const PROJECTS = [
  {
    title: 'EcoTrack API',
    description:
      'API RESTful robusta para monitoramento ambiental em tempo real. Endpoints para coleta, análise e visualização de dados de sensores com autenticação JWT e documentação Swagger completa.',
    tags: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT', 'Swagger'],
    github: 'https://github.com/joaogarbeline',
    demo: null,
  },
  {
    title: 'TaskFlow Manager',
    description:
      'Plataforma completa de gerenciamento de projetos com backend em Spring Boot e frontend em React. Kanban board interativo, gestão de equipes, relatórios e notificações em tempo real via WebSocket.',
    tags: ['Spring Boot', 'React', 'WebSocket', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/joaogarbeline',
    demo: null,
  },
  {
    title: 'ShopSmart Commerce',
    description:
      'E-commerce fullstack com arquitetura de microsserviços em Spring Boot. Módulos independentes para catálogo, pedidos e pagamentos, orquestrados com Docker Compose e API Gateway.',
    tags: ['Java', 'Spring Cloud', 'Microservices', 'React', 'MySQL'],
    github: 'https://github.com/joaogarbeline',
    demo: null,
  },
  {
    title: 'Auth Service',
    description:
      'Serviço enterprise de autenticação e autorização com Spring Security, OAuth2 e JWT. Suporte a múltiplos provedores de identidade, refresh tokens com blacklist em Redis.',
    tags: ['Spring Security', 'OAuth2', 'JWT', 'Java', 'Redis'],
    github: 'https://github.com/joaogarbeline',
    demo: null,
  },
]

// ─── Ícone de pasta ────────────────────────────────
const FolderIcon = () => (
  <svg className="w-5 h-5 text-zinc-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
  </svg>
)

// ─── Card de projeto ────────────────────────────────
function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/40 dark:hover:shadow-zinc-900/60"
    >
      {/* Glow interno no hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-100/0 to-zinc-100/0 dark:from-zinc-800/0 dark:to-zinc-800/0 group-hover:from-zinc-100/60 group-hover:to-zinc-50/20 dark:group-hover:from-zinc-800/30 dark:group-hover:to-zinc-700/10 transition-all duration-500 pointer-events-none" />

      {/* Cabeçalho: ícone + título + ações */}
      <div className="relative flex items-start justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <FolderIcon />
          <h3 className="font-semibold text-zinc-900 dark:text-white text-base group-hover:text-zinc-700 dark:group-hover:text-zinc-100 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Ações: visíveis no hover */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 ml-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver no GitHub"
            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-4 h-4" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver demo"
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Descrição */}
      <p className="relative text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tags de tecnologia */}
      <div className="relative flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-500 dark:text-zinc-400 text-[11px] font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rodapé: links */}
      <div className="relative pt-4 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group/link"
        >
          <FaGithub className="w-3.5 h-3.5" />
          Ver código
          <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            Live demo
          </a>
        )}
      </div>
    </motion.article>
  )
}

// ─── Seção de projetos ──────────────────────────────
export default function Projects() {
  return (
    <section id="projetos" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-600 mb-2 uppercase">
              03 — Projetos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              O que construí
            </h2>
            <p className="text-zinc-500 dark:text-zinc-500 mt-3 max-w-lg text-sm leading-relaxed">
              Projetos que demonstram minha experiência em soluções fullstack robustas,
              do backend ao deploy.
            </p>
          </div>

          <motion.a
            href="https://github.com/joaogarbeline"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group shrink-0"
            whileHover={{ x: 3 }}
          >
            Ver todos no GitHub
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Grid 2×2 */}
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
