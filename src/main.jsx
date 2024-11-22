import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Aside from './components/Aside'
import Article from './components/Article'
import Parrafo from './components/Parrafo'
import Formulario from './components/Formulario'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='main'>
      <div className='contenedor-aside'> <Aside/><Aside/> </div>
      <div className='contenedor-article'> 
        <Parrafo/>
        <div className='contenedor-parrafo'> <Parrafo/><Parrafo/>  </div>
      </div>
      <div className='contenedor-formulario'><Formulario/></div>
    </div>
  </StrictMode>,
)
