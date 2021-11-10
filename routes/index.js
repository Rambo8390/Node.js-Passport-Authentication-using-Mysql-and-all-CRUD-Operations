const express = require('express');
const router = express.Router();
// const passport = require('passport');
const HomeController = require('../controllers/home_controller.js')

router.get('/home',HomeController.home);
router.use('/',require('./web'))
router.use('/',require('./image-route'))
router.use('/crud',require('./create-route'))
router.use('/crud',require('./delete-route'))
router.use('/crud',require('./read-route'))
router.use('/crud',require('./update-route'))

module.exports = router;