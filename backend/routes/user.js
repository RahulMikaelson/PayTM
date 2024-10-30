const express = require('express');
const router = express.Router();
const {UserModel} = require('../db/db');



router.get('/me', async (req, res) => {
    const userId = req.userId;
    let user = await UserModel.findOne({_id:userId},'_id firstName lastName userName password')
    res.status(200).send({
        user: user
    });
})

router.put('/update', async (req, res) => {
    const body = req.body;
    const allowedUpdates = ['firstName', 'lastName', 'password'];
    const updatedBody={};
    for (const key in body) {
        if(allowedUpdates.includes(key)) {
            updatedBody[key] = body[key];
        }
    }
    if (Object.keys(updatedBody).length === 0) {
        return res.status(400).json({
            message: "No valid fields to update."
        });
    }
    const result = UserUpdateZod.safeParse(updatedBody);
    if(!result.success) {
        return res.status(411).json({
            error: result.error.message
        })
    }

    const dbUser = await UserModel.findOneAndUpdate({_id:req.userId},updatedBody);
    if (!dbUser) {
        return res.status(404).json({ message: 'User not found, cannot update email.' });
    }

    // If update was successful, send a success response
    return res.status(200).json({
        message: "Updated successfully"
    });
});

router.get('/bulk', async (req, res) => {
    const param = req.query.filter;
    const userId = req.userId;
   let users = await UserModel.find({$and:[{_id:{$ne:userId}},{ $or:[  {'firstName':param}, {'LastName':param} ]}]},'_id firstName lastName userName')
    res.status(200).send({
       users: users
    });
})

module.exports = router;