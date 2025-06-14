// index.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like index.html)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
