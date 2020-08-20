const express = require('express');
const router = express.Router();
const authController = require('./controllers/auth.controller')
const authValidator = require('./middlewares/auth');
const bodyValidator = require('./middlewares/bodyValidator');

const { UserValidationSchema } = require('../models/user.model');

router.get('/', authController.currentUser);
router.get('/currentUser', authValidator, authController.currentUser);
router.post('/signin', authController.signin);
router.post('/signout', authController.signout);
router.post('/signup', bodyValidator(UserValidationSchema), authController.signup);


module.exports = router;