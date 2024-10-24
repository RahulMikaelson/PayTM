const express = require('express');
const {AccountModel} = require("../db/db");
const {AmountZod} = require("../zod");
const {PRECISION} = require("../config");
const {formatBalance, normalizeAmount} = require("../util/accountHelper");
const router = express.Router();


router.post('/create', async (req, res) => {
    const userId = req.userId;
    const dbAccount = await AccountModel.findOne({userId:userId});
    if(dbAccount){
        return res.status(400).send({
            error: "Account already exists"
        });
    }
    const Account = await AccountModel.create({userId:userId,balance:0});
    return res.status(200).send({
        details:Account
    })
})

router.get('/balance', async (req, res) => {
    const userId = req.userId;
    const account = await AccountModel.findOne({userId:userId},'_id userId balance');
    account.balance=formatBalance(account.balance);
    return res.status(200).send({account:account});
});

router.put('/deposit', async (req, res) => {
    const userId = req.userId;
    const {success,error, data} = AmountZod.safeParse(parseFloat(req.query.amount));
    if(!success){
       return  res.status(400).json({error: error});
    }
    const amount = normalizeAmount(data);
    const account = await AccountModel.findOneAndUpdate({userId:userId},{$inc:{balance:+amount}},{new: true,projection:['_id','userId','balance']});
    account.balance=formatBalance(account.balance);
    return res.status(200).json({account:account});
})

module.exports = router;