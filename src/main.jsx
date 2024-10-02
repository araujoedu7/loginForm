import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Login } from './componentes/areaLogin/index.jsx'
import { Navbar } from './componentes/Nav/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> ,
    <Navbar />
    <Login />  
  </StrictMode>,
)
