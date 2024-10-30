const express = require('express');
const {UserZod, SignInZod} = require("../zod");
const {UserModel} = require("../db/db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const router = express.Router();


router.post('/signUp', async (req, res) => {
    const body = req.body;
    const result = UserZod.safeParse(body);
    if (!result.success) {
        res.status(411).send(result.error);
    } else {
        const user = await UserModel.findOne({userName: body.userName});
        if (user) {
            return res.status(411).send({
                message: "Email already taken / Incorrect inputs"
            });
        }
        const dbUser = await UserModel.create(body);
        const token = jwt.sign({userId: dbUser._id}, JWT_SECRET, {expiresIn: '1h'});
        return res.json({
            message: "User created successfully",
            token: token
        })
    }
});

router.post('/signIn', async (req, res) => {
    const body = req.body;
    const result = SignInZod.safeParse(body);
    if (!result.success) {
        return res.status(411).json(
            {
                message: result.error.message
            });
    }
    const dbUser = await UserModel.findOne(body);
    if(!dbUser) {
        return res.status(411).json(
            {
                message: "Error while logging in"
            });
    }
    const token = jwt.sign({userId: dbUser._id}, JWT_SECRET );
    return res.json({
        token: token
    })
});

module.exports = router;