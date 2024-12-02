import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import api from "./api";
import { Container, Row, Col } from "react-bootstrap";
import "./CardB.css";

function CardB() {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [mensajeGracias, setMensajeGracias] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Corrección: Extraer los datos de la respuesta correctamente
        const response = await api.get('/productos');
        const data = response.data;
        setProducts(data);
        setLoading(false);
        const initialQuantities = {};
        data.forEach((product) => {
          initialQuantities[product._id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const quantity = quantities[product._id];
    const existingItem = cartItems.find(
      (item) => item.product._id === product._id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity }]);
    }
    setShow(true);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setMensajeGracias("¡Gracias por tu compra!");
    setTimeout(() => {
      setCartItems([]);
      setShow(false);
      setMensajeGracias(""); 
    }, 2000); 
  };

  const handleQuantityChange = (productId, delta) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] + delta, 1),
    }));
  };

  if (loading) {
    return (
      <div>
        <h5>Cargando...</h5>
      </div>
    );
  }

  return (
    <div className="fondo">
      <Container className="mt-4">
        <Row className="gy-4 gx-4">
          {products.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="bg-secondary text-white text-center h-100">
                <Card.Img
                  variant="top"
                  src={product.imagen}
                  alt={product.nombre}
                  className="card-img"
                />
                <Card.Body className="d-flex flex-column align-items-center card-body">
                  <Card.Title>{product.nombre}</Card.Title>
                  <Card.Text>${product.precio.toFixed(2)}</Card.Text>
                  <Card.Text className="card-description">
                    {product.descripcion}
                  </Card.Text>
                  <div className="mt-auto w-100">
                    <div className="d-flex flex-column align-items-center">
                      <div className="d-flex mb-2">
                        <Button
                          variant="outline-dark"
                          onClick={() => handleQuantityChange(product._id, -1)}
                          className="me-1"
                        >
                          -
                        </Button>
                        <span className="contador mx-2">
                          {quantities[product._id]}
                        </span>
                        <Button
                          variant="outline-dark"
                          onClick={() => handleQuantityChange(product._id, 1)}
                          className="ms-1"
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        variant="dark"
                        onClick={() => handleAddToCart(product)}
                        className="w-100"
                      >
                        Añadir al Carrito
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {mensajeGracias ? (
            <div className="text-center text-success mb-4">
              <h5>{mensajeGracias}</h5>
            </div>
          ) : cartItems.length === 0 ? (
            <div>No hay artículos en el carrito</div>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <span>
                    {item.product.nombre} x {item.quantity}
                  </span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    Eliminar
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Offcanvas.Body>
        {cartItems.length > 0 && !mensajeGracias && (
          <div className="p-3">
            <Button
              variant="link"
              onClick={() => setShow(false)}
              className="continuarComprando"
            >
              Seguir Comprando
            </Button>
            <Button
              variant="primary"
              onClick={handleCheckout}
              className="w-100 mt-2"
            >
              Realizar compra
            </Button>
          </div>
        )}
      </Offcanvas>
    </div>
  );
}

export default CardB;