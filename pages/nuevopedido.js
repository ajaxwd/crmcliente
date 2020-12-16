import React, {useContext} from 'react';
import Layout from '../components/layout';
import AsignarCliente from '../components/pedidos/asignarCliente';
import AsignarProducto from '../components/pedidos/asignarProducto';

//Context de pedido
import PedidoContext from '../contex/pedidos/pedidosContex';


const NuevoPedido = () => {

    // Utilizar context y extraer sus funciones y valores
    const pedidoContext = useContext(Pedidocontext);

    return (
        <Layout>
            <h1 className = "text-2xl text-gray-800 font-light">Crear nuevo pedido</h1>
        
        <AsignarCliente />
        <AsignarProducto />
        
        </Layout> 
    );
}

export default NuevoPedido;