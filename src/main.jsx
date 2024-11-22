import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Aside from './components/Aside'
import Parrafo from './components/Parrafo'
import Formulario from './components/Formulario'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='main'>
      <div className='contenedor-aside'> <div className='aside'><Aside/></div><div className='aside'><Aside/></div> </div>
      <div className='contenedor-article'> 
        <h2>Article</h2>
      <div className='contenedor-parrafo1'> <Parrafo/> </div>
        <div className='contenedor-parrafo2'> <div className='parrafo'><Parrafo/></div><div className='parrafo'><Parrafo/></div>  </div>
      </div>
      <div className='contenedor-formulario'> <h2>Form</h2> <Formulario/> </div>
    </div>
  </StrictMode>,
)
