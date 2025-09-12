import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Instrucoes from "../src/components/Instrucoes";
import Materiais from "../src/components/Materiais"
import SobreNos from "../src/components/SobreNos"
import Referencias from "../src/components/Referencias"
import Jogo from "../src/components/Jogo"
import FaleConosco from "../src/components/FaleConosco"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instrucoes" element={<Instrucoes />} />
      <Route path="/materiais" element={<Materiais />} />
      <Route path="/sobrenos" element={<SobreNos />} />
      <Route path="/referencias" element={<Referencias />} />
      <Route path="/jogo" element={<Jogo />} />
      <Route path="/faleconosco" element={<FaleConosco />} />

      {/* outras rotas */}
    </Routes>
  );
}

export default App;
