# **PROYECTO FINAL DIPLOMATURA FULLSTACK 2024 UTN FRBA**

**GRUPO 6 - INTEGRANTES**
- Altamira Cecilia
- Cordiviola Eleonora
- De la Iglesia Manuel
- Fiorentino Leonardo

**DESCRIPCIÓN**

Este  proyecto es una aplicación web que  utiliza React para el frontend y Node.js con Express para el backend y MongoDB como base de datos.La aplicación permite realizar operaciones CRUD.

**CARACTERÍSTICAS**

- *Frontend:* React con componentes reutilizables.
- *Backend:* Node.js y Express para manejar las rutas y lógica del servidor.
- *Base de datos:* MongoDB (usando Mongoose ).
- *Deploy:* Implementación en Render.
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
npm i express mongoose express-session multer dotenv cors  axios nodemailer
```
#### Crear Base de Datos en Mongo -Estructura

- DB:  gestion-tienda
- Colección: users
```
{_id :{ ""
},
"username" : "",
"password" : "",
"role" : ""
}
```
- Colección: products
```
{_id :{""
},
"nombre" :"",
"precio" : "",
"descripcion" : "",
"categoria" : "",
"imagen" : "https://...."
}

```

#### Crear Archivos y Carpetas - Estructura
- server.js

 - .env (contenido del archivo)

```
MONGODB_URI= mongodb://localhost:27017/gestion-tienda

PORT= 5000

SESSION_SECRET= f1fb5720f5909bfd5b580d2b176a6e8d40e5afaf2c91b178de2f0d7f0b7de2a5
# clave generada con comando node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

ADMIN_USERNAME= admin
ADMIN_PASSWORD= adminpass123
```

### _Frontend_
- Tecnología utilizada: React,  Vite, CSS, Bootstrap  
#### Iniciar proyecto
```
npm create vite@latest front

  cd front
  npm install
  npm run dev
```

---
  ### Funcionalidades

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


## Datos para cargar productos de ejemplo
```
"nombre": "Chaqueta impermeable para mujer. Rompeviento. Impermeables, a rayas",
    "precio": 390990,
    "descripcion": "Manga larga con capucha, diseño de cintura con cordón ajustable. Cierre frontal con botón y cremallera, totalmente forrado a rayas. Dos bolsillos laterales de gran tamaño.Capucha forrada de algodón adjunta con Los cordones ajustables.",
    "categoria": "Ropa de mujer",
    "imagen": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",

"nombre": "Chaqueta motociclista de piel sintética. Capucha extraíble, para mujer",
    "precio": 290950,
    "descripcion": " Material de piel sintética para estilo y comodidad. Dos bolsillos delanteros, chaqueta de piel sintética estilo mezclilla con capucha.Detalle de botones cintura / Detalle de costuras en los costados",
    "categoria": "Ropa de mujer",
    "imagen": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",

"nombre": "Chaqueta de snowboard. 3 en 1.  Abrigo de invierno",
    "precio": 256990,
    "descripcion": "Material: 100% poliéster; Tejido del forro desmontable: forro polar cálido. Forro funcional desmontable: agradable al tacto, ligero y cálido. Chaqueta con forro de cuello alto que te mantiene abrigado en climas fríos. Bolsillos con cremallera. Capucha ajustable y desmontable y puño ajustable para evitar el viento y el agua, para un ajuste cómodo. El diseño desmontable 3 en 1 brinda más comodidad, puede separar el abrigo y el interior según sea necesario, o usarlos juntos.",
    "categoria": "Ropa de mujer",
    "imagen": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",


    


    
