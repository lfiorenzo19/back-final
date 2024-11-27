import "./Home.css";
import ImageCarousel from "../Carrusel/carrusel.jsx";

function Home() {
  return (
    <div className="div-home">
      <ImageCarousel />
      <h5 className="titulo">
        ¡Bienvenid@ a 6ROUP! <br />
        Aprovechá nuestras ofertas especiales y descubrí productos increíbles.<br />
        Si necesitas ayuda, estamos aquí para ti. ¡Empezá a explorar!
      </h5>
      <aside>
        <div className="new">
          <div className="tarjetas d-flex flex-wrap justify-content-between">
            <div className="card-container d-flex flex-column align-items-center mb-3">
              <h5>¿Cómo pedir?</h5>
              <i className="bi bi-cart-fill fs-4 mb-2"></i>
              <p>Podes comprar en nuestro local (Av. Monroe 4584) o por la Web</p>
            </div>
            <div className="card-container d-flex flex-column align-items-center mb-3">
              <h5>Envíos y Retiros</h5>
              <i className="bi bi-box-seam fs-4 mb-2"></i>
              <p>Belgrano - Palermo / Envíos SIN CARGO a partir de $50.000</p>
            </div>
            <div className="card-container d-flex flex-column align-items-center mb-3">
              <h5>Formas de Pago</h5>
              <i className="bi bi-credit-card fs-4 mb-2"></i>
              <p>Efectivo, Transferencias, Débito, MercadoPago, Cuenta DNI</p>
            </div>
            <div className="card-container d-flex flex-column align-items-center mb-3">
              <h5>Seguinos en Instagram</h5>
              <i className="bi bi-instagram fs-4 mb-2"></i>
              <p>¡Ya tenemos cuenta en Instagram! Seguinos para más info</p>
            </div>
          </div>
        </div>
    
      </aside>
    </div>
  );
}

export default Home;

