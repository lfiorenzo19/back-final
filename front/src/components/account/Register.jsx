import  { useState } from 'react';
import api from './api';
import fondo from '../../assets/images/fondo2.jpg';
import './Register.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', { username, password });
      alert('Usuario registrado con éxito');
    } catch (error) {
      alert('Error al registrar: ' + error.response.data);
    }
  };

  return (
    <div className="register-container"  style={{
      backgroundImage: `url(${fondo})`
    }}>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Registrar Usuario</h2>
        <div className="form-group">
          <input
            type="text"
            className="register-input"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="register-input"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="register-button" type="submit">Registrar Usuario</button>
      </form>
    </div>
  );
};

export default Register;
