const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PrimeNumberController = require('./controllers/primeNumber.controller');
const app = express();

const PORT = process.env.port || 5000;

app.use(cors());

app.use('/prime', PrimeNumberController);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
