import { useState, useEffect } from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Technologies from './components/Technologies'
import Projects     from './components/Projects'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

function App() {
  // dark = true por padrão
  const [darkMode, setDarkMode] = useState(true)

  // Sincroniza a classe `dark` no <html>
  useEffect(() => {
    const root = document.documentElement
    darkMode ? root.classList.add('dark') : root.classList.remove('dark')
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Wrapper principal com transição suave de tema */}
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main>
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
