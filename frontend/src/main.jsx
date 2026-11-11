//Ayuda a detectar errores comunes en el desarrollo
import { StrictMode } from 'react'
// Es la funcion moderna de react 18+ para montar la aplicacion en dom
import { createRoot } from 'react-dom/client'
//Habilita el manejo de las rutas basado en la URL del navegador
import { BrowserRouter } from 'react-router-dom'
// Estilos de bootstrap clases como btn, container, table y demas
import 'bootstrap/dist/css/bootstrap.min.css';
// Iconos de bootstrap clases como bi bi-person, bi bi-trash y demas
import 'bootstrap-icons/font/bootstrap-icons.css';
// javascript de bootstrap necesario para los modales
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//Estilos propios del proyecto se cargan solos despues del bootsatrap
//Describe detalles puntuales de la aplicacion
import './index.css'
// Componente raiz con todas las rutas de la aplicacion
import App from './App.jsx'
// proveedor con contexto de sesion (ver context/AuthContext.jsx)
import { AuthProvider } from './context/AuthContext.jsx'
//busca el <div="root">de index.html y engancha react ahi dentro  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      {/* AuthProvider comparte con toda la aplicacion quien es usuario logueado */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)