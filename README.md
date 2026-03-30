# Portfólio Profissional - João Pedro de Lima Garbeline

Um portfólio moderno e elegante para desenvolvedor Fullstack Java com React, Vite e TailwindCSS.

## 🚀 Instalação

### Pré-requisitos
- Node.js 16+ e npm instalados
- Git (opcional, para clonar)

### Passos

```bash
# 1. Navegue até a pasta do projeto
cd portfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`. Você pode servir a pastainiciando um servidor HTTP simples:

```bash
npm run preview
```

## 🌐 Deploy no Netlify

### Opção 1: Via GitHub
1. Commit e push para o GitHub
2. Conecte o repositório ao Netlify
3. Configure build: `npm run build`
4. Publish folder: `dist`
5. O deploy acontece automaticamente

### Opção 2: Drag & Drop
1. Execute `npm run build`
2. Faça drag da pasta `dist/` para o Netlify

## 📋 Seções

- **Hero** — Nome em destaque, disponibilidade, CTA buttons
- **Sobre** — Bio profissional, stats, snippet de código
- **Tecnologias** — Backend, Frontend, DB, DevOps (ícones interativos)
- **Projetos** — Cards com descrição, tags, GitHub e demo
- **Contato** — GitHub, LinkedIn, Email com cards animados

## 🎨 Customizações

### E-mail
Edite `src/components/Contact.jsx` linha 5:
```jsx
const EMAIL = 'seu-email@exemplo.com'
```

### Projetos
Edite `src/components/Projects.jsx` e substitua os projetos fictícios pelos seus:
```jsx
const PROJECTS = [
  {
    title: 'Seu Projeto',
    description: 'Descrição...',
    tags: ['Tech1', 'Tech2'],
    github: 'https://github.com/seu-usuario/seu-repo',
    demo: 'https://demo.exemplo.com',
  },
  // ...
]
```

### Sobre
Edite `src/components/About.jsx` para ajustar bio, stats, texto.

## 🛠️ Tecnologias

- **React 18** — Interface reativa
- **Vite** — Build rápido e dev server
- **TailwindCSS** — Styling utilitário
- **Framer Motion** — Animações suaves
- **React Icons** — Ícones SVG
- **PostCSS + Autoprefixer** — Compatibilidade CSS

## 📱 Responsividade

Design mobile-first adaptado para:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## ✨ Recursos

- ✅ Dark/Light mode
- ✅ Scroll suave
- ✅ Animações framer-motion
- ✅ Navbar fixa com backdrop blur
- ✅ Hamburger menu mobile
- ✅ Efeitos de hover modernos
- ✅ Layout responsivo
- ✅ Pronto para Netlify

## 📄 Estrutura

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml          (config Netlify)
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Technologies.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 🔗 Links

- GitHub: https://github.com/joaogarbeline
- LinkedIn: https://linkedin.com/in/garbeline

---

Desenvolvido com ❤️ usando React + TailwindCSS + Framer Motion
