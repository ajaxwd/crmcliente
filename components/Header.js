import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const OBTENER_USUARIO = gql`
    query obtenerUsuario {
        obtenerUsuario{
            id
            nombre
            apellido
        }
    }
`;

const Header = () => {

    const router = useRouter();

    // query de apollo
    const { data, loading, error } = useQuery(OBTENER_USUARIO);

    // proteger que no podamos acceder a los antes de que esten cargados
    if (loading) return null;

    // Si no hay información
    if(!data){ return router.push('/login'); }

    const { nombre, apellido } = data.obtenerUsuario;

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        router.push('/login')
    }
    
    return (
        <div className = "flex justify-between mb-6"> 
            <p className = "mr-2">Hola: {nombre} {apellido}</p>
            <button
            onClick = {() => cerrarsesion()}  
            className = "bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md"
            type = "button">
            Cerrar sesión
            </button>
        </div>
    );
}

export default Header;