import React from 'react';
import Swal from 'sweetalert2'
import {gql, useMutation} from '@apollo/client';

const ELIMINAR_CLIENTE = gql`
    mutation eliminarCliente($id: ID!){
        eliminarCliente(id:$id)
    }
`;

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

const Cliente = ({cliente}) => {

    //Mutation de eliminar cliente
    const [ eliminarCliente ] = useMutation(ELIMINAR_CLIENTE, {
        update(cache){
            //obtener copia del objeto de cache
            const { obtenerclientesVendedor } = cache.readQuery({ query: OBTENER_CLIENTES_USUARIO});

            // Reescribir cache
            cache.writeQuery({
                query: OBTENER_CLIENTES_USUARIO,
                data: {
                    obtenerclientesVendedor: obtenerclientesVendedor.filter( clienteActual => clienteActual.id °== id)
                }
            })
        }
    });

    const { nombre, apellido, empresa, email, id } = cliente;

    // Eliminar un cliente
    const confirmarEliminarCliente = (id) => {
        Swal.fire({
            title: '¿Desea eliminar a este cliente?',
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
                    // Eliminar por ID
                    const { data } = await eliminarCliente({
                        variable: {
                            id
                        }
                    });
                    // Mostrar una alerta
                    Swal.fire(
                        'Eliminado',
                        data.eliminarCliente,
                        'success'
                    )
                } catch (error) {
                    
                }
            }
        })
    }
    

    return (
        <tr>
            <td className = "border px-4 py-2">{nombre} {apellido}</td>
            <td className = "border px-4 py-2">{empresa}</td>
            <td className = "border px-4 py-2">{email}</td>
            <td className = "border px-4 py-2">
                <button
                    type = "button"
                    className = "flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
                    onClick = {() => confirmarEliminarCliente(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

export default Cliente;