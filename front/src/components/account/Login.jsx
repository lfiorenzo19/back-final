import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext'; 
import fondo from '../../assets/images/fondo2.jpg';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar mensajes de error
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/login', { username, password });

      // Obtener el rol del usuario desde la respuesta
      // const { role } = response.data;

      login(); // Llama a login después de un inicio de sesión exitoso

      // Redirigir en función del rol del usuario
      if (username === 'admin') {
        navigate('/productos'); // Redirige a la ruta productos si es admin
      } else {
        navigate('/protegida'); // Redirige a la ruta protegida si es cliente
      }

    } catch (error) {
      // Manejo de errores del servidor
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Mostrar mensaje de error del servidor
      } else {
        // Error genérico en caso de problemas de red u otros errores no especificados
        setErrorMessage('Error en el servidor. Por favor, inténtelo de nuevo más tarde.');
      }
    }
  };

  return (

    <div className='login-contenedor' style={{
      backgroundImage:`url(${fondo})`
          }}>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Iniciar Sesión</h2>
      <div className="error-message">{errorMessage}</div>
      <div className="form-group">
        <input
          type="text"
          className="login-input"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="login-input"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="login-button" type="submit">Iniciar Sesión</button>
    </form>
    </div>
  );
};

export default Login;
