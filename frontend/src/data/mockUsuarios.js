/**
 * Simulated data does not come from MySQL. It is used only for the user management screen.
 * within the dashboard with the initial state with which the table starts after the hook
 * los guarda en localstorage para que los cambios no se pierdan al recargar la página.
 */
//array of objects, each object is a simulated row of the users table
const mockUsers = [
  { id: 1, nombre: 'Mauricio Lara ',
    email: 'mauricio@inventario.com', rol: 'admin',
    activo: true},
  { id: 2, nombre: 'Yuri Casas ',
    email: 'Yuri@inventario.com', rol: 'vendedor',
    activo: true},
  { id: 3, nombre: 'Carlos Herrera ',
    email: 'carlos@inventario.com', rol: 'bodeguero',
    activo: false},
];