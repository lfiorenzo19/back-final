require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../models/userModels");

// Función para crear un usuario administrador al iniciar la aplicación
async function createAdminUser() {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
        console.error(
            "Las variables de entorno ADMIN_USERNAME o ADMIN_PASSWORD no están definidas."
        );
        return;
    }

    // Verificar si ya existe un administrador
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
        console.log("El usuario administrador ya existe.");
        return;
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const adminUser = new User({ username, password: hashedPassword, role: "admin",});
        await adminUser.save();
        console.log("Usuario administrador creado exitosamente.");
    } catch (error) {
        console.error("Error al crear el usuario administrador:", error);
    }
}

// Función para registrar un usuario cliente
async function registerClient(req, res) {
    const { username, password, role} = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send("El usuario ya existe");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Crear usuario con un rol determinado o por defecto le pone cliente
        const newUser = new User({ username, password: hashedPassword, role: role || "cliente",});

        await newUser.save();
        console.log("Usuario registrado: ", newUser);
        res.status(201).send("Usuario registrado con éxito");

    } catch (err) {
        console.error("Error al registrar el usuario: ", err);
        res.status(500).send("Error al registrar el usuario");
    }
}

// Función para iniciar sesión
async function loginUser(req, res) {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send("Usuario no encontrado");
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            console.error("Contraseña incorrecta para el usuario:", username);
            return res.status(401).send("Contraseña incorrecta");
        }

        // Almacena usuario y rol en la sesión
        req.session.user = { username: user.username, role: user.role };

        // Devuelve el rol del usuario al frontend
        res.send({
            message: `Usuario ${user.username} ha iniciado sesión.`,
            role: user.role,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error en el servidor");
    }
}

// Función para cerrar sesión
function logoutUser(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Error al cerrar sesión");
        }
        res.send("Sesión cerrada.");
    });
}

// Función para obtener todos los usuarios con rol 'cliente'
async function getAllClients(req, res) {
    try {
        const clients = await User.find({ role: "cliente" });
        res.json(clients);
    } catch (error) {
        console.error("Error al obtener los usuarios clientes:", error);
        res.status(500).send("Error al obtener usuarios.");
    }
}

// Middleware para verificar si el usuario es administrador
function isAdmin(req, res, next) {
    if (!req.session.user || req.session.user.role !== "admin") {
        return res.status(403).send("Acceso denegado, solo administradores");
    }
    next();
}

module.exports = { createAdminUser, registerClient, loginUser, logoutUser, getAllClients, isAdmin};
