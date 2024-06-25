const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        price REAL,
        image TEXT
    )`);

    const stmt = db.prepare(`INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)`);
    const products = [
        ['Black Umbrella', 'High-quality black umbrella.', 199.00, 'assets/images/populer-products/p1.png'],
        ['Leather Wallet', 'Premium leather wallet.', 299.00, 'assets/images/populer-products/p2.png'],
        ['Bluetooth Speaker', 'Portable Bluetooth speaker.', 999.00, 'assets/images/populer-products/p3.png'],
        ['Wireless Earbuds', 'High-quality wireless earbuds.', 1499.00, 'assets/images/populer-products/p4.png'],
        // Add more products as needed
    ];

    products.forEach((product) => {
        stmt.run(product);
    });

    stmt.finalize();
});

module.exports = db;
