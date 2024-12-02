import { useState } from 'react';
import axios from 'axios';
import "./formulario.css";

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/mail/send-mail', formData);

      alert('Correo enviado con éxito');
    } catch (error) {
      //console.error('Error:', error.response.data.error);
      alert('Error al enviar el correo');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      
      <label> Nombre <input name="name" type="text" placeholder="Nombre" onChange={handleChange} /></label>
      <label> Correo Electrónico <input name="email" type="email" placeholder="Email" onChange={handleChange} /></label>
      <label>Envianos tu mensaje <textarea name="message" placeholder="Mensaje" onChange={handleChange} /></label>
      <button className='BotonForm' type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
