const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.end(`Payment methods for cart ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log('API available on localhost PORT 7865');
});
