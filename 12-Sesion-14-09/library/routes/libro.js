const express = require('express');
const router = express.Router();
const libro = require('../controllers/libro');

router.get('/', libro.getAll);
router.get('/:id', libro.getById);
router.post('/', libro.create);
router.post('/list', libro.createAll);
router.put('/:id', libro.update);
router.delete('/:id', libro.delete);

module.exports = router;