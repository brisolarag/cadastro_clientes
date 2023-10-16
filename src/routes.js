const express = require('express');
const router = express.Router();

const clientesController = require('./controllers/clientesController');

router.get('/all', clientesController.getAll);




module.exports = router;
