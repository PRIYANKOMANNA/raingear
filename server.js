const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sample user data (for demonstration purposes)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Endpoint to handle user authentication
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.json({ success: true, message: 'Authenticated successfully' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
