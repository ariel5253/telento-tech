const express = require('express');
const router = express.Router();
const ejemplar = require('../controllers/ejemplar');

router.get('/', ejemplar.getAll);
router.get('/:id', ejemplar.getById);
router.post('/', ejemplar.create);
router.put('/:id', ejemplar.update);
router.delete('/:id', ejemplar.delete);

module.exports = router;