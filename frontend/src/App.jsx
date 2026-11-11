//piezas de react-router-dom Routes/route define el mapa de rutas
//Navigate sirve para redirigir de una url a otra
import { Navigate, Route, Routes } from 'react-router-dom';
//Guardián que protege las rutas privadas del dashboard
import ProtectedRoute from './Routes/ProtectedRoute';
//esqueleto visual (sidebar + topbar) que comparten las paginas del dashboard
import ProtectedRoute from './routes/ProtectedRoute';
//paginas publicas y privadas de la aplicacion
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <Routes>
      {/* Ruta raíz: manda directo al login (si ya hay sesion,
      ProtectedRoute se encargará de dejarlo pasar al dashboard)*/}
      <Route path="/" element={<Navigate to="/login" replace />} />
      {/*ruta publica cualquiera puede entrar a /login*/}
      <Route path="/login" element={<LoginPage />} />
      {/*Cualquier otra url que no coincida con las anteriores */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}


