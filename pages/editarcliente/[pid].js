import React from 'react';
import Layout from '../../components/layout';
import { gql, useQuery} from '@apollo/client';

const OBTENER_CLIENTE = gql`
query obtenerCliente($id: ID!){
    obtenerCliente(id: $id) {
        nombre
        apellido
        email
        telefono
        empresa
    }
}
`;


const EditarCliente = () => {

    // obtener el ID actual
    const router = useRouter();
    const { query: id } = router;
    console.log(id);

    // obtener cliente
    const { data, loading, error} = useQuery(OBTENER_CLIENTE, {
        variable: {
            id
        }
    });

    if(loading) return 'Cargando...';
  
    return (
        <Layout>
            <h1 className = "text-2xl text-gray-800 font-light">Editar Cliente</h1>

            <div className = "flex justity-center mt-5">
                <div className = "w-full max-w-lg">
                    <form className = "bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                    onsubmit = {formik.handleSubmit}>
                    <div className = "mb-4"> 
                        <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                        Nombre
                        </label>
                        <input 
                        className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        id = "nombre"
                        type = "text"
                        placeholder = "Nuevo Cliente"
                        value = {formik.values.nombre}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        >                      
                        </input>
                    </div>
                    { formik.touched.nombre && formik.errors.nombre ? (
                        <div className = "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className = "font-bold">Error</p>
                            <p>{formik.errors.nombre}</p>
                        </div>
                        ) : null
                    }
                    <div className = "mb-4"> 
                        <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                        Apellido
                        </label>
                        <input 
                        className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        id = "apellido"
                        type = "text"
                        placeholder = "Nuevo Cliente"
                        value = {formik.values.apellido}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        >                      
                        </input>
                    </div>
                    { formik.touched.apellido && formik.errors.apellido ? (
                        <div className = "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className = "font-bold">Error</p>
                            <p>{formik.errors.apellido}</p>
                        </div>
                        ) : null
                    }
                    <div className = "mb-4"> 
                        <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor="empresa">
                        Empresa
                        </label>
                        <input 
                        className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        id = "empresa"
                        type = "text"
                        placeholder = "Nuevo Cliente"
                        value = {formik.values.empresa}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        >                      
                        </input>
                    </div>
                    { formik.touched.empresa && formik.errors.empresa ? (
                        <div className = "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className = "font-bold">Error</p>
                            <p>{formik.errors.empresa}</p>
                        </div>
                        ) : null
                    }
                    <div className = "mb-4"> 
                        <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                        </label>
                        <input 
                        className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        id = "email"
                        type = "email"
                        placeholder = "Nuevo Cliente"
                        value = {formik.values.email}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        >                      
                        </input>
                    </div>
                    { formik.touched.email && formik.errors.email ? (
                        <div className = "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className = "font-bold">Error</p>
                            <p>{formik.errors.email}</p>
                        </div>
                        ) : null
                    }
                    <div className = "mb-4"> 
                        <label className = "block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                        Telefono
                        </label>
                        <input 
                        className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        id = "telefono"
                        type = "tel"
                        placeholder = "Nuevo Cliente"
                        value = {formik.values.telefono}
                        onChange = {formik.handleChange}
                        onBlur = {formik.handleBlur}
                        >                      
                        </input>
                    </div>
                    { formik.touched.telefono && formik.errors.telefono ? (
                        <div className = "my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className = "font-bold">Error</p>
                            <p>{formik.errors.telefono}</p>
                        </div>
                        ) : null
                    }
                    <input
                        type = "submit"
                        className = "bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                        value = "Registrar Cliente"
                    >
                    </input>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default EditarCliente;