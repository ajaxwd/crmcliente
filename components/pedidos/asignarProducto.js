import React from 'react';
import Select from 'react-select';
import {gql, useQuery} from '@apollo/client';

const OBTENER_PRODUCTOS = gql`
    query obtenerProductos {
        obtenerProducots {
            id 
            nombre
            precio
            existencia
        }
    }
`;

const AsignarProducto = () => {

    //consulta a la base de datos
    const {data, loading, error} = useQuery(OBTENER_PRODUCTOS);

    if(loading) return null;

    const {obtenerProductos} = data;

    return (
        <>
        <p className = "mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">2.- Asigar un producto</p>
        <Select 
            className = "mt-3"
            options = {obtenerProductos}
            onChange = {option => seleccionarSabores(option)}
            getOptionValue = { opciones => opciones.id}
            getOptionLabel = {opciones => `${opciones.nombre} - ${opciones.existencia} Disponibles`}
            placeholder = "Buscar o seleccionar Productos"
            noOptionsMessage = {() => "No hay resultados"}
        />
        </>
    )
}

export default AsignarProducto;
