const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario');

router.get('/', usuario.getAll);
router.get('/:id', usuario.getById);
router.post('/', usuario.create);
router.put('/:id', usuario.update);
router.delete('/:id', usuario.delete);

module.exports = router;