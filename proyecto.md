# **PROYECTO GESTION DE TIENDA ONLINE**

[REPOSITORIO ONLINE](https://github.com/eleocordi/utn-final-fullstack.git)

**INICIAR REPO EN GIT**
```
 git init
 git add README.md
 git commit -m "first commit"
 git branch -M main
 git remote add origin https://github.com/eleocordi/utn-final-fullstack.git
 git push -u origin main
```
---
## **ESTRUCTURA DEL PROYECTO**

### _Backend_
- Tecnología utilizada: Node.js, Express, MongoDB
#### Iniciar proyecto
```cd back
npm init -y
``` 
##### Configurar Script para arranque en archivo package.json
```
 "start": "nodemon server.js"
```
#### Instalar dependencias
```
npm i express mongoose express-session multer dotenv cors  axios
```
#### Crear Base de Datos en Mongo -Estructura

#### Crear Archivos y Carpetas - Estructura
- server.js

 - .env (contenido del archivo)

```
MONGODB_URI= mongodb://localhost:27017/nombre de mi base de datos

PORT= número de puerto en que corre el back

SESSION_SECRET= clave generada con comando node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

```
- .gitignore (contenido del archivo)

```
# Node modules
node_modules/

# Logs
logs
*.log
npm-debug.log*

# Environment variables
.env

# Dependency directories
jspm_packages/

# Operating system files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Build directories
dist/
build/

# Compiled files
*.tsbuildinfo

# Miscellaneous
*.tgz
*.swp
*.swo
```

- Carpeta Models

Crear los Schema para utilizar en db,
por : Archivo user.js 
```
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema); 
```

- Carpeta Controllers 

Crear los controladores 

- Carpeta Routes

Configurar Rutas 

---

### _Frontend_
- Tecnología utilizada: React,  Vite, CSS, Bootstrap  
#### Iniciar proyecto
```
npm create vite@latest front

  cd front
  npm install
  npm run dev
```
 #### Crear Archivos y Carpetas - Estructura
  - Carpeta Components

  Crear los componentes necesarios para el proyecto
  
---
  ## Funcionalidades

- **Lista de Productos**: Visualiza todos los productos disponibles.
- **Detalles del Producto**: Consulta los detalles de un producto específico.
- **Crear Producto**: Añade un nuevo producto a la base de datos.
- **Editar Producto**: Modifica los detalles de un producto existente.
- **Eliminar Producto**: Elimina un producto de la base de datos.
---

## Endpoints del API

- `GET /api/products` - Obtiene todos los productos.
- `GET /api/products/:id` - Obtiene un producto por ID.
- `POST /api/products` - Crea un nuevo producto.
- `PUT /api/products/:id` - Actualiza un producto por ID.
- `DELETE /api/products/:id` - Elimina un producto por ID.


  