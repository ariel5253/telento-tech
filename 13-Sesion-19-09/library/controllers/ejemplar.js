const Ejemplar = require('../models/ejemplar');
const Libro = require('../models/libro'); 

// Obtener todos los ejemplares
exports.getAll = async (req, res) => {
    try {
        const ejemplares = await Ejemplar.findAll({
            include: [{
                model: Libro,  
                as: 'libro'
            }]
        });
        res.json(ejemplares);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un ejemplar por ID
exports.getById = async (req, res) => {
    try {
        const ejemplar = await Ejemplar.findByPk(req.params.id, {
            include: [{
                model: Libro,  // Incluir el modelo Libro para traer su información
                as: 'libro'
            }]
        });
        if (!ejemplar) {
            return res.status(404).json({ message: 'Ejemplar no encontrado' });
        }
        res.json(ejemplar);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo ejemplar
exports.create = async (req, res) => {
    try {
        const ejemplar = await Ejemplar.create(req.body);
        res.status(201).json(ejemplar);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un ejemplar
exports.update = async (req, res) => {
    try {
        const ejemplar = await Ejemplar.findByPk(req.params.id);
        if (!ejemplar) {
            return res.status(404).json({ message: 'Ejemplar no encontrado' });
        }
        await ejemplar.update(req.body);
        res.json(ejemplar);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un ejemplar
exports.delete = async (req, res) => {
    try {
        const ejemplar = await Ejemplar.findByPk(req.params.id);
        if (!ejemplar) {
            return res.status(404).json({ message: 'Ejemplar no encontrado' });
        }
        await ejemplar.destroy();
        res.json({ message: 'Ejemplar eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
