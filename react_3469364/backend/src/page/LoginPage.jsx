/**
 * pantalla login funcional
 * pantalla publica de inicio de sesion es la unica parte del
 * sistema que habla con a base de datos MYSQL rel a travez del backend Node/Express
   si las credenciales son correctas
   rediriji al usuario al dashboard

*/
//Hook del estado local para los campos del formulario
import { useState } from "react";
//hook para redirigir por codio despues de inicia5r sesion
import {useNavigate} from 'react-router-dom';
//Hook para llamar a login() del contexto global de sesion 
import { useAuth } from "../context/AuthContext";

//no recibe props es el element de la ruta publica /login en App.jsx
function LoginPage(){
    //traemos solo la funcion login() del contexto no se necesita mas 
    const {login} = useAuth();
//Funcion para cambiar la url una vez el login sea exitoso 
const navigate = useNavigate();
// estado del formulario controlado
const [email, setEmail]= useState('');
const [password,setPassword]=useState('');
//estado para demostrar el error que devuelva el backend credenciales
//invalidas, usuario desactivado servidor caido o demas
const [error, setError] = useState ('');
//estado para deshabilitar el boton mientras espera la respuesta 
//del servidr y evitar que el usuario haga doble clic
const[enviado, setEnviado] = useState (false);
//Se ejecuta cuando el usuario envia el formulario boton o enter
async function manejarEnvio(evento){
    evento.preventDefault(); //evita que e navegador recargue la pagina
    setError('');//limpia cualquier error de un intento anterior
    setEnviando(true);//deshabilita el boton mientras esperamos la respuesta
    try{
        //login () esta definido en Autocontext: llama al backend
        //Guarda el token/usuario y actualiza el estado global 
         await login(email, password);
    // si no lanzo error , las credenciales fueron correctos
    navigate('/dashboard', { replace: true });
  } catch (err) {
    //si el backend respondio un mensaje error (401, 403 ...)
    //axios lo deja disponible en err.response.data.mensaje
    const mensajeBackend = err?.response?.data?.mensaje;
    setError(mensajeBackend || 'no se pudo conectar con el servidor. Verifica que el backend este corriendo');
  } finally{
    //finally se ejcuta siempre (haya exito o error) reactivamos el boton
    setEnviando(false);
  }
}
}


