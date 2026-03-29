import { motion } from 'framer-motion'
import {
  FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub,
  FaHtml5, FaCss3Alt,
} from 'react-icons/fa'
import {
  SiSpring, SiPostgresql, SiMysql, SiTypescript,
  SiJavascript, SiTailwindcss, SiApachemaven,
} from 'react-icons/si'

// ─── Definição das tecnologias por categoria ────────
const CATEGORIES = [
  {
    name: 'Backend',
    techs: [
      { name: 'Java',        Icon: FaJava,        color: '#E76F00' },
      { name: 'Spring Boot', Icon: SiSpring,       color: '#6DB33F' },
      { name: 'Node.js',     Icon: FaNodeJs,       color: '#339933' },
      { name: 'Maven',       Icon: SiApachemaven,  color: '#C71A36' },
    ],
  },
  {
    name: 'Frontend',
    techs: [
      { name: 'React',       Icon: FaReact,       color: '#61DAFB' },
      { name: 'TypeScript',  Icon: SiTypescript,  color: '#3178C6' },
      { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5',       Icon: FaHtml5,       color: '#E34F26' },
      { name: 'CSS3',        Icon: FaCss3Alt,     color: '#1572B6' },
    ],
  },
  {
    name: 'Banco de Dados',
    techs: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL',      Icon: SiMysql,      color: '#4479A1' },
    ],
  },
  {
    name: 'DevOps & Ferramentas',
    techs: [
      { name: 'Docker', Icon: FaDocker,  color: '#2496ED' },
      { name: 'Git',    Icon: FaGitAlt,  color: '#F05032' },
      { name: 'GitHub', Icon: FaGithub,  color: '#808080' },
    ],
  },
]

// ─── Card de tecnologia individual ─────────────────
function TechCard({ name, Icon, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5, scale: 1.04 }}
      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 cursor-default transition-all duration-300"
    >
      <Icon
        className="w-8 h-8 text-zinc-400 dark:text-zinc-500 group-hover:scale-110 transition-all duration-300"
        style={{ color: undefined }}
        // Aplica cor apenas no hover via CSS custom approach
      />
      <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300 text-center leading-tight">
        {name}
      </span>
    </motion.div>
  )
}

// ─── Seção de tecnologias ───────────────────────────
export default function Technologies() {
  return (
    <section id="tecnologias" className="py-32 relative">
      {/* Fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-100/60 dark:via-zinc-900/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-600 mb-2 uppercase">
            02 — Tecnologias
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            Stack técnico
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 mt-3 max-w-md text-sm leading-relaxed">
            Ferramentas e tecnologias que utilizo para construir soluções completas,
            do banco de dados à interface.
          </p>
        </motion.div>

        {/* Categorias */}
        <div className="space-y-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.name}>
              {/* Label da categoria */}
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-mono text-[11px] tracking-widest text-zinc-400 dark:text-zinc-600 uppercase mb-4"
              >
                {cat.name}
              </motion.p>

              {/* Grid de cards */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {cat.techs.map((tech, i) => (
                  <TechCard
                    key={tech.name}
                    name={tech.name}
                    Icon={tech.Icon}
                    color={tech.color}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
