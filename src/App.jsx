import React from 'react'

function App() {
  const links = [
    { name: 'Portfolio: Landing Page Pet Shop 🐾', url: 'https://petshop-landing-azure.vercel.app/', icon: '🐶' },
    { name: 'Meu Portfólio: Card de Ração', url: 'https://card-racao.vercel.app/', icon: '🐾' },
    { name: 'GitHub Professional', url: 'https://github.com/niinahlol', icon: '💻' },
    { name: 'E-mail para Contato', url: 'mailto:anabmoliveira02@gmail.com', icon: '✉️' },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center p-8 font-sans">
      {/* Avatar e Perfil */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-orange-500 rounded-full mb-4 flex items-center justify-center text-4xl shadow-lg border-4 border-zinc-800">
          👩‍💻
        </div>
        <h1 className="text-white text-2xl font-black tracking-tight">Niina Dev</h1>
        <p className="text-zinc-400 text-sm font-medium">Design & Front-end Developer</p>
      </div>

      {/* Lista de Links */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-zinc-800 p-5 rounded-2xl shadow-xl hover:bg-zinc-700 hover:scale-[1.02] transition-all border border-zinc-700 group"
          >
            <span className="text-xl">{link.icon}</span>
            <span className="text-white font-bold group-hover:text-orange-400 transition-colors">
              {link.name}
            </span>
            <span className="text-zinc-500 text-xs">→</span>
          </a>
        ))}
      </div>

      {/* Footerzinho profissional */}
      <p className="mt-auto pt-10 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
        Nova Friburgo • 2026
      </p>
    </div>
  )
}

export default App