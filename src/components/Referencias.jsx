import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Referencias = () => {
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

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      <div className={`w-full max-w-[1440px] mx-auto p-4 lg:p-0 ${isDarkMode ? "bg-[#144774] text-white" : "bg-[#F5F5F5] text-[#144774]"}`}>

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
              <img src="./imagens/x.png" alt="Fechar menu" className="w-15" />
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
          <h1 className="font-[MadimiOne] text-xl text-center my-5 lg:hidden">ARTIGOS DE <br /> EMBASAMENTO CIENTÍFICO</h1>
          <h1 className="hidden lg:block font-[MadimiOne] text-5xl text-center my-28">ARTIGOS DE EMBASAMENTO CIENTÍFICO</h1>
          <p className={`font-[Mada-Medium] text-xs text-center mt-1 mb-6 lg:text-xl lg:mt-[-75px] ${isDarkMode ? 'text-white' : 'text-[#7F7979]'}`}>CLIQUE PARA SER DIRECIONADO</p>

          <section className="flex flex-wrap justify-center gap-4 lg:gap-10 p-5 lg:p-10">
            <div className={`${isDarkMode ? 'bg-[#336FA5]' : 'bg-[#144774]'} rounded-[25px] lg:rounded-[30px] w-80 h-[130px] lg:w-[585px] lg:min-h-[210px] p-4 lg:p-6 flex flex-col justify-between text-white text-justify`}>
              <h3 className="font-[Mada-SemiBold] text-[11px] text-xs lg:text-xl my-1 mx-[6px] lg:my-5 lg:mx-5 leading-tight">DESEMPENHO ACADÊMICO, PROCRASTINAÇÃO E O USO DE TECNOLOGIAS DE INFORMAÇÃO E COMUNICAÇÃO POR ESTUDANTES DA ÁREA DE NEGÓCIOS</h3>
              <a href="https://bell.unochapeco.edu.br/revistas/index.php/rgo/article/view/4731" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'bg-[#6FADD2] hover:bg-white hover:text-[#336FA5]' : 'bg-[#4E8BB8] hover:bg-white hover:text-[#144774]'} block self-center py-1 px-5 lg:py-2 lg:px-9 text-white font-[MadimiOne] text-sm lg:text-xl rounded-[30px] lg:rounded-[25px] transition-colors duration-300`}>ACESSAR</a>
            </div>
            <div className={`${isDarkMode ? 'bg-[#336FA5]' : 'bg-[#144774]'} rounded-[25px] lg:rounded-[30px] w-80 h-[130px] lg:w-[585px] lg:min-h-[210px] p-4 lg:p-6 flex flex-col justify-between text-white text-justify`}>
              <h3 className="font-[Mada-SemiBold] text-[11px] text-xs lg:text-xl my-1 mx-[6px] lg:my-5 lg:mx-5 leading-tight">FOCUS NOW: APLICATIVO PARA COMBATER A PROCRASTINAÇÃO DE ESTUDANTES UNIVERSITÁRIOS</h3>
              <a href="https://repositorio.ifpb.edu.br/handle/177683/3695" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'bg-[#6FADD2] hover:bg-white hover:text-[#336FA5]' : 'bg-[#4E8BB8] hover:bg-white hover:text-[#144774]'} block self-center py-1 px-5 lg:py-2 lg:px-9 text-white font-[MadimiOne] text-sm lg:text-xl rounded-[30px] lg:rounded-[25px] transition-colors duration-300`}>ACESSAR</a>
            </div>
            <div className={`${isDarkMode ? 'bg-[#336FA5]' : 'bg-[#144774]'} rounded-[25px] lg:rounded-[30px] w-80 h-[130px] lg:w-[585px] lg:min-h-[210px] p-4 lg:p-6 flex flex-col justify-between text-white text-justify`}>
              <h3 className="font-[Mada-SemiBold] text-[11px] text-xs lg:text-xl my-1 mx-[6px] lg:my-5 lg:mx-5 leading-tight">PROCRASTINAÇÃO ACADÊMICA ENTRE ESTUDANTES UNIVERSITÁRIOS</h3>
              <a href="https://revista.uemg.br/index.php/educacaoemfoco/article/view/5816" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'bg-[#6FADD2] hover:bg-white hover:text-[#336FA5]' : 'bg-[#4E8BB8] hover:bg-white hover:text-[#144774]'} block self-center py-1 px-5 lg:py-2 lg:px-9 text-white font-[MadimiOne] text-sm lg:text-xl rounded-[30px] lg:rounded-[25px] transition-colors duration-300`}>ACESSAR</a>
            </div>
            <div className={`${isDarkMode ? 'bg-[#336FA5]' : 'bg-[#144774]'} rounded-[25px] lg:rounded-[30px] w-80 h-[130px] lg:w-[585px] lg:min-h-[210px] p-4 lg:p-6 flex flex-col justify-between text-white text-justify`}>
              <h3 className="font-[Mada-SemiBold] text-[11px] text-xs lg:text-xl my-1 mx-[6px] lg:my-5 lg:mx-5 leading-tight">PROCRASTINAÇÃO ACADÊMICA EM ESTUDANTES UNIVERSITÁRIOS: UMA REVISÃO SISTEMÁTICA DA LITERATURA</h3>
              <a href="https://ojs.revistagesec.org.br/secretariado/article/view/4619" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'bg-[#6FADD2] hover:bg-white hover:text-[#336FA5]' : 'bg-[#4E8BB8] hover:bg-white hover:text-[#144774]'} block self-center py-1 px-5 lg:py-2 lg:px-9 text-white font-[MadimiOne] text-sm lg:text-xl rounded-[30px] lg:rounded-[25px] transition-colors duration-300`}>ACESSAR</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Referencias;