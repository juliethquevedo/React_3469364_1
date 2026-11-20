/**
 * Pagina de bienvenida del dashboard {ruta/ dashboard} muestra
 * un resumen rapido co tarjetas Bootstrap usando la cantidad de registros activos de cada modulo simulado
*/

//Hook para leer el usuario logueado(mostrar su nombre en el saludo)
import { useAuth } from '../context/AuthContext.jsx';

//tarjeta reutilizable para mostrar un numero grande con su etiqueta
//recibe icono (clase de dashboard-icons) titulo total (numero) y color
function TarjetaResumen({ icono, titulo, total, color }) {
    return (
        <div className='col-sm-6 col-lg-3'>
            <div className={`card border-0 shadow-sm border-start border-4 border-${color}`}>
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
  const usuarios = [];
  const categorias = [];
  const subcategorias = [];
  const productos = [];
  return (
    <div>
      <h2 className='h4 mb-1'>Hola, {usuario?.nombre}</h2>
      <p className='text-muted mb-4'>Este es el resumen general del sistema de inventario</p>

      <div className="row g-3">
        <TarjetaResumen icono="bi-people" titulo="Usuarios activos" total={usuarios.filter(u => u.activo).length} color="primary" />
        <TarjetaResumen icono="bi-tags" titulo="Categorías activas" total={categorias.filter(c => c.activo).length} color="success" />
        <TarjetaResumen icono="bi-list" titulo="Subcategorías activas" total={subcategorias.filter(s => s.activo).length} color="warning" />
        <TarjetaResumen icono="bi-box" titulo="Productos activos" total={productos.filter(p => p.activo).length} color="danger" />
      </div>

      <div className='alert alert-info mt-4 mb-0'>
        <i className="bi-info-circle me-2"></i>
        Los datos de usuarios, categorías, subcategorías y productos de este panel son 
        <strong>simulados con JavaScript</strong> 
        (se guardan en el localStorage del navegador). 
        Solo el inicio de sesión está conectado a la base de datos real <code>inventario_react</code>.
      </div>
    </div>
  );
}
export default DashboardHome