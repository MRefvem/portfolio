// Make constant: express

const express = require('express');
const app = express();

// Require dotenv

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log(`the server has started on ${PORT}`);
})
