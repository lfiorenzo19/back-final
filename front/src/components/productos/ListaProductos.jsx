import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListaProductos.css';


const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/productos`);
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los Productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className='lista-contenedor'>
      <h2>Listado de Productos</h2>
     
      <ul>
        {productos.map((producto) => (
          <li key={producto._id}>
            {producto.nombre} - <Link to={`/productos/${producto._id}`} >Ver Detalle</Link>
          </li>
        ))}
      </ul>
      <div className="lista-boton">
      <Link to="/crear-producto" className="crear-producto">Crear nuevo Producto</Link>

      </div>
      
    </div>
  );
};

export default ListaProductos;