/**
 * Barra superior del dashboard muestra el nombre del usuario
 * logueado (viene del AuthContext) y un boton para cerrar sesion
 */

//hook para navegar automaticamente (sinque el usuario haga clic en un link )
import { useNavigate } from 'react-router-dom';
//Hook paras leer el usuario logueado y la funcion logout
import { useAuth } from '../../context/AuthContex.jsx';
// no recibe props toma todo lo que necesita del AuthContext
function Topbar() {
    //Usuario datos qde quien inicio sesion; logout borra la sesion
    const { usuario, logout } = useAuth();
//funcion para cambiar de url desde javascript 
    const navigate = useNavigate();

    //al cerrar sesion limpiamos el contexto / localStorage y 
    //mandamos el usuario de vuelta a la pantalla login
    function manejarLogout(){
        logout();
        navigate('/login',{replace: true});
    }
return (
        <nav className='navbar navbar-light bg-white border-bottom px-4 py-3'>
            <span className='navbar-brand mb-0 h1 fs-6 text-muted'>Panel de administracion</span>
            <div className='d-flex align-items-center gap-3'>
    <div className='text-end d-none d-sm-block'>
    <div className='fw-semibold'>
        {usuario?.nombre}</div>
    <small className='text-muted text-capitalize'>{usuario?.rol}</small>
</div>
<button className='btn btn-outline-danger btn-sm d-flex align-items-center gap-1' onClick={manejarLogout}>
    <i className='bi bi-box-arrow-right'></i>
    Salir
</button>
</div>
        </nav>
);
 }

 export default Topbar

