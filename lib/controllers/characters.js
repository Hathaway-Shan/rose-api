const { Router } = require('express');
const Character = require('../models/Character');
const router = Router();
//gets go here

router.get('/', async (req, res) => {
  const data = await Character.getAll();
  res.json(data);
});

module.exports = router;
