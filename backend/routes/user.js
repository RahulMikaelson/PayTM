const express = require('express');
const router = express.Router();
const {UserModel} = require('../db/db');


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
    const users = await UserModel.find( { $or:[  {'firstName':param}, {'LastName':param} ]})
    res.status(200).send({
       users: users.map((user)=>({
           firstName: user.firstName,
           lastName: user.lastName,
           userName: user.userName,
           _id: user._id
       }))
    });
})

module.exports = router;