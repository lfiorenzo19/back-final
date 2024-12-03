// Requerimientos
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const session = require('express-session'); 
const productsRoutes = require('./routes/productRoutes');
const userController = require('./controllers/userController.js');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const mailRoutes = require('./routes/mailRoutes');
const app = express();

// Middleware
app.use(cors()); // Permite solicitudes desde diferentes orígenes
app.use(express.json()); 
app.use(bodyParser.json());

// Configuración de la sesión 
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true, 
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: 'sessions'
  }),
  cookie: { secure: false }
}));

// Rutas
app.use('/api/productos', productsRoutes); // productos 
app.use('/api/users', userRoutes);
app.use('/api/mail', mailRoutes);

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    userController.createAdminUser(); // Creamos el usuario admin
  }).catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
}); 
