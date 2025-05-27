const express = require('express');
const pool = require('../db');
const autenticar = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

router.post('/', autenticar, async (req, res) => {
  const { name, price, imageurl, description } = req.body;
  await pool.query('INSERT INTO products (name, price, imageurl, description) VALUES ($1, $2, $3, $4)', [name, price, imageurl, description]);
  res.json({ message: 'Produto adicionado!' });
});

module.exports = router;