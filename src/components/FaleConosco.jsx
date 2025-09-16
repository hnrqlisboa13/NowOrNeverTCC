import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FaleConosco = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <div className={`w-full max-w-[1440px] mx-auto p-4 lg:p-0 ${isDarkMode ? "bg-[#144774] text-white" : "bg-white text-[#144774]"}`}>
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
            <Link to="/" onClick={toggleMenu} className="mb-4">
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
          <div className="flex justify-center items-center mt-12 lg:mt-32">
            <form className={`${isDarkMode ? "bg-[#336FA5]" : "bg-[#144774]"} p-8 lg:p-12 rounded-[25px] lg:rounded-[40px] w-[670px] lg:h-[700px] flex flex-col gap-4`}>
              <input 
                type="text" 
                placeholder="Nome" 
                required 
                className="p-4 lg:p-6 border-none rounded-xl lg:rounded-2xl text-lg lg:text-3xl font-madaregular text-[#5B5959] dark:text-[#144774] bg-white dark:bg-[#9ECAE3]" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className="p-4 lg:p-6 border-none rounded-xl lg:rounded-2xl text-lg lg:text-3xl font-madaregular text-[#5B5959] dark:text-[#144774] bg-white dark:bg-[#9ECAE3]" 
              />
              <input 
                type="text" 
                placeholder="Assunto" 
                required 
                className="p-4 lg:p-6 border-none rounded-xl lg:rounded-2xl text-lg lg:text-3xl font-madaregular text-[#5B5959] dark:text-[#144774] bg-white dark:bg-[#9ECAE3]" 
              />
              <textarea 
                placeholder="Descrição" 
                className="p-4 lg:p-6 border-none rounded-xl lg:rounded-2xl text-lg lg:text-3xl font-madaregular text-[#5B5959] dark:text-[#144774] h-56 lg:h-[300px] bg-white dark:bg-[#9ECAE3]"
              ></textarea>
              <button 
                type="submit" 
                className="w-3/5 self-center bg-[#4E8BB8] dark:bg-[#6FADD2] text-[#F5F5F5] border-none py-2 lg:mt-6 lg:py-4 px-10 rounded-[25px] lg:rounded-[35px] text-2xl lg:text-4xl font-[MadimiOne] cursor-pointer transition-colors duration-300 hover:bg-[#F5F5F5] hover:text-[#144774] dark:hover:text-[#336FA5]"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;