import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Gerencia o estado do menu mobile
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
      <div className={`w-full max-w-[1440px] mx-auto p-4 lg:p-0  ${isDarkMode ? "bg-[#144774] text-white" : "bg-white text-[#144774]"}`}>
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

          <main className="max-w-7xl mx-auto px-4 lg:px-0">
            <div className="lg:mt-30 my-8 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
                <h2 className={`text-xl lg:text-5xl font-madimione mb-6 ${isDarkMode ? "text-white" : "text-[#144774]"}`}>Dê fim à procrastinação com um Robô Inteligente</h2>
                <p className={`lg:mt-8 text-1xl lg:text-2xl text-justify ${isDarkMode ? "text-white" : "text-[#144774]"}`}>Diga adeus às distrações e aumente sua produtividade. Foque no que realmente importa, organize suas tarefas e alcance mais em menos tempo. Transforme seu dia com pequenas mudanças e veja grandes resultados.</p>
                <div className="flex justify-center lg:justify-start gap-5 mt-5">
                  <Link to="https://napratica.org.br/dicas-como-parar-de-procrastinar/" className="py-2 px-6 lg:py-4 lg:px-12 font-madimione lg:mt-5 text-white rounded-full text-lg lg:text-3xl bg-[#336FA5] hover:bg-[#D9D9D9] hover:text-[#144774] dark:bg-[#4E8BB8] dark:hover:bg-white dark:hover:text-[#144774] transition-colors duration-300">SAIBA MAIS</Link>
                  <Link to="https://www.instagram.com/now_or_never.oficial?igsh=azZjcnRvOHNoMGFy" className="py-2 px-8 lg:py-4 lg:px-16 font-madimione lg:mt-5 text-white rounded-full text-lg lg:text-3xl bg-[#336FA5] hover:bg-[#D9D9D9] hover:text-[#144774] dark:bg-[#9ECAE3] dark:hover:bg-white dark:hover:text-[#144774] transition-colors duration-300">ACESSAR</Link>
                </div>
              </div>
              <div className="mt-8 lg:w-1/2">
                <img src="./imagens/home.jpg" alt="Imagem Home" className="w-full lg:mt-0 lg:w-4/4 rounded-[30px] lg:rounded-[40px] border border-[#144774] dark:border-white" />
              </div>
            </div>

            <div className="my-8 lg:flex lg:justify-between lg:items-start lg:px-0">
              <div className="lg:w-1/2 text-center lg:text-left mb-4 lg:mt-25">
                <h2 className={`text-xl lg:text-5xl font-madimione ${isDarkMode ? "text-white" : "text-[#144774]"}`}>O Now or Never é a melhor opção para otimizar tarefas</h2>
              </div>

              <div className="lg:w-1/2 text-justify lg:mt-20">
                <p className={`text-1xl lg:text-2xl  ${isDarkMode ? "text-white" : "text-[#144774]"}`}>Encontramos a solução para transformar seus dias e recuperar o controle da sua rotina. Com nossa abordagem inovadora, você finalmente vai superar a procrastinação e conquistar mais foco, produtividade e tempo para o que realmente importa.</p>
              </div>

            </div>

            <section className="p-4 text-center lg:mt-20">
              <h2 className={`text-xl lg:text-5xl font-madimione my-6 ${isDarkMode ? 'text-white' : 'text-[#144774]'}`}>Qual é o diferencial do <br className="block lg:hidden" /> Now or Never?</h2>
              <div className='flex flex-wrap justify-center gap-8 lg:gap-12 p-5 lg:p-10'>
                
                <div className={`${isDarkMode ? 'bg-[#D9D9D9]' : 'bg-white border-[#144774]'} border-2 rounded-[30px] p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-500 w-200 lg:w-60`}>
                  <img src="./imagens/relogio.png" alt="Relógio" className="w-40" />
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-[#144774]' : 'text-[#144774]'}`}>RELÓGIO</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-[#144774]' : 'text-[#144774]'}`}>Organiza o tempo com foco e pausas programadas.</p>
                </div>
                
                <div className={`${isDarkMode ? 'bg-[#D9D9D9]' : 'bg-white border-[#144774]'} border-2 rounded-[30px] p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-500 w-200 lg:w-60`}>
                  <img src="./imagens/telefone.png" alt="Telefone" className="w-40" />
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-[#144774]' : 'text-[#144774]'}`}>APLICATIVO</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-[#144774]' : 'text-[#144774]'}`}>Acesse e controle sua rotina de qualquer lugar.</p>
                </div>
                
                <div className={`${isDarkMode ? 'bg-[#D9D9D9]' : 'bg-white border-[#144774]'} border-2 rounded-[30px] p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-500 w-200 lg:w-60`}>
                  <img src="./imagens/trofeu.png" alt="Troféu" className="w-40" />
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-[#144774]' : 'text-[#144774]'}`}>RECOMPENSAS</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-[#144774]' : 'text-[#144774]'}`}>Ganhe pontos e conquistas por cada tarefa feita.</p>
                </div>
                
                <div className={`${isDarkMode ? 'bg-[#D9D9D9]' : 'bg-white border-[#144774]'} border-2 rounded-[30px] p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-500 w-200 lg:w-60`}>
                  <img src="./imagens/relatorio.png" alt="Relatório" className="w-40" />
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-[#144774]' : 'text-[#144774]'}`}>RELATÓRIOS</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-[#144774]' : 'text-[#144774]'}`}>Veja seu progresso com relatórios simples e claros.</p>
                </div>
              </div>
            </section>
          </main>
      </div>
    </div>
    );
};

export default Home;