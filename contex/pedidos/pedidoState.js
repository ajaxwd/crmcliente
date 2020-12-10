import React, {useReducer} from 'react';
import Pedidocontext from './pedidoContex';
import PedidoReducer from './pedidoReduce';

import {
    SELECCIONAR_CLIENTE,
    SELECCIONAR_PRODUCTO,
    CANTIDAD_PRODUCTOS
} from '../../type';