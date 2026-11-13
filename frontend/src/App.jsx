//piezas de react-router-dom Routes/route define el mapa de rutas
//Navigate sirve para redirigir de una url a otra
import { Navigate, Route, Routes} from 'react-router-dom';
//Guardian que protege las rutas privadas del dashboard 
//import ProtectedRoute from './Routes/ProtectedRoute';
//esqueleto visual (sidebar + topbar)que comparten las paginas del dashboard 
//import ProtectedRoute from './Routes/ProtectedRoute';

//paginas publicas y privadas de la aplicacion
import LoginPage from './Pages/LoginPage';
function NotFoundPage(){
  return (
    <h1 className="text-center mt-5">
      Página no encontrada
    </h1>
  );
}

function App() {
  return (
    <Routes>
      {/* Ruta raiz: manda directo al login (si ya hay sesion,
      ProtectedRoute se encargara de dejarlo pasar al dashboard)*/}
      <Route path="/" element={<Navigate to="login" replace/>}/>
      {/*ruta publica cualquiera  puede entrar a /login*/}
      <Route path="/login" element={<LoginPage />}/>
        {/** cualquier otra url que no coincida  */}
        <Route path="*" element={<NotFoundPage />} />

        {/*Grupo de rutas protegidas: todo lo que este dentro este Route solo se muestra
        si ProtectedRoute confirma que hay sesion activa; si no, redirige a /login*/}
        <Route element={<ProtectedRoute/>}/>
        <Route path="/dashboard" element={<DashboarLayout/>}/>
        <Route index element={<DashboardHome/>}/>
        <Route path='usuarios'element={<UsuariosPage/>}/>
      </Routes>
  )
}

export default App


