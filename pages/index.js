import Head from 'next/head'
import Layout from '../components/layout';
import Clientes from '../components/Clientes;'
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cliente from '../components/Clientes';

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

const Index = () => {

  const router = useRouter();
  
  // Consulta de apllo
  const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);

  if (loading) return 'Cargando...';

  // Si no hay información
  if(!data.obtenerClienteVendedor){ return router.push('/login'); }

  return (
    <div>
    <Layout>
      <h1 className = "text-2xl text-gray-800 font-light">Clientes</h1>
      <Link href="/nuevocliente">
        <a className="bg-blue-800 py-2 px-2 inline-block text-white rounded test-sm hover:bg-gray-800 mb-3 uppercase font-bold">
          Nuevo Cliente
        </a>
      </Link>
      <table className = 'table-auto shadow-md mt-10 w-full w-lg'>
        <thead className = 'bg-gray-800'>
          <tr className = 'text-white'>
            <th className = 'w-1/5 py-2'>Nombre</th>
            <th className = 'w-1/5 py-2'>Empresa</th>
            <th className = 'w-1/5 py-2'>Email</th>
            <th className = 'w-1/5 py-2'>Eliminar</th>
          </tr>
        <tbody>
          {data.obtenerClienteVendedor.map( cliente => (
            <Cliente 
            key = {cliente.id}
            cliente = {cliente}
            />
          ))}
        </tbody>
        </thead>
      </table>
    </Layout>
  </div>
  )
}


export default Index;