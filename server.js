const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot sudah online 24/7 gais');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;