import React from 'react';
import { gql, useQuery } from '@apollo/client';

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

    // query de apollo
    const { data, loading, error } = useQuery(OBTENER_USUARIO);

    // proteger que no podamos acceder a los antes de que esten cargados
    if (loading) return null;

    const { nombre, apellido } = data.obtenerUsuario;
    
    return (
        <div className = "flex justify-between mb-6"> 
            <p className = "mr-2">Hola: {nombre} {apellido}</p>
            <button type = "button">
            Cerrar sesión
            </button>
        </div>
    );
}

export default Header;