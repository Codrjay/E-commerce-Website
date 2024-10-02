const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample data (could be replaced with database calls)
let users = [];

// API Endpoint to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// API Endpoint to create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser); // Add user to the array (or save to a database)
  res.status(201).json(newUser); // Respond with the created user
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
