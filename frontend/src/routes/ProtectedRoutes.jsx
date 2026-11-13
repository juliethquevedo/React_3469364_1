/**
 * componente guardian de ruta se usa envolviendo las rutas del dashboard en App.jsx si el usuario no esta inciado sesion lo redirige 
 * automaticamente a /login en vez de mostrar el contenido
 */
//Navigate redirige a otra ruta; Outlet renderiza la ruta hija activa
import {Navigatee, Outlet} from 'react-router-dom';
//Hook para leer el estado de sesion (usuario, cargando...)
import { useAuth } from './context/AuthContext';

// No recibe props: se usa como elemento envolvente en App.jsx
function ProtectedRoute(){
    //leemos del contexto si hay sesion activa y si todavia se esta verificando 
    const{ estaAutenticado, cargando }=
    useAuth();
    //Mientras se revisa su habia un sesion guardada en localStorage,
    //mostramos un mensaje corto en vez de parpadear hacia/login
    if (cargando){
        return(
            <div className="d-flex justify-content-center
            align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                </div>
            </div>
        );
    }
    //si no hay sesion activa ,<navigate> redirige a /login
    if (!estaAutenticado){
        return <Navigate to="/login" replace />;
    }
    //<Outlet /> renderiza la ruta hija que corresponda
    //(por ejemplo DashboardLayout con sus paginas internas)
    return <Outlet />;

}
//exprtamos el componente para usarlo en App.jsx
export default ProtectedRoute;