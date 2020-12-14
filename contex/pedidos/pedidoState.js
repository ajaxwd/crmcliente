import React, {useReducer} from 'react';
import Pedidocontext from './pedidoContex';
import PedidoReducer from './pedidoReduce';

import {
    SELECCIONAR_CLIENTE,
    SELECCIONAR_PRODUCTO,
    CANTIDAD_PRODUCTOS
} from '../../type';

const PedidoState = (children) => {

    //State de Pedidos
    const initialState = {
        cliente: {},
        productos: [],
        total: 0
    }

    const [state, dispatch] = useReducer(PedidoReducer, initialState);

    // Modifcar cliente 
    const agregarCliente = cliente => {

        dispatch({
            type: SELECCIONAR_CLIENTE,
            payload: cliente
        })
    }

    return (
        <Pedidocontext.Provider
        value={{
            agregarCliente
        }}
        >{children}
        </Pedidocontext.Provider>
    );
}

export default PedidoState;