import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SobreNos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const teamMembers = [
    { name: 'HEITOR', instagram: 'https://www.instagram.com/heitor_amiel/', image: './imagens/img-sobrenos.png' },
    { name: 'HENRIQUE', instagram: 'https://www.instagram.com/bsl.nrnh/', image: './imagens/img-sobrenos.png' },
    { name: 'OCTÁVIO', instagram: 'https://www.instagram.com/octavio.s1/', image: './imagens/img-sobrenos.png' },
    { name: 'REBECA', instagram: 'https://www.instagram.com/rebecar._08/', image: './imagens/img-sobrenos.png' },
  ];

  return (
    <div className={`
      max-w-[1440px] mx-auto
      ${isDarkMode ? 'bg-[#144774] text-white' : 'bg-[#F5F5F5] text-[#144774]'}
      min-h-screen p-4 lg:p-0
    `}>

      {/* --- MENU PADRONIZADO INÍCIO --- */}
      <header className="flex justify-between items-center p-4 lg:hidden relative z-50">
        <button onClick={toggleDarkMode} className="cursor-pointer">
          <img
            src={isDarkMode ? "./imagens/icone-sol.png" : "./imagens/icone-lua.png"}
            alt="Tema"
            className="w-23"
          />
        </button>
        <button onClick={toggleMenu}>
          <img
            src={isDarkMode ? "./imagens/menu-hamburguer-mn.png" : "./imagens/menu-hamburguer-mc.png"}
            alt="Menu"
            className="w-25"
          />
        </button>

        <nav
          className={`fixed top-0 right-0 h-screen w-64 ${isDarkMode ? "bg-[#144774]" : "bg-white"} shadow-lg flex flex-col items-end gap-4 p-6 transform transition-transform duration-500 z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={toggleMenu} className="self-end mb-4">
            <img src="./imagens/x.png" alt="Fechar menu" className="w-8" />
          </button>

          <Link to="/" onClick={toggleMenu} className='mb-4'>
            <img
              src={isDarkMode ? "./imagens/logo-desktop.png" : "./imagens/logo-mobile.png"}
              alt="Logo"
              className="mx-auto w-40"
            />
          </Link>

          <div className={`h-px w-full mb-4 ${isDarkMode ? "bg-white" : "bg-[#144774]"}`}></div>

          <Link to="/instrucoes" onClick={toggleMenu} className={`text-lg hover:text-[#336FA5] font-madimione ${isDarkMode ? "text-white" : "text-[#144774]"}`}>INSTRUÇÕES</Link>
          <Link to="/materiais" onClick={toggleMenu} className={`text-lg hover:text-[#336FA5] font-madimione ${isDarkMode ? "text-white" : "text-[#144774]"}`}>MATERIAIS</Link>
          <Link to="/sobrenos" onClick={toggleMenu} className={`text-lg hover:text-[#336FA5] font-madimione ${isDarkMode ? "text-white" : "text-[#144774]"}`}>SOBRE NÓS</Link>
          <Link to="/referencias" onClick={toggleMenu} className={`text-lg hover:text-[#336FA5] font-madimione ${isDarkMode ? "text-white" : "text-[#144774]"}`}>REFERÊNCIAS</Link>
          <Link to="/jogo" onClick={toggleMenu} className={`text-lg hover:text-[#336FA5] font-madimione ${isDarkMode ? "text-white" : "text-[#144774]"}`}>JOGO</Link>
          <Link to="/faleconosco" onClick={toggleMenu} className={`text-lg hover:text-[#336FA5] font-madimione ${isDarkMode ? "text-white" : "text-[#144774]"}`}>CONTATO</Link>
        </nav>
      </header>

      <header className={`hidden lg:flex items-center justify-between px-8 py-4 ${isDarkMode ? "bg-[#336FA5]" : "bg-[#144774]"}`}>
        <Link to="/">
          <img
            src={isDarkMode ? "./imagens/logo-desktop.png" : "./imagens/logo-desktop.png"}
            alt="Logo Desktop"
            className="w-60"
          />
        </Link>
        <nav>
          <ul className="flex gap-10 text-2xl font-madamedium tracking-wide text-white uppercase">
            <li><Link to="/instrucoes" className="menu-link">INSTRUÇÕES</Link></li>
            <li><Link to="/materiais" className="menu-link">MATERIAIS</Link></li>
            <li><Link to="/sobrenos" className="menu-link">SOBRE NÓS</Link></li>
            <li><Link to="/referencias" className="menu-link">REFERÊNCIAS</Link></li>
            <li><Link to="/jogo" className="menu-link">JOGO</Link></li>
            <li><Link to="/faleconosco" className="menu-link">CONTATO</Link></li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="cursor-pointer">
          <img
            src={isDarkMode ? "./imagens/icone-sol.png" : "./imagens/icone-lua.png"}
            alt="Tema"
            className="w-35"
          />
        </button>
      </header>

      <div className="max-w-[1440px] mx-auto p-4 lg:p-0">
        <section className="flex flex-wrap justify-center gap-8 lg:gap-10 pt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${isDarkMode ? "bg-[#336FA5]" : "bg-[#144774]"} rounded-[25px] lg:rounded-[50px] w-[300px] h-[350px] lg:w-[300px] lg:h-[500px] text-center text-white relative flex flex-col items-center justify-center p-4 lg:p-0`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 lg:w-56 lg:h-56 mb-4 lg:mb-8 object-cover"
              />
              <h2 className="font-[Mada-SemiBold] text-2xl lg:text-3xl text-white mb-4">{member.name}</h2>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4E8BB8] dark:bg-[#6FADD2] py-1 px-5 lg:py-4 lg:px-12 text-white rounded-[30px] font-[MadimiOne] text-lg lg:text-2xl no-underline transition-colors duration-300 hover:bg-white hover:text-[#144774] dark:hover:text-[#336FA5]"
              >
                VER PERFIL
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SobreNos;