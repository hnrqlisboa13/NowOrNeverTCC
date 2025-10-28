import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Jogo = () => {
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
                        className={`fixed top-0 right-0 h-screen w-64 ${isDarkMode ? "bg-[#144774]" : "bg-white"} shadow-lg flex flex-col items-end gap-4 p-6 transform transition-transform duration-500 z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <button onClick={toggleMenu} className="self-end mb-4">
                            <img src="./imagens/x.png" alt="Fechar menu" className="w-15" />
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
                    <div className="flex justify-center p-12 lg:hidden">
                        <div className={`flex flex-col items-center justify-center rounded-[30px] p-8 text-center max-w-[300px] h-[680px] ${isDarkMode ? "bg-[#D9D9D9] border-[#336FA5]" : "bg-[#D9D9D9] border-[#144774]"} border text-[#144774]`}>
                            <h2 className={`font-[MadimiOne] text-xl leading-tight mt-5 mb-4 ${isDarkMode ? "text-[#144774]" : "text-[#144774]"}`}>TICK TOK: TIME IS PASSING</h2>
                            <p className={`font-[Mada-Regular] text-lg text-justify w-60 ${isDarkMode ? "text-[#144774]" : "text-[#144774]"}`}>Um jogo divertido que coloca você no papel de um estudante enfrentando a procrastinação. Colete reloginhos para ganhar tempo, responda perguntas desafiadoras feitas por professores e use anjos do conhecimento com sabedoria. Mas atenção: errar pode custar uma fase — ou até mesmo o jogo inteiro!</p>
                            <div className="flex-1 flex justify-center items-center w-full">
                                <div className="relative w-full pb-[58.25%]"> 
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/sSIZ34D9qC8"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            <Link to="#" onClick={() => window.open("https://jogo-tcc-eosin.vercel.app/", "_blank")} className="block py-2 px-12 bg-[#144774] text-[#F5F5F5] font-[MadimiOne] text-xl rounded-[25px] mt-5 transition-colors duration-300 hover:bg-[#F5F5F5] hover:text-[#144774] hover:border hover:border-[#336FA5]">JOGAR</Link>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center items-center py-32 px-10">
                        <div className={`flex rounded-[40px] p-16 max-w-[1354px] w-full h-[680px] gap-20 items-center justify-between ${isDarkMode ? "bg-[#D9D9D9] border-[#336FA5]" : "bg-[#D9D9D9] border-[#144774]"} border text-[#144774]`}>
                            <div className="flex-1 flex flex-col justify-center items-center text-center gap-5">
                                <h2 className={`font-[MadimiOne] text-4xl mb-2 ${isDarkMode ? "text-[#144774]" : "text-[#144774]"}`}>TICK TOK: TIME IS PASSING</h2>
                                <p className={`font-[Mada-Regular] text-3xl text-justify mb-2 ${isDarkMode ? "text-[#144774]" : "text-[#144774]"}`}>Um jogo divertido que coloca você no papel de um estudante enfrentando a procrastinação. Colete reloginhos para ganhar tempo, responda perguntas desafiadoras feitas por professores e use anjos do conhecimento com sabedoria. Mas atenção: errar pode custar uma fase — ou até mesmo o jogo inteiro!</p>
                                <Link to="#" onClick={() => window.open("https://jogo-tcc-eosin.vercel.app/", "_blank")} className="block py-5 px-20 bg-[#144774] text-[#F5F5F5] font-[MadimiOne] text-4xl rounded-[40px] transition-colors duration-300 hover:bg-[#F5F5F5] hover:text-[#144774] hover:border hover:border-[#336FA5]">JOGAR</Link>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <iframe
                                    width="580"
                                    height="350"
                                    src="https://www.youtube.com/embed/6-BT3D2hP-Q"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="round-mt-8"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Jogo;