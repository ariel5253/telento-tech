
# Creación de Proyecto Express con MySQL y Sequelize

## 1. Crear el directorio del proyecto
```bash
mkdir library
```

## 2. Inicializar el proyecto Node.js
```bash
npm init -y
```

## 3. Instalar las dependencias necesarias
```bash
npm install express
npm install mysql2 sequelize body-parser --save
```

## 4. Ejecutar el servidor
Para iniciar el servidor, usar el siguiente comando:
```bash
node app.js
```

## 5. Instalar `nodemon` como dependencia de desarrollo
```bash
npm install --save-dev nodemon
```

## 6. Usar `nodemon` para correr el servidor
```bash
npx nodemon app.js
```

## 7. Actualizar `package.json`
Editar el archivo `package.json` y actualizar los scripts de la siguiente manera:
```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

## 8. Crear el archivo `app.js`
Dentro de la raíz del proyecto, crear un archivo `app.js` con el siguiente contenido:
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Servidor escuchando en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```


## 9. Crear la estructura de directorios
Dentro del proyecto, crear los siguientes directorios:
```bash
mkdir controllers models routes config
```

## 10. Modificar `app.js` para agregar las rutas
Actualizar el archivo `app.js` para incluir rutas para `persona` y `usuario`:
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const personaRoutes = require('./routes/persona');
const usuarioRoutes = require('./routes/usuario');

app.use(bodyParser.json());

// Rutas
app.use('/v1/api/persona', personaRoutes);
app.use('/v1/api/usuario', usuarioRoutes);

const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
```

## 11. Ejecutar las migraciones de Sequelize
```bash
npx sequelize-cli db:migrate
```
