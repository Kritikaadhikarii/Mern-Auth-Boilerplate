require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Nothing to see here for now !');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} !`);
});