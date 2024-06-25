const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Get all products
app.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ products: rows });
    });
});

// Get a single product by ID
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ product: row });
    });
});

// Add a product to the cart (basic implementation)
app.post('/api/cart', (req, res) => {
    const { productId, quantity } = req.body;
    // For simplicity, this example does not implement a full cart system.
    res.json({ message: `Added product ${productId} with quantity ${quantity} to the cart.` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
