
## 8. Configuración de las Rutas

### Rutas de `persona`

Crear un archivo `routes/persona.js` con la estructura solicitada para manejar las rutas de la entidad `persona`:

```javascript
const express = require('express');
const router = express.Router();
const persona = require('../controllers/persona');

router.get('/', persona.getAll);
router.get('/:id', persona.getById);
router.post('/', persona.create);
router.put('/:id', persona.update);
router.delete('/:id', persona.delete);

module.exports = router;
```

### Rutas de `usuario`

Crear un archivo `routes/usuario.js` con la estructura solicitada para manejar las rutas de la entidad `usuario`:

```javascript
const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario');

router.get('/', usuario.getAll);
router.get('/:id', usuario.getById);
router.post('/', usuario.create);
router.put('/:id', usuario.update);
router.delete('/:id', usuario.delete);

module.exports = router;
```

## 9. Configuración del Servidor Express

Crear un archivo `app.js` para inicializar el servidor Express:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const usuarioRoutes = require('./routes/usuario');
const personaRoutes = require('./routes/persona');

const app = express();

app.use(bodyParser.json());

app.use('/usuarios', usuarioRoutes);
app.use('/personas', personaRoutes);

sequelize.sync()
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
```

## 10. Ejecutar el servidor

Para iniciar el servidor y comprobar que todo funciona correctamente, usar el siguiente comando:

```bash
node app.js
```

Si instalaste `nodemon`, puedes ejecutar el servidor de la siguiente manera:

```bash
npx nodemon app.js
```

## 11. Controladores para la entidad Persona

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

## 12. Controladores para la entidad Usuario

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

