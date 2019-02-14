const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PrimeNumberController = require('./controllers/primeNumber.controller');
const app = express();

app.use(cors());

app.use('/prime', PrimeNumberController);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on port ${PORT}`)
);
