const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user.js');
const accountRouter = require('./account.js');
const {authMiddleware} = require("../middleware/middleware");

router.use('/auth',authRouter);

router.use(authMiddleware);
router.use('/user',userRouter);
router.use('/account',accountRouter);
module.exports = router;