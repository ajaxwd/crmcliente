import React from 'react';
import Swal from 'sweetalert2';
import {gql, useMutation} from '@apollo/client';

const ELIMINAR_PRODUCTO = gql`
    mutation eliminarProducto($id: ID!){
        eliminarProducto(id: $id)
    }
`;

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

const Producto = ({producto}) => {
    const { nombre, precio, existencia, id } = producto;

    //Mutation para poder eliminar productos
    const [ eliminarProducto ] = useMutation(ELIMINAR_PRODUCTO, {
        update(cache) {
            const { obtenerProductos} = cache.readQuery({
                query: OBTENER_PRODUCTOS
            });

            cache.writeQuery({
                query: OBTENER_PRODUCTOS,
                data: {
                    obtenerProductos: obtenerProductos.filter(productoActual => productoActual.id !== id)
                }
            })
        }
    });

    const confirmarEliminarProducto = () => {
        Swal.fire({
            title: '¿Desea eliminar a este producto?',
            text:'Esta acción no se puede deshacer',
            icon: 'Warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'No, Cencelar'
        }).then( async (result) => {
            if (result.value) {
                try {
                    // eliminar producto por id
                    const {data } = await eliminarProducto({
                        variables: {
                            id
                        }
                    });

                    Swal.fire(
                        'Correcto',
                        data.eliminarProducto,
                        'success'
                    )
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            }
        })
    }

    return (
        <tr>
            <td className = "border px-4 py-2">{nombre}</td>
            <td className = "border px-4 py-2">{existencia}</td>
            <td className = "border px-4 py-2">$ {precio}</td>
            <td className = "border px-4 py-2">
            <button
                    type = "button"
                    className = "flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
                    onClick = {() => confirmarEliminarProducto()}
                >
                    Eliminar
                </button>
            </td>
            <td className = "border px-4 py-2">
            <button
                    type = "button"
                    className = "flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
                    //onClick = {() => editarCliente()}
                >
                    Editar
                </button>
            </td>
        </tr>
        
    )
}

export default Producto;