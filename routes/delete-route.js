var express = require('express');
var deleteController=require('../controllers/delete-controller');
const loginController = require("../controllers/loginController");
var router = express.Router();
// to delete data 
router.get('/delete/:id', deleteController.deleteData);
module.exports = router;