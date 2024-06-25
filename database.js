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
  stmt.run("Black Umbrella", 199.00, "https://via.placeholder.com/200?text=Product+1");
  stmt.run("Leather Wallet", 299.00, "https://via.placeholder.com/200?text=Product+2");
  stmt.run("Bluetooth Speaker", 999.00, "https://via.placeholder.com/200?text=Product+3");
  stmt.run("Wireless Earbuds", 1499.00, "https://via.placeholder.com/200?text=Product+4");
  stmt.run("Fitness Tracker", 1999.00, "https://via.placeholder.com/200?text=Product+5");
  stmt.run("Smart Watch", 3499.00, "https://via.placeholder.com/200?text=Product+6");
  stmt.run("Portable Charger", 699.00, "https://via.placeholder.com/200?text=Product+7");
  stmt.run("Digital Camera", 5999.00, "https://via.placeholder.com/200?text=Product+8");
  stmt.run("VR Headset", 2999.00, "https://via.placeholder.com/200?text=Product+9");
  stmt.run("Gaming Mouse", 1299.00, "https://via.placeholder.com/200?text=Product+10");
  stmt.finalize();
});

module.exports = db;
