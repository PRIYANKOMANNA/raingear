const express = require('express');
const app = express();
const db = require('./database');

app.use(express.static('public'));

// API endpoint to get products
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ products: rows });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
