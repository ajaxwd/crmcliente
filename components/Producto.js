import React from 'react';
import Swal from 'sweetalert2';

const Producto = ({producto}) => {
    const { nombre, precio, existencia, id } = produto;

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