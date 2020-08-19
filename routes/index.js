const express = require('express');
const apiRouter = express.Router();
const authRouter = require('./auth');
const userRouter = require('./users');

apiRouter.use('/', authRouter);
// apiRouter.use('/users', userRouter);

module.exports = apiRouter;