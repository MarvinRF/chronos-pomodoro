# Chronos Pomodoro

**Chronos Pomodoro** é um aplicativo web desenvolvido utilizando **React 19  e Vite**,
inspirado na técnica Pomodoro original, com recursos de personalização,
histórico de tarefas, contagem regressiva e notificações sonoras. Projetado com
arquitetura escalável, contexto global com `useReducer` e `Context API`, timer
assíncrono com `Web Worker`, roteamento com `React Router 7`, tema dark/light e
áudio customizado.

---

## 🚀 Tecnologias

- **React 19** + **TypeScript**
- **Vite 6**
- **React Router v7**
- **Context API + useReducer**
- **React Toastify**
- **Lucide Icons**
- **CSS Modules**
- **Web Workers**
- **date-fns**

---

## 📁 Estrutura

```
src/
├── assets/             # Imagens, SVGs e sons
├── components/         # Componentes reutilizáveis
├── contexts/           # Context API (estado global de tarefas)
├── models/             # Tipagens e modelos de dados
├── pages/              # Páginas principais (SPA)
├── routers/            # Roteamento principal
├── styles/             # Estilos globais e temas
├── templates/          # Templates base para páginas
├── utils/              # Funções auxiliares (helpers)
├── workers/            # Timer assíncrono com Web Worker
├── App.tsx             # Componente raiz
├── main.tsx            # Entrada da aplicação
```

---

## 🧠 Funcionalidades

- Timer com ciclos: **Pomodoro**, **Pausa Curta**, **Pausa Longa**
- Histórico de tarefas com status: em andamento, completa, interrompida
- Temas Dark e Light com persistência via `localStorage`
- Notificações com sons e toasts customizados
- Suporte a Web Worker para manter o timer preciso mesmo em background
- Validação de formulários
- Reatividade com `useReducer` + `useContext`
- Navegação com `React Router 7`
- Deploy com suporte ao roteamento SPA via `vercel.json`

---

## 🧪 Scripts

```bash
npm run dev       # Ambiente de desenvolvimento
npm run build     # Build de produção
npm run preview   # Preview da build
npm run lint      # Análise estática com ESLint
```

---

## ⚙️ Instalação

```bash
git clone https://github.com/seu-usuario/chronos-pomodoro.git
cd chronos-pomodoro
npm install
npm run dev
```

---

## 🌐 Deploy

O projeto foi configurado para deploy com **Vercel**, usando `vercel.json` para
permitir navegação com `React Router` mesmo com `SPA`. Arquivo incluso:
`vercel.json`

---

## 📚 Aulas relacionadas

Este projeto é baseado em uma sequência completa de aulas práticas com foco em:

- Fundamentos do React
- Componentização
- Hooks (`useState`, `useEffect`, `useReducer`, `useRef`, `useContext`)
- Arquitetura escalável e boas práticas
- Web Workers
- Deploy com Vercel
- Acessibilidade e responsividade

---

## 🤝 Contribuição

Pull Requests são bem-vindos. Para contribuições maiores, abra uma Issue para
discussão prévia.
