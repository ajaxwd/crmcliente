import React, {useState, useEffect} from 'react';
import Layout from '../components/layout';
import Select from 'react-select';

const option = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: strawberry, label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
]


const NuevoPedido = () => {

    const {sabores, setSabores} = useState([]);

    useEffect(() => {
        console.log(sabores);
    }, [sabores])

    const seleccionarSabores = sabores => {
        setSabores(sabores);
    }

    return (
        <Layout>
            <h1 className = "text-2xl text-gray-800 font-light">Crear nuevo pedido</h1>
        

        <Select 
            options = {option}
            isMulti = {true}
            onChange = {option => seleccionarSabores(option)}
            getOptionValue = { opciones => opciones.id}
            getOptionLabel = {opciones => opciones.nombre}
            placeholder = "Seleccionar el Sabor"
            noOptionsMessage = {() => "No hay resultados"}
        />
        </Layout> 
    );
}

export default NuevoPedido;