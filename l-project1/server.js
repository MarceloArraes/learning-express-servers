const express = require('express')

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! MArcelo');
});

app.get('/messages', (req, res) => {
  res.send('Hello World! MESSAGES');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})