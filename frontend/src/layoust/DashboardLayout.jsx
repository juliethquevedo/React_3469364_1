/**
 * esqueleto visual que comparten TODAS las paginas del dashboard
 * (inicio,usuarios,categorias,subcategorias, productos):
 * sidebar a la izqquierda + Topbar arriba + el contenido de la
 * pagina actual en el medio ( a traves de <Outlet/>)
 *
 */

//outlet marca el punto de donde se pinta la ruta hija activa
import {Outlet} from 'react-router-dom';
//menu lateral de navegacion
import Sidebar from '../components/common/Sidebar.jsx';
//barra superior con usuario y boton de salir
import Topbar from '../components/common/Topbar.jsx';

function DashboardLayout() {
  return (
    <div className="d-flex">
      <Sidebar/>
      {/*flex-grow-1 hace que esta columna
      aocupe todo el espacio restante despues del
      ancho fijo del Sidebar */}
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh', backgroundColor: '#f4f6f9' }}>
        <Topbar />
        <main className="p-4">
          {/*Outlet renderiza la ruta hija
          activa DashboardHome, usuariosPage,
          categoriaPage, .....segun la url */}
        </main>
      </div>
    </div>
  )
}

//exportamos el layout para usarlo en la ruta / dashboard de App.jsx
export default DashboardLayout;