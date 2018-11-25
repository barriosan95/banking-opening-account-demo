const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customers');
const financeInfosController = require('../controllers/financeInfos');
const agreementsController = require('../controllers/agreements');
const accountsController = require('../controllers/accounts');

// router.get('/add-customer', customersController.createCustomer);

router.post('/add-customer', customersController.createCustomer);
router.post('/add-fin-info/:id', financeInfosController.addFinInfo);
router.post('/sign-agreements/:id', agreementsController.updateAgreement);
router.post('/create-account/:id', accountsController.createAccount);

module.exports = router;