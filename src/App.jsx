import React from 'react';

function App() {
  // Aqui você pode adicionar seus links reais depois!
  const links = [
    { name: 'Meu Portfólio: Card de Ração', url: 'https://card-racao.vercel.app/', icon: '🐾' },
    { name: 'GitHub Professional', url: 'https://github.com/niinahlol', icon: '💻' },
    { 
    name: 'E-mail para Contato', 
    url: 'mailto:seuemail@gmail.com', // O "mailto:" é o segredo!
    icon: '✉️' 
  },
    { name: 'Instagram Designer', url: 'https://www.instagram.com/abarbzdesign', icon: '🎨' },
  ];
  <LinkButton 
  titulo="Portfolio: Landing Page Pet Shop 🐾" 
  url="https://petshop-landing-azure.vercel.app/" 
  destaque={true} 
/>

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center py-16 px-4">
      {/* Foto de Perfil / Avatar */}
      <div className="w-24 h-24 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-full mb-4 shadow-lg shadow-orange-500/20 flex items-center justify-center text-3xl">
        👩‍💻
      </div>

      {/* Nome e Bio */}
      <h1 className="text-white text-2xl font-bold mb-2">Ana Oliveira</h1>
      <p className="text-zinc-400 text-center max-w-xs mb-8">
       Design que comunica, código que resolve. 🚀 | React & Tailwind Enthusiast 🚀
      </p>

      {/* Lista de Links */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4 rounded-2xl hover:bg-orange-500 hover:border-orange-400 transition-all duration-300 shadow-sm"
          >
            <span className="text-lg">{link.icon}</span>
            <span className="text-zinc-200 font-medium group-hover:text-white transition-colors">
              {link.name}
            </span>
            <span className="text-zinc-600 group-hover:text-orange-200">→</span>
          </a>
        ))}
      </div>

      {/* Rodapé humilde */}
      <footer className="mt-auto pt-10 text-zinc-600 text-sm">
        Criado com React + Tailwind v4 por uma desenvolvedora em processo de aprendizagem!
      </footer>
    </div>
  );
}

export default App;