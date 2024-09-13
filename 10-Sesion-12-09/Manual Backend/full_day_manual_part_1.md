
# Manual Completo: Creación de API REST en Express.js con MySQL y Sequelize

Este manual cubre todo el proceso realizado durante la jornada, desde la creación del proyecto Express hasta la implementación de rutas, controladores y migraciones en MySQL utilizando Sequelize.

## 1. Crear el directorio del proyecto
```bash
mkdir library
cd library
```

## 2. Inicializar el proyecto Node.js
```bash
npm init -y
```

## 3. Instalar las dependencias necesarias
```bash
npm install express mysql2 sequelize body-parser --save
```

## 4. Instalar `nodemon` como dependencia de desarrollo (opcional)
Para un desarrollo más rápido, se recomienda instalar `nodemon`:
```bash
npm install --save-dev nodemon
```

## 5. Actualizar el archivo `package.json`

Editar el archivo `package.json` y actualizar los scripts de la siguiente manera:
```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

## 6. Configuración de la base de datos

Crear un archivo `config/db.js` para configurar la conexión a MySQL:

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movil', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
```

## 7. Creación de los Modelos de Base de Datos

### Modelo `persona`
Crear el modelo `persona` antes que `usuario`.

Crear un archivo `models/persona.js` con el siguiente contenido:

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const persona = sequelize.define('persona', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'persona'
});

module.exports = persona;
```

### Modelo `usuario`

Crear un archivo `models/usuario.js` con el siguiente contenido:

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Persona = require('./persona');  // Relación con el modelo Persona

const usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasenia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  persona_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Persona,
      key: 'id'
    }
  }
}, {
  tableName: 'usuario'
});

module.exports = usuario;
```

