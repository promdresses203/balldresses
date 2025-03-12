const express = require('express');
const router = express.Router();
const dressesController = require('../controllers/dressesController');

// Роутове за рокли
router.get('/', dressesController.getAllDresses);   // GET /api/dresses
router.post('/', dressesController.addDress);       // POST /api/dresses

module.exports = router;
