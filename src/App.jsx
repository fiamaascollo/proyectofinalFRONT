import 'semantic-ui-css/semantic.min.css';
import Navegacion from './Componentes/Navegacion';
import Home from './Componentes/Home';
import Vehiculos from './Componentes/Vehiculos';
import Concesionarios from './Componentes/Concesionarios';
import Contacto from './Componentes/Contacto';
import Login from './Componentes/Login';  
import Clientes from './Componentes/Clientes';
import Footer from './Componentes/Footer';
import Chatbot from './Componentes/Chatbot';
import Update from './Componentes/Update';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/vehiculos" element={<Vehiculos />} /> 
        <Route path="/concesionarios" element={<Concesionarios />} />
        <Route path="/contacto" element={<Contacto />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
