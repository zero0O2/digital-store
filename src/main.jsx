import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home.jsx'
import Categorias from './Pages/Categorias.jsx'
import MeusPedidos from './Pages/MeusPedidos.jsx'
import Produtos from './Pages/Produtos.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/produtos' element={<Produtos/>} />
      <Route path='/categorias' element={<Categorias/>} />
      <Route path='/meus-pedidos' element={<MeusPedidos/>} />
    </Routes>
  </HashRouter>
)
