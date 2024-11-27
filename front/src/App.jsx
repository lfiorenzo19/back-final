import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Shop from "./components/shop/Shop";
import ListaProductos from "./components/productos/ListaProductos";
import CrearProducto from "./components/productos/CrearProducto";
import EditarProducto from "./components/productos/EditarProducto";
import DetalleProducto from "./components/productos/DetalleProducto";
import { AuthProvider } from './components/account/AuthContext';
import Protegida from "./components/protegida/protegida";
import Register from "./components/account/Register";
import Login from "./components/account/Login";
import ProtectedRoute from "./components/account/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/productos" element={<ListaProductos />} />
            <Route path="/crear-producto" element={<CrearProducto />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/editar-producto/:id" element={<EditarProducto />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/protegida" element={<ProtectedRoute element={<Protegida />} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
