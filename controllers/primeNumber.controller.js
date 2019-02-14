const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const checkPrime = n => {
  const x = Math.floor(Math.sqrt(n));
  let number = x;
  while (number >= 2) {
    if (n % number === 0) {
      return false;
    }
    number--;
  }
  return true;
};

router.get('/', (req, res) => {
  let maxNumber = req.query.maxNumber;
  if (maxNumber > 2000000) {
    res.status(400).send({
      success: false,
      message: 'request number cannot be bigger than two million'
    });
  }
  let sum = 0;
  while (maxNumber >= 2) {
    if (checkPrime(maxNumber) === true) {
      sum += maxNumber;
    }
    maxNumber--;
  }
  res.status(200).send({ success: true, sum: sum });
});

module.exports = router;
