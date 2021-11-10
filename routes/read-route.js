var express = require('express');
var readController=require('../controllers/read-controller');
const loginController = require("../controllers/loginController");
var router = express.Router();
// to display data 
router.get('/read/:userid',loginController.checkLoggedIn, readController.readData);
module.exports = router;