import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/Logo2.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../account/AuthContext";
import "./Header.css";


function Header() {

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    alert('Sesión cerrada');
  };


  return (
    <Navbar  className = "navbar" expand="lg" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto clases">
            <Nav.Link as={Link} to="/" className="inicio" >
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className="tienda">
              Tienda
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="contacto">
              Contacto
            </Nav.Link>

          </Nav>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  className="boton mr-sm-2 "
                />
              </Col>
              <Col xs="auto">
                <Button className="boton" type="submit" variant="secondary">
                  Buscar
                </Button>
              </Col>
            </Row>
          </Form>


          <Dropdown align="end">
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-user"
              className="boton ms-3"
            >
              <FaUser size={20} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/login">
                Iniciar sesión
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/register">
                Registrar Usuario
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>
                Cerrar sesión
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


                  </Navbar.Collapse>

     
      </Container>
    </Navbar>
  );
}

export default Header;