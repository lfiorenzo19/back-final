const mongoose = require('mongoose');
const Producto = require('../models/ProductsModel');

// Obtener todos los productos
exports.getProducts = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un producto por ID
exports.getProductById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Crear un nuevo Producto
exports.createProduct = async (req, res) => {
  if (!req.body.nombre  || !req.body.precio || !req.body.descripcion|| !req.body.categoria|| !req.body.imagen ) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }


  const producto = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
    categoria: req.body.categoria,
    imagen: req.body.imagen,
  });
  
  try {
    const nuevoProducto = await producto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un Producto por ID
exports.updateProduct = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto) {
      producto.nombre = req.body.nombre || producto.nombre;
      producto.precio = req.body.precio || producto.precio;
      producto.descripcion = req.body.descripcion || producto.descripcion;
      producto.categoria = req.body.categoria || producto.categoria;
      producto.imagen = req.body.imagen || producto.imagen;
      
      const productActualizado = await producto.save();
      res.json(productActualizado);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un Producto por ID
exports.deleteProduct = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID no válido' });
  }

  try {
    const producto = await Producto.findById(req.params.id);
    if (producto) {
      await producto.deleteOne();
      res.json({ message: 'Producto eliminado' });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};