var express = require('express');
var createController=require('../controllers/create-controller');
const loginController = require("../controllers/loginController");
var router = express.Router();
// to display form
router.get('/form',loginController.checkLoggedIn, createController.crudForm );
// to create data
router.post('/insert',loginController.checkLoggedIn, createController.createData);
module.exports = router;