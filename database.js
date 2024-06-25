const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  // Create products table
  db.run(`CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price REAL,
    image TEXT
  )`);

  // Insert sample products
  const stmt = db.prepare("INSERT INTO products (name, price, image) VALUES (?, ?, ?)");
  stmt.run("Black Umbrella", 199.00, "assets/images/populer-products/p1.png");
  stmt.run("Leather Wallet", 299.00, "assets/images/populer-products/p2.png");
  stmt.run("Bluetooth Speaker", 999.00, "assets/images/populer-products/p3.png");
  stmt.run("Wireless Earbuds", 1499.00, "assets/images/populer-products/p4.png");
  stmt.run("Fitness Tracker", 1999.00, "assets/images/populer-products/p5.png");
  stmt.run("Smart Watch", 3499.00, "assets/images/populer-products/p6.png");
  stmt.run("Portable Charger", 699.00, "assets/images/populer-products/p7.png");
  stmt.run("Digital Camera", 5999.00, "assets/images/populer-products/p8.png");
  stmt.run("VR Headset", 2999.00, "assets/images/populer-products/p9.png");
  stmt.run("Gaming Mouse", 1299.00, "assets/images/populer-products/p10.png");
  stmt.finalize();
});

module.exports = db;
