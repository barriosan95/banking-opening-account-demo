const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customers');


// router.get('/add-customer', customersController.createCustomer);

router.post('/add-customer', customersController.createCustomer);

module.exports = router;