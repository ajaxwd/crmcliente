import React from 'react';
import Layout from '../components/layout';
import { gql, useQuery} from '@apollo/client';

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

const Productos = () => {

    //Consultar productos
    const {data, loading, error} = useQuery(OBTENER_PRODUCTOS);

    return (
        <Layout>
            <h1 className = "text-2xl text-gray-800 font-light">Productos</h1>

            <table className = 'table-auto shadow-md mt-10 w-full w-lg'>
        <thead className = 'bg-gray-800'>
          <tr className = 'text-white'>
            <th className = 'w-1/5 py-2'>Nombre</th>
            <th className = 'w-1/5 py-2'>Existencia</th>
            <th className = 'w-1/5 py-2'>Precio</th>
            <th className = 'w-1/5 py-2'>Eliminar</th>
            <th className = 'w-1/5 py-2'>Editar</th>
          </tr>
        <tbody>
          {data.obtenerProducto.map( producto => (
            <Producto
            key = {producto.id}
            producto = {producto}
            />
          ))}
        </tbody>
        </thead>
      </table>
        </Layout>
    );
}

export default Productos;