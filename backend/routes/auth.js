const express = require('express');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const router = express.Router();
const SECRET = 'chave-secreta';

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

  if (result.rows.length > 0) {
    const token = jwt.sign({ userId: result.rows[0].id }, SECRET, { expiresIn: '2h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

module.exports = router;