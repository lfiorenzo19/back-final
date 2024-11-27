import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditarProducto.css'; 

const EditarProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/productos/${id}`);
        const data = await response.json();
        setProducto(data);
        setNombre(data.nombre);
        setPrecio(data.precio);
        setDescripcion(data.descripcion);
        setCategoria(data.categoria);
        setImagen(data.imagen);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, precio, descripcion, categoria, imagen }),
      });
      if (response.ok) {
        navigate('/productos');
      } else {
        console.error('Error al actualizar el producto');
      }
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="editar-producto-container">
      <h2>Editar Producto</h2>
      <form className="editar-producto-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoría</label>
          <input
            type="text"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen</label>
          <input
            type="text"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="editar-producto-btn">
          Actualizar Producto
        </button>
      </form>
    </div>
  );
};

export default EditarProducto;
