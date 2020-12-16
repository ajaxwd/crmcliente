import React, {useState, useEffect, useContext} from 'react';
import Select from 'react-select';
import {gql, useQuery} from '@apollo/client';
import Pedidocontext from '../../contex/pedidos/pedidoContex';

const OBTENER_CLIENTES_USUARIO = gql`
  query obtenerClienteVendedor {
    obtenerClienteVendedor {
      id
      nombre
      apellido
      empresa
      email
    }
  }
`;

const asignarCliente = () => {
    const {cliente, setCliente} = useState([]);

    // Context de pedidos
    const pedidoContext = useContext(pedidoContext);
    const {asignarCliente} = pedidoContext;

    // Consultar la base de datos
    const {data, loading, error} = useQuery(OBTENER_CLIENTES_USUARIO);

    useEffect(() => {
      asignarCliente(cliente);
    }, [cliente])

    const seleccionarCliente = clientes => {
        setCliente(clientes);
    }

    // Resultado de la consulta
    if(loading) return null;

    const {obtenerClientesVendedor} = data;

    return (
        <>
        <p className = "mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">1.- Asigar un cliente</p>
        <Select 
            className = "mt-3"
            options = {obtenerClientesVendedor}
            onChange = {option => seleccionarSabores(option)}
            getOptionValue = { opciones => opciones.id}
            getOptionLabel = {opciones => opciones.nombre}
            placeholder = "Buscar o seleccionar cliente"
            noOptionsMessage = {() => "No hay resultados"}
        />
        </>
    );

}

export default asignarCliente;