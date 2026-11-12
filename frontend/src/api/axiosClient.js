/**
 * se crea una instancia configurada de axios para hablar con el
 * backend (node/express) en vez de escribir la url completa
 * cada peticion la dejamos configurada una vez aqui
 */



//libreria para hacer peticiobnes HTTP (GET POST )
import axios from 'axios';

/** url base del backend en un royecti real esto vendria de una
 * variable de entorno de vite (import.meta.env VITE_API_URL),
 * pero la vamos a dejar fija apuntando al backend
 */
const API_URL = 'http://localhost:4000/api';
//axios.create genera una instancia propia distina de los axios global
//con configuracion ya lista para usar en toda la aplicacion
const axiosClient = axios.create({
    baseURL: API_URL, //se antepone automaticamente a cada ruta relativa ej: /auth/login
    headers: {
        'Content-Type': 'application/json',// le avisamos al backend que mandamos al json
    },
});

/** 
 * interceptor de peticiones se ejecuta antes de enviar cada 
 * peticion aqui aprovechamos para agregar automaticamente el
 * token JWT guardado en el LocalStortage (si existe)al header
 * Authorization para no tener que repetirlo en cada llamada 
 */
axiosClient.interceptors.request.use((config) => { 
//revisamos si hay
const token= localStorage.getItem('token');
if (token){
//lo agregamos al header en e formato que espera el backend:
//authorization: Beader <token>
config.headers.Authorization =`Bearer $ {token}`;
}
//siempre hay que devolver "config" si o no la peticion nunca se envia 
return config;
});
// Exportamos la instancia ya configurada para usarla en toda la app
export default axiosClient;