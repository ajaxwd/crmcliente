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
        cliente: [],
        productos: [],
        total: 0
    }

    const [state, dispatch] = useReducer(PedidoReducer, initialState);

    return (
        <Pedidocontext.Provider
        value={{

        }}
        >{children}
        </Pedidocontext.Provider>
    );
}

export default PedidoState;