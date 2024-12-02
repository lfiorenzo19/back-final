

import './protegida.css';
import React, { useState } from 'react';
import Fondo2 from "../../assets/images/fondo2.jpg";

const novedades = [
  {
    id: 1,
    titulo: "Comprando $50000 obtené el 10% de descuento",
    descripcion: "Válido hasta 30/11/2024",
    fecha: "24/11/2024",
    contenido: "...",

  },
  {
    id: 2,
    titulo: "Participando en el sorteo hasta 50% OFF",
    descripcion: "Válido solo en Argentina ",
    fecha: "15/11/2024",
    contenido: "... "
  },
  {
    id: 3,
    titulo: "Obtén una Membresia vip",
    descripcion: " ¿Cómo obtenerla? ",
    fecha: "10/11/2024",
    contenido: "..."
  },
  {
    id: 4,
    titulo: "Envio Gratuito",
    descripcion: " ¿Cómo obtenerlo? ",
    fecha: "5 de Noviembre de 2024",
    contenido: "..."
  },

];


const Protegida = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (

    <section className="novedades-section" style={{
      backgroundImage: `url(${Fondo2})`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",

    }} >
      <div>
        <h2 className='membresia'>Membresía</h2>
        <div >

          <div className='redes'>
            <p style={{
              backgroundColor: "black",
              color: "white",
              margin: "2rem",
              letterSpacing: "3px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #ffffff",
            }}> Has ingresado a la sección disponible solo para clientes registrados </p>
            <p style={{
              backgroundColor: "black",
              color: "white",
              margin: "2rem",
              letterSpacing: "3px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #ffffff",
            }}>  </p>

            <p style={{
              backgroundColor: "black",
              color: "white",
              margin: "2rem",
              letterSpacing: "5px",
              boxShadow: "0px 0px 10px #ffffff",
              borderRadius: "10px",
            }}>¡OBTIENE GRANDES BENEFICIOS!</p>

          </div>


        </div>

      </div>

      <ul className="novedades-list">
        {novedades.map(novedad => (
          <li key={novedad.id} className="novedad-item">
            <h3>{novedad.titulo}</h3>
            <p>{novedad.descripcion}</p>
            <span>{novedad.fecha}</span>
            <button onClick={() => toggleExpand(novedad.id)}>
              {expanded === novedad.id ? 'Ver menos' : 'Ver más'}
            </button>
            <div
              className={`novedad-contenido ${expanded === novedad.id ? 'expandido' : ''}`}
            >
              <p>{novedad.contenido}</p>

            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Protegida;