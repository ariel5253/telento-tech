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