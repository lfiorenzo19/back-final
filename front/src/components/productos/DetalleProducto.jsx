import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; 
import './DetalleProducto.css'; 

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/productos/${id}`);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error al obtener el Producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/productos/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          navigate('/productos');
        } else {
          console.error('Error al eliminar el producto');
        }
      } catch (error) {
        console.error('Error al eliminar el producto', error);
      }
    }
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="detalle-producto-container">
      <h2 className="producto-nombre">{producto.nombre}</h2>
      <div className="producto-info">
        <p>
          <strong>Precio:</strong> ${producto.precio.toFixed(2)}
        </p>
        <p>
          <strong>Descripción:</strong> {producto.descripcion}
        </p>
        <p>
          <strong>Categoría:</strong> {producto.categoria}
        </p>
        
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="producto-imagen" 
        />
      </div>
      <div className="acciones">
        <Link to={`/editar-producto/${producto._id}`} className="btn-accion editar">
          <FaEdit /> Editar
        </Link>
        <button onClick={handleDelete} className="btn-accion eliminar">
          <FaTrashAlt /> Eliminar
        </button>
      </div>
    </div>
  );
};

export default DetalleProducto;
