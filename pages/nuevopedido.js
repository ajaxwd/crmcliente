import React from 'react';
import Layout from '../components/layout';
import AsignarCliente from '../components/pedidos/asignarCliente';


const NuevoPedido = () => {


    return (
        <Layout>
            <h1 className = "text-2xl text-gray-800 font-light">Crear nuevo pedido</h1>
        
        <AsignarCliente />
        
        </Layout> 
    );
}

export default NuevoPedido;