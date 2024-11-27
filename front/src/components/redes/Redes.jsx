import { useState } from "react";
import "./redes.css";
import whatsAPP from "../../assets/images/whatsApp.png";



const Redes = () => {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const handleImagenClick = () => {
 setMostrarTexto(!mostrarTexto);
  };

  return (
    <div className="redes">
<p style={{
        backgroundColor:"black",
        color:"white",
        margin:"2rem",
        letterSpacing:"5px",
        borderRadius:"10px",
        boxShadow:"0px 0px 10px #ffffff",
      }}> Dirección:<br/>Monroe 4584</p>

<p style={{
        backgroundColor:"black",
        color:"white",
        margin:"2rem",
        letterSpacing:"5px",
        boxShadow:"0px 0px 10px #ffffff",
        borderRadius:"10px",
      }}>Teléfono: <br/>11-345 2346</p> 

      <img
        className="img"
        src={whatsAPP}
        alt="whatsApp"
        onClick={handleImagenClick}
      />
      {mostrarTexto && (
        <a href="https://web.whatsapp.com/" className="href">
          WhatsApp
        </a>
      )}

<p style={{
        backgroundColor:"black",
        color:"white",
        margin:"2rem",
        boxShadow:"0px 0px 10px #ffffff",
        borderRadius:"10px",
      }}>info@6roup.com</p>
    </div>
  );
};

export default Redes;
