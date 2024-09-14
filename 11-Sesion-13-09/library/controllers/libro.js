const Libro = require('../models/Libro');

// Obtener todas los libros
exports.getAll = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un libro por ID
exports.getById = async (req, res) => {
    try {
        const libro = await Libro.findByPk(req.params.id);
        if (!libro) {
            return res.status(404).json({ message: 'Libro no encontrada' });
        }
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nueva libro
exports.create = async (req, res) => {
    try {
        const libro = await Libro.create(req.body);
        res.status(201).json(libro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un libro
exports.update = async (req, res) => {
    try {
        const libro = await Libro.findByPk(req.params.id);
        if (!libro) {
            return res.status(404).json({ message: 'Libro no encontrada' });
        }
        await libro.update(req.body);
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un libro
exports.delete = async (req, res) => {
    try {
        const libro = await Libro.findByPk(req.params.id);
        if (!libro) {
            return res.status(404).json({ message: 'Libro no encontrada' });
        }
        await libro.destroy();
        res.json({ message: 'Libro eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};