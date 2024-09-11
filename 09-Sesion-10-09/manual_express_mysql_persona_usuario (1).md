
# Manual: Creación de API REST en Express.js con MySQL

Este manual detalla el proceso de creación de una API REST utilizando **Express.js** y **MySQL** con dos entidades: `Persona` y `Usuario`.

## Requisitos

- Node.js y npm instalados
- MySQL configurado
- Conexión a la base de datos


## Configuración de la base de datos

Crear un archivo `config/db.js` para configurar la conexión a MySQL:

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movil', 'root', 'abcd1234', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida.');
    })
    .catch((error) => {
        console.error('No se pudo conectar a la base de datos:', error);
    });

module.exports = sequelize;
```

## Creación de la entidad Persona

1. Crear un archivo en `models/persona.js` con la estructura de la entidad `Persona`:

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Persona = sequelize.define('Persona', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'persona',
    timestamps: false
});

module.exports = Persona;
```

2. Crear un archivo `controllers/personaController.js` para manejar las operaciones CRUD:

```javascript
const Persona = require('../models/persona');

// Obtener todas las personas
exports.getAll = async (req, res) => {
    try {
        const personas = await Persona.findAll();
        res.json(personas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una persona por ID
exports.getById = async (req, res) => {
    try {
        const persona = await Persona.findByPk(req.params.id);
        if (!persona) {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        res.json(persona);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva persona
exports.create = async (req, res) => {
    try {
        const persona = await Persona.create(req.body);
        res.status(201).json(persona);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una persona
exports.update = async (req, res) => {
    try {
        const persona = await Persona.findByPk(req.params.id);
        if (!persona) {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        await persona.update(req.body);
        res.json(persona);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar una persona
exports.delete = async (req, res) => {
    try {
        const persona = await Persona.findByPk(req.params.id);
        if (!persona) {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        await persona.destroy();
        res.json({ message: 'Persona eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```

3. Crear las rutas para la entidad `Persona` en `routes/persona.js`:

```javascript
const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

router.get('/', personaController.getAll);
router.get('/:id', personaController.getById);
router.post('/', personaController.create);
router.put('/:id', personaController.update);
router.delete('/:id', personaController.delete);

module.exports = router;
```

## Creación de la entidad Usuario

1. Crear el archivo `models/usuario.js` para la entidad `Usuario`:

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    tableName: 'usuario',
    timestamps: false
});

module.exports = Usuario;
```

2. Crear el controlador `controllers/usuarioController.js` para manejar las operaciones CRUD de `Usuario`:

```javascript
const Usuario = require('../models/usuario');

// Obtener todos los usuarios
exports.getAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un usuario por ID
exports.getById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo usuario
exports.create = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un usuario
exports.update = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await usuario.update(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un usuario
exports.delete = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await usuario.destroy();
        res.json({ message: 'Usuario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```

3. Crear las rutas para la entidad `Usuario` en `routes/usuario.js`:

```javascript
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.getAll);
router.get('/:id', usuarioController.getById);
router.post('/', usuarioController.create);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

module.exports = router;
```

## Integración de las rutas en el archivo principal

Modifica el archivo `app.js` para usar ambas rutas:

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

## Ejecutar la aplicación

1. Correr las migraciones en la base de datos (si usas Sequelize-cli):

```bash
npx sequelize-cli db:migrate
```

2. Correr la aplicación:

```bash
node app.js
```

La API estará corriendo en `http://localhost:9090/v1/api/persona` y `http://localhost:9090/v1/api/usuario`.

¡Y eso es todo! Ya tienes una API en Express.js conectada a MySQL con las entidades `Persona` y `Usuario`.

