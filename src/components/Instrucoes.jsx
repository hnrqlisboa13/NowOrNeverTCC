import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Instrucoes() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('dark-mode') === 'true';
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <h1 className={`font-madimione text-center text-xl lg:text-5xl lg:text-4xl my-8 lg:my-20 ${isDarkMode ? "text-white" : "text-[#144774]"}`}>
                        VEJA COMO É FÁCIL UTILIZAR O "NOW OR NEVER"
                    </h1>

                    {[
                        {
                            titulo: <h2 className={`font-madasemibold text-xl lg:text-2xl ${isDarkMode ? "text-white" : "text-[#144774]"}`}>INÍCIO DA JORNADA</h2>,
                            subtitulo: <h3 className={`font-madamedium text-lg lg:text-2xl mt-2 ${isDarkMode ? "text-white" : "text-[#144774]"}`}>
                                Ative o <span className="font-madabold">Now or Never </span> e dê o <br className="block lg:hidden" /> primeiro passo</h3>,
                            texto: <p className={`font-madaregular text-xl lg:text-xl mt-4 text-justify ${isDarkMode ? "text-white" : "text-[#144774]"}`}>Comece sua jornada contra a procrastinação. Ligue seu robô anti-procrastinação pressionando o botão de energia. Em seguida, abra o aplicativo e registre suas tarefas do dia. A Matriz de Eisenhower está integrada ao aplicativo para classificar suas tarefas conforme urgência e importância. Depois, utilize a caneta no display do robô para selecionar uma das tarefas cadastradas e iniciar sua missão.</p>,
                            imagem: "./imagens/img-bloco1.avif",
                            invertido: false
                        },
                        {
                            titulo: <h2 className={`font-madasemibold text-xl ${isDarkMode ? "text-white" : "text-[#144774]"}`}>TRABALHO COM PROPÓSITO</h2>,
                            subtitulo: <h3 className={`font-madamedium text-lg lg:text-2xl mt-1 ${isDarkMode ? "text-white" : "text-[#144774]"}`}>
                                Aqui à <span className="font-madabold">sua</span> rotina é prioridade</h3>,
                            texto: <p className={`font-madaregular text-xl lg:text-xl mt-4 text-justify ${isDarkMode ? "text-white" : "text-[#144774]"}`}>Trabalhe com inteligência. Ao selecionar uma tarefa, a técnica Pomodoro é ativada e durante os 25 minutos de foco, o LED do robô acende em verde, em seguida, inicia-se o período de descanso de 5 minutos, com o LED mudando para azul. Acompanhe seu progresso pelo aplicativo e ajuste os períodos conforme sua rotina.</p>,
                            imagem: "./imagens/img-bloco2.avif",
                            invertido: true
                        },
                        {
                            titulo: <h2 className={`font-madasemibold text-xl ${isDarkMode ? "text-white" : "text-[#144774]"}`}>CONQUISTAS E RECOMPENSAS</h2>,
                            subtitulo: <h3 className={`font-madamedium text-lg lg:text-2xl mt-1 ${isDarkMode ? "text-white" : "text-[#144774]"}`}>
                                Seu esforço é <span className="font-madabold">reconhecido</span> e premiado</h3>,
                            texto: <p className={`font-madaregular text-xl lg:text-xl mt-4 text-justify ${isDarkMode ? "text-white" : "text-[#144774]"}`}>Cada tarefa concluída aproxima você da sua melhor versão. A cada tarefa finalizada, você acumula 20 pontos. Ao atingir 100 pontos, o robô desbloqueia uma nova expressão facial e uma mensagem de incentivo personalizada.</p>,
                            imagem: "./imagens/img-bloco3.avif",
                            invertido: false
                        },
                        {
                            titulo: "",
                            subtitulo: <h3 className={`font-madamedium text-lg lg:text-2xl mt-1 ${isDarkMode ? "text-white" : "text-[#144774]"}`}>
                                Confira um vídeo de <br /> <span className="font-madabold">apresentação </span>do "Now or Never"</h3>,
                            texto: <p className={`font-madaregular text-xl lg:text-xl mt-4 text-justify ${isDarkMode ? "text-white" : "text-[#144774]"}`}>O Now or Never é muito fácil de usar. Assista ao vídeo e entenda como utilizá-lo em conjunto com o aplicativo, uma funcionalidade que nos diferencia.</p>,
                            iframe: (
                                <div className="relative w-full pb-[58.25%]"> 
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://www.youtube.com/embed/sYjQC_PmmbE"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ),
                            invertido: true
                        }

                    ].map((bloco, i) => (
                        <section
                            key={i}
                            className={`flex flex-col lg:flex-row items-center justify-between gap-10 my-12 ${bloco.invertido ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            <div className={`flex-1 text-center ${i === 1 || i === 3 ? "lg:text-right" : "lg:text-left"}`}>
                                {bloco.titulo}
                                {bloco.subtitulo}
                                <p className={`text-base lg:text-lg text-justify ${isDarkMode ? "text-white" : "text-[#144774]"}`}>
                                    {bloco.texto}
                                </p>
                            </div>
                            <div className={`w-full lg:w-[480px] mt-6 lg:mt-0 ${i === 3 ? "mb-0 lg:mb-10" : ""}`}>
                                {bloco.iframe || <img src={bloco.imagem} alt={`Imagem bloco ${i + 1}`} className="w-full rounded-[30px] lg:rounded-[50px]" />}
                            </div>
                        </section>

                    ))}
                </main>
            </div>
        </div>
    );
}

export default Instrucoes;