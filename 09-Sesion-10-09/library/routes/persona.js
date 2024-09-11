const express = require('express');
const router = express.Router();
const persona = require('../controllers/persona');

router.get('/', persona.getAll);
router.get('/:id', persona.getById);
router.post('/', persona.create);
router.put('/:id', persona.update);
router.delete('/:id', persona.delete);

module.exports = router;