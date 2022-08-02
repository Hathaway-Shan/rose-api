const { Router } = require('express');
const { Episode } = require('../models/Episode');
const router = Router();
//gets go here
router.get('/', async (req, res) => {
  const data = await Episode.getAll();
  res.json(data);
});

module.exports = router;
