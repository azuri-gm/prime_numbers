const express = require('express');
const path = require('path');
const cors = require('cors');
const PrimeNumberController = require('./controllers/primeNumber.controller');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', PrimeNumberController);
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
