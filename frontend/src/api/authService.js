/** 
 * concreta las llamadas a la api relacionadas con autenticacion
 * los componentes ( por ejemplo loginpage)
 no lo llaman axios
 directamente llaman a estas funciones que son mas faciles
 de leer y reutilizar
 */

 //nstancia de axios ya configurada con la url del backend y el token
 import axiosClient from "./axiosclient";
 //envia email y password al backend si son correctos el backend responde con
 // {token, usuario}si no axios lanza un error 
 //que el componente que llama debe capturar con try/catch
 export async function iniciarSesion(email,password
 ){
    const respuesta = await axiosClient.post 
    ('/auth/login',{email, password});
    return respuesta.data; //{token,usuario}
 }
 //pide el backend los datos dl usuario dueño del token actual
 //sirve por ejempl para validar la sesion cuando se recarga la pagina
 export async function obtenerperfil(){
    const respuesta = await axiosClient.get ('/auth/perfil');
    return respuesta.data; // {usuario}
    
 }


