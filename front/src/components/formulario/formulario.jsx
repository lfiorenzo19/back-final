import { useState } from "react";
import "./formulario.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [consulta, setConsulta] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    console.log("Formulario enviado:", { nombre, apellido, correo, consulta });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>

      <label>
        Apellido
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>

      <label>
        Correo Electrónico{" "}
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>

      <label>
        Envianos tu Consulta{" "}
        <input
          type="text"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
        />
      </label>

      <button className="BotonForm" type="submit">
        Enviar
      </button>
      {enviado && <p style={{
      backgroundColor:"black",
      color: "white",
      height:"3rem",
      alignContentContent: "center",
      fontFamily:"fantasy",
      fontSize: 24,
      letterSpacing: "2px",
      boxShadow:"0px 0px 10px #ffffff",
      borderRadius:"10px",
      margin:"0.5px"
      }} >Formulario Enviado</p>}
    </form>
  );
};

export default Formulario;
