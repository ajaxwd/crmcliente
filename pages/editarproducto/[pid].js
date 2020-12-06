import React from 'react';
import Layout from '../../components/layout';
import {useRouter} from 'next/router';
import {gql, useQuery, useMutation} from '@apollo/client';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const OBTENER_PRODUCTO = gql`
    query obtenerProducto($id: ID!) {
        obtenerProducot(id: $id) {
            nombre
            precio
            existencia
        }
    }
`;

const ACTUALIZAR_PRODUCTO = gql`
mutation actualiacionProducto($id: ID!, $input: ProductoInput) {
    actualizarProducto(id: $id, input: $input) {
        id 
        nombre
        existencia
        precio
    }
}
`;

const EditarProducto = () => {
    const router = useRouter();
    const {query: {id}} = router;

    //Consultar para obtener el producto
    const {data, loading, error} = useQuery(OBTENER_PRODUCTO, {
        variables: {
            id
        }
    });

    //Mutation actualizar producto
    const [actualiacionProducto] = useMutation(ACTUALIZAR_PRODUCTO);

    //Shema de validacion
    const schemaValidation = Yup.object({
        nombre: Yup.string()
                .required('El nobre del producto es obligatorio'),
        existencia: Yup.number()
                .required('Agrega la cantidad disponible')
                .positive('No se aceptan numeros negativos')
                .integer('La existencia debe ser numero positivo'),
        precio: Yup.number()
                .required('El precio es obligatorio')
                .positive('No se aceptan numeros negativos')
    });

    if(loading) return 'Cargando...';

    if(!data){
        return 'Acción no permitida';
    }

    const actualizarInfiProducto = valores => {
        const {nombre, existencia, precio} = valores;

        try {
            const {data} = await actualiacionProducto({
                variables: {
                    id,
                    input:{
                        nombre,
                        existencia,
                        precio
                    }
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    // redirigir hasta productos
    router.push('/productos');

    //Mostrar una alerta
    Swal.fire(
        'Correcto',
        'El producto se actualizo correctamente',
        'success'
    )

    const {obtenerProducto} = data;

    return (
        <Layout>
            <h1 className = "text-2xl text-gray-800 font-light">Editar Producto</h1>

            <div className = "flex justity-center mt-5">
                <div className = "w-full max-w-lg">
                    <Formik
                    enableReinitialize
                    initialValues={obtenerProducto}
                    validationSchema={schemaValidation}
                    onSubmit={valores => {
                        actualizarInfiProducto(valores)
                    }}
                    >
                        {props => {
                            return (

                       
                    <form className = "bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                    onsubmit = {props.handleSubmit}
                    >
                    <div className = "mb-4"> 
                        <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                        Nombre
                        </label>
                        <input 
                        className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        id = "nombre"
                        type = "text"
                        placeholder = "Nuevo Cliente"
                        value = {props.values.nombre}
                        onChange = {props.handleChange}
                        onBlur = {props.handleBlur}
                        >                      
                        </input>
                    </div>
                    { props.touched.nombre && props.errors.nombre ? (
                        <div className = "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className = "font-bold">Error</p>
                            <p>{props.errors.nombre}</p>
                        </div>
                        ) : null
                    }
                    <div className = "mb-4"> 
                        <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor="existencia">
                        Cantidad Disponible
                        </label>
                        <input 
                        className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        id = "existencia"
                        type = "number"
                        placeholder = "Cantidad Disponible"
                        value = {props.values.existencia}
                        onChange = {props.handleChange}
                        onBlur = {props.handleBlur}
                        >                      
                        </input>
                    </div>
                    { props.touched.existencia && props.errors.existencia ? (
                        <div className = "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className = "font-bold">Error</p>
                            <p>{props.errors.existencia}</p>
                        </div>
                        ) : null
                    }
                    <div className = "mb-4"> 
                        <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
                        Precio
                        </label>
                        <input 
                        className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        id = "precio"
                        type = "number"
                        placeholder = "Precio Producto"
                        value = {props.values.precio}
                        onChange = {props.handleChange}
                        onBlur = {props.handleBlur}
                        >                      
                        </input>
                    </div>
                    { props.touched.precio && props.errors.precio ? (
                        <div className = "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className = "font-bold">Error</p>
                            <p>{props.errors.precio}</p>
                        </div>
                        ) : null
                    }
                    <input
                        type = "submit"
                        className = "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                        value = "Guardar Cambios"
                    >
                    </input>
                    </form>
                         )
                        }}
                    </Formik>
                </div>
            </div>
        </Layout>
    );
}

export default EditarProducto;