#PROYECTO EN REACT SISTEMA DE INVENTARIO
Elabordo con react+ Bootstrap y mysql
    El sistema de inventario contara con inicio de sesion con base de datos en mysql con
    contraseña encriptado y JWT
1 dashboar contara con gestion CRUD de **usuarios, categorias, subcategorias, productos**Usando datos simulados en javascript
## Stack Usado
Frontend = React 19 + Vite + Bootstrap 5 + React Router
Backend (solo para login) = Node.js + Express + JWT
Base de datos MySQL (XAMPP) + inventario_react
Encriptación de contraseña = bcrypt (bcryptjs)
Gestiones = Usuarios, categorías, subcategorías, productos / datos simulados en JS (useState + localStorage)
Automatización npm scripts + concurrently

## Pre Requisitos
#1
Instalar node.js verificar desde cmd con node -v
#2
Tener xampp instalado con mysql en puerto 3306
#3
Tener un editor de codigo
**Componente**
La pantalla se divide en piezas pequeñas y reutilizables
(Un boton, una tabla, un formulario, un menu)cada componente es una funcion de javascript que devuelve lo que tiene que mostrar
**JSX** una sintaxis que permite escribir algo parecido a html dentro de JavaScript por eso los archivos terminan con extension .jsx
ejemplo:
 ```jsx
funcion saludo(){
    return <h1 className= "text-primary">Hola,React</h1>
}
´´´
- **Estado (state)**
cada componente puede guardar datos que cambian por ejemplo, lo que el usuario escribe en un input, cuando el estado cambia React vuelve a dibujar automaticamente
solo lo necesario sin recargar la pagina

- **SPA**
la aplicacion se carga una sola vez en el navegador y luego cambia de pagina sin recargar para esto usamos `react-router-dom`

react solo se encarga de la interfaz grafica para el resto utilizamos:
- **vite**
para crear y correr el proyecto
- **Bootstrap**
para los estilos
- **axios**
para hablar entre el frontend y el backend
- **react-router-dom**
para las rutas

# paso para crear el proyecto
- 1 verifique que tengas node.js (node -v) cmd
- 2 Desde la raiz del proyecto crea el proyecto con react y vite
`npm create vite@latest frontend -- --template react`
- 3 Entre a la carpeta frontend con `cd frontend` y instale en el npm `install`
- 4 Instale las librerias : `npm install bootstrap bootstrap-icons react-router-dom axios`
- 5 Empaquetador optimisa y junta todo el css en un solo archivo al hacer `npm run build`
- 6 instala las dependencias del backend y frontend al tiempo `npm run install:all`
- 7 Ingresara la carpeta backend `npm init -y`
- 8 Instalar dependencias
- 8.1 `npm install express mysql2 bcryptjs jsonwebtoken cors dorenv`
- 8.2 crea .env dentro de backend para las variables de entorno
- 8.3 crea src/config/db.js
- 8.4 crea src/middlewares/verificarToken.js valida el token JWT en rutas protegidas
- 8.5 crea src/controllers/auth.controller.js es la logica de inicio de sesion
- 8.6 crea `src/routes/auth.routes.js` conecta las rutas con el controlador
- 8.7 crea `src/server.js` arma la app de express
- 8.8 crea en backend `seed.js` crea el usuario administrador
- 9 crear las siguientes carpetas en frontend
- 9.1 src/api/axiosClient.js
- 9.2 src/api/authService.js
- 9.3 src/context/AuthContext.jsx
- 9.4 src/page/LoginPage.jsx