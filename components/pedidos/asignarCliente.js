import React, {useState, useEffect} from 'react';
import Select from 'react-select';

const clientes = [
    {value: 1, label: 'adrian'},
    {value: 2, label: 'eduardo'},
    {value: 3, label: 'adrian eduardo'},
]


const asignarCliente = () => {
    const {cliente, setCliente} = useState([]);

    useEffect(() => {
        console.log(cliente);
    }, [cliente])

    const seleccionarCliente = clientes => {
        setSabores(clientes);
    }

    return (
        <Select 
            options = {clientes}
            isMulti = {true}
            onChange = {option => seleccionarSabores(option)}
            getOptionValue = { opciones => opciones.id}
            getOptionLabel = {opciones => opciones.nombre}
            placeholder = "Buscar o seleccionar cliente"
            noOptionsMessage = {() => "No hay resultados"}
        />
    );

}

export default asignarCliente;