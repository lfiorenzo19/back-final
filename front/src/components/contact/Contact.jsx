import Formulario from "../formulario/formulario";
import LocationMap from "../location/LocationMap";
import Fondo2 from "../../assets/images/fondo2.jpg";
import Redes from "../redes/Redes";
import "./Contact.css";

function Contact() {
  return (
    <div style={{
      backgroundImage: `url(${Fondo2})`,
      backgroundSize:"cover",
      display:"flex",
      
    }} className="bg-gray">
      
     <div> <Formulario /></div>
     <div>  <Redes /></div>
     <div><LocationMap /></div>
    </div>
  );
}
export default Contact;
