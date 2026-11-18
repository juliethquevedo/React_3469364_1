/**
 * pagina que muestra cuando la URL no coincide con ninguna
 * ruta definida por App.jsx
 */

//link crea una navegacion interna sin recarga la pagina 
import { Link }from'react-router-dom';

//no recibe props es el elemento de la nueva ruta comodin en App.jsx
function NotFoundPage (){
    return(
        <div className='d-flex flex-column align-items-center justify-content-center vh-100 text-center px'>
            <h1 className='display-4 fw-bold text-primary'>404</h1>
            <p className='text-muted mb-4'>La pagina no existe</p>
            <Link to="/"className='btn btn-primary'>Volver al inicio
            </Link>
            </div>
    );
}
export default NotFoundPage