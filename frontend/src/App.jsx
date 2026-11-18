//piezas de react-router-dom Routes/route define el mapa de rutas
//Navigate sirve para redirigir de una url a otra
import { Navigate, Route, Routes} from 'react-router-dom';
//Guardian que protege las rutas privadas del dashboard 
//import ProtectedRoute from './Routes/ProtectedRoute';
//esqueleto visual (sidebar + topbar)que comparten las paginas del dashboard 
//import ProtectedRoute from './Routes/ProtectedRoute';
import DashboardLayout from './layout/DashboardLayout.jsx';

//paginas publicas y privadas de la aplicacion
import LoginPage from './page/Loginpage';
import DashboardHome from './page/DashboardHome';
import NotFoundPage from './page/NotFoundPage.jsx';

function App() {
  return (
    <Routes>
      {/* Ruta raiz: manda directo al login (si ya hay sesion,
      ProtectedRoute se encargara de dejarlo pasar al dashboard)*/}
      <Route path="/" element={<Navigate to="login" replace/>}/>
      {/*ruta publica cualquiera  puede entrar a /login*/}
      <Route path="/login" element={<LoginPage />}/>
        {/** cualquier otra url que no coincida  */}
        
        {/** Grupo de rutas protegidas: todo lo que este dentro este route solo muestra si ProtectedRoute confirma que hay sesion ACTIVA; si no, 
         * redirige a login 
         */}
      <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard" element={<DashboardLayout/>}>
         <Route index element= {<DashboardHome/>}/>
         <Route path = "usuario" element = {<UsuarioPage/>}/>

         </Route>

      </Route>
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App



