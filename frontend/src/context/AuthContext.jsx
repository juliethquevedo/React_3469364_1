/**
 * contexto global de autenticacion permite que cualquier
 * componente de la app (sidebar, navbar, paginas protegidas y demas)
 * sepa si hay un usuario logueado quien es y pueda cerrar sesion
 * sin tener que pasar esa info "a mano" del componente en
 * componente (eso se llama "prop drilling" y el context lo evita)
 */

import { createContext, useContext, useEffect, useState } from "react";

// Funcion que llama al backend para validar email/password
import { iniciarSesion } from "../api/authService";

// 1) creamos el contexto (una especie de caja compartida)
const AuthContext = createContext(null);

// 2) componente proveedor: envuelve la app y le da acceso
export function AuthProvider({ children }) {
    // Guardar datos publicos del usuario logueado (o null si no hay sesion)
    const [usuario, setUsuario] = useState(null);
    
    // cargando: true mientras revisamos si ya había una sesion guardada
    const [cargando, setCargando] = useState(true);

    // useEffect con arreglo vacio [] -> se ejecuta UNA sola vez
    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuario');
        const tokenGuardado = localStorage.getItem('token');
        
        if (usuarioGuardado && tokenGuardado){
            setUsuario(JSON.parse(usuarioGuardado));
        }
        setCargando(false);
    }, []);

    // funcion de login
    async function login(email, password) {
        const { token, usuario: usuarioRecibido } = await iniciarSesion(email, password);
        localStorage.setItem('token', token);
        setUsuario(usuarioRecibido);
        localStorage.setItem('usuario', JSON.stringify(usuarioRecibido));
    }

    // funcion de logout (AHORA ESTÁ FUERA DE LOGIN, PERO DENTRO DE AuthProvider)
    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        setUsuario(null);
    }

    // valor que va a estar disponible para cualquier componente
    const value = {
        usuario,
        cargando,
        estaAutenticado: !!usuario, // convierte usuario en true o false
        login,
        logout,
    };

    // todo lo que esta dentro del <AuthContext.Provider> puede leer value
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

/**
 * Hook personalizado para consumir el contexto mas facil:
 */
export function useAuth() {
    const contexto = useContext(AuthContext);
    
    if (!contexto) {
        throw new Error('useAuth debe usarse dentro de un <AuthProvider>');
    }
    
    return contexto;
}

