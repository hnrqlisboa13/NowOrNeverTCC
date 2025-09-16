import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Materiais = () => {
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

  const materials = [
    { name: 'Módulo ESP32', price: 'R$ 45,94', image: './imagens/esp32.png' },
    { name: 'Micro Servo 9g SG90', price: 'R$ 14,90', image: './imagens/servo.png' },
    { name: 'Resistor 330R 1/4W', price: 'R$ 0,90', image: './imagens/resistor.png' },
    { name: 'Filamento PLA Azul', price: 'R$ 115,68', image: './imagens/filamento-azul.png' },
    { name: 'Filamento PLA Branco', price: 'R$ 92,53', image: './imagens/filamento-branco.png' },
    { name: 'Chave Gangorra', price: 'R$ 1,50', image: './imagens/botão.png' },
    { name: 'Fonte 12v 3a Estabilizada', price: 'R$ 16,90', image: './imagens/fonte 12v.png' },
    { name: 'Fonte 5v', price: 'R$ 19,01', image: './imagens/fonte 5v.png' },
    { name: 'Display 2.8 Touch Screen', price: 'R$ 245,54', image: './imagens/display.png' },
    { name: 'LED', price: 'R$ 0,66', image: './imagens/led.png' },
    { name: 'Protoboard', price: 'R$ 13,44', image: './imagens/protoboard.png' },
    { name: 'Fio Jumper', price: 'R$ 8,57', image: './imagens/fio-jumper.png' },
    { name: 'Now or Never', price: 'R$ 0,00', image: './imagens/foto-projeto.png' },
  ];

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
              <img src="./imagens/x.png" alt="Fechar menu" className="w-12" />
            </button>
            <Link to="/" onClick={toggleMenu} className='mb-4 -mt-4'>
              <img
                src={isDarkMode ? "./imagens/logo-desktop.png" : "./imagens/logo-mobile.png"}
                alt="Logo"
                className="w-40"
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

        <h1 className={`font-[MadimiOne] text-xl text-center my-8 lg:hidden ${isDarkMode ? "text-white" : "text-[#144774]"}`}> MATERIAIS POR TRÁS  <br />  DO “NOW OR NEVER"</h1>
        <h1 className={`hidden lg:block font-[MadimiOne] text-5xl text-center my-28 ${isDarkMode ? "text-white" : "text-[#144774]"}`}>MATERIAIS POR TRÁS DO “NOW OR NEVER"</h1>

        <section className="flex flex-wrap justify-center gap-8 lg:gap-12 p-5 lg:p-10">
          {materials.map((item, index) => (
            <div key={index} className="bg-[#D9D9D9] rounded-[25px] border border-[#144774] w-[300px] h-[220px] lg:w-[400px] lg:h-[350px] p-6 flex flex-col items-center justify-between text-center dark:bg-white dark:border-[#144774]">
              <img src={item.image} alt={item.name} className="w-auto h-auto max-h-[120px] lg:max-h-[220px] -mt-5 lg:-mt-2" />
              <h2 className="font-[Mada-Medium] text-lg lg:text-2xl text-[#144774]">{item.name}</h2>
              <h3 className="font-[Mada-SemiBold] text-xl lg:text-3xl text-[#144774]">{item.price}</h3>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Materiais;