//
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para usuarios
router.post('/register', userController.registerClient); // Registrar clientes
router.post('/login', userController.loginUser);          // Iniciar sesión
router.get('/logout', userController.logoutUser);         // Cerrar sesión
router.get('/clients', userController.getAllClients);     // Obtener lista de clientes

// Ruta protegida para cualquier usuario autenticado
router.get('/protegida', (req, res) => {
  if (req.session.user) {
    res.send(`Bienvenido, ${req.session.user.username}`);
  } else {
    res.status(401).send('No autorizado');
  }
});

// Ruta solo para administradores
router.get('/productos', userController.isAdmin, (req, res) => {
  res.send('Bienvenido, Administrador. Esta es la ruta de productos.');
});

module.exports = router;