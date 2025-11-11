// Import the Express library
const express = require('express');

// Create an Express app
const app = express();

// Define a route (what happens when someone visits your website)
app.get('/', (req, res) => {
  res.send('Hello from Node.js & Express!');
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
