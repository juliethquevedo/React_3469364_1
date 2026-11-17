/**
 * Pagina de bienvenida del dashboard {ruta/ dashboard} muestra
 * un resumen rapido co tarjetas Bootstrap usando la cantidad de registros activos de cada modulo simulado
*/

//Hook para leer el usuario logueado(mostrar su nombre en el saludo)
import{useAuth} from '../context/AuthContext';
//Hook generico crud simulado (solo usamos listas)
import useCrudSimulado from '/hooks/useCrudSimulado';
//datos iniciales de cada modulo
import mockUsuarios from '../data/mockUsuarios';
import mockSubCategorias from  '../data/mockSubCategorias';
import  mockProductos from  '../data/mockProductos';

//tarjeta reutilizable para mostrar un numero grande con su etiqueta
//recibe icono (clase de dashboard-icons) titulo total (numero) y color
function TarjetaResumen({ icono, titulo, total, color }) {
    return (
        <div className='col-sm-6 col-lg-3'>
            <div className='card border-0 shadow-sm border-start border-4 border-${color}'>
                <div className='card-body d-flex align-items-center gap-3'>
                <i className={`bi ${icono} fs-1 text-${color}`}></i>
                <div>
                    <div className='fs-3 fw-bold'>{total}</div>
                    <div className='text-muted small'>{titulo}</div>
                </div>
            </div>
        </div>
        </div>
    );
}

//no recibe props: es el "element" de la ruta index de / dashboard en App.jsx
function DashboardHome(){
    //solo necesitamos el usuario logueado para mostrar su nombre
    const { usuario }= useAuth();
    /**
     * Reutilizamos el mismo look que usan las paginas de gestion para leer la cantidad
     * de registros guardados o los datos iniciales
     * si todavia no se ha guardado nada de localStorage
    */
  const { lista: usuarios } = useCrudSimulado('usuarios',
        mockUsuarios);
    const { lista: categorias } = useCrudSimulado('categorias',
        mockCategorias);
    const { lista: subcategorias } = useCrudSimulado
        ('subcategorias', mockSubCategorias);
    const { lista: productos } = useCrudSimulado('productos',
        mockProductos);
}