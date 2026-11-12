/**
 * componente guardian de ruta se usa envolviendo las rutas del dashboard en App.jsx si el usuario no esta inciado sesion lo redirige 
 * automaticamente a /login en vez de mostrar el contenido
 */
//Navigate redirige a otra ruta; Outlet renderiza la ruta hija activa
import {Navigatee, Outlet} from 'react-router-dom';
//Hook para leer el estado de sesion (usuario, cargando...)
import { useAuth } from './context/AuthContext';