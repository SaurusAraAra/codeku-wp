const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 2001;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all → always serve index.html (SPA style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✓ Prank server running at http://localhost:${PORT}`);
});
