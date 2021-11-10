var express = require('express');
var updateController=require('../controllers/update-controller');
const loginController = require("../controllers/loginController");
var passport = require('passport');
var router = express.Router();
// to edit data 
router.get('/edit/:id',loginController.checkLoggedIn, updateController.editData);
// to update data 
router.post('/update/:id',loginController.checkLoggedIn, updateController.updateData);
// router.post('/update/:id', passport.authenticate("local", {
//     successRedirect: updateController.updateData,
//     failureRedirect: "/crud/read",
//     successFlash: true,
//     failureFlash: true
// }));

module.exports = router;