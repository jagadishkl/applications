const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Guestbook App 🚀</h1>');
});

app.listen(port, () => {
  console.log(`Guestbook app listening at http://localhost:${port}`);
});
