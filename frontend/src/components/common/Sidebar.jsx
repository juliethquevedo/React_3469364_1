/**
 * Menu lateral del dashboard Usa <NavLink> de
 * react-router-dom
 * en vez de <Link> porque <NavLink> sabe
 * automaticamente cuando su ruta esta activa (la URL
 * actual concide ) y nos deja pintarla
 * distinto (clase "active")
 */
//lista de items del menu mientras mas crece el dashboard , solo hay que agregar
//un objeto aca (evita repetir lo mismo <NavLink> 5 veces)
const opcionesMenu = [
  { texto: 'Inicio', ruta: '/dashboard', icono: 'bi-house-door', fin: true },
  { texto: 'Usuarios', ruta: '/dashboard/usuarios', icono: 'bi-people' },
  { texto: 'Categorias', ruta: '/dashboard/categorias', icono: 'bi-tags' },
  { texto: 'Subcategorias', ruta: '/dashboard/subcategorias', icono: 'bi-diagram-3' },
  { texto: 'Productos', ruta: '/dashboard/productos', icono: 'bi-box-seam' },
];