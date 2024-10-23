import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Personagens from './pages/Personagens'
import Temporadas from './pages/Temporadas'
import Contato from './pages/Contato'
import Cadastro from './pages/Cadastro'
import Bio from './pages/Bio'
import Login from './pages/Login'
import Temporada from './pages/Temporada'; // Página específica de uma temporada

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/personagens' element={<Personagens/>}/>
        <Route path="/temporadas" element={<Temporadas />} /> {/* Página com todas as temporadas */}
        <Route path="/temporada/:id" element={<Temporada />} /> {/* Página de uma temporada específica */}
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/bio/:id" element={<Bio />} />
      </Routes>
    </Router>
  );
}

export default App
