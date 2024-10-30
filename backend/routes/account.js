const express = require('express');
const {AccountModel, mongoose} = require("../db/db");
const {AmountZod, TransferZod} = require("../zod");
const {formatBalance, normalizeAmount} = require("../util/accountHelper");
const router = express.Router();


router.post('/create', async (req, res) => {
    const userId = req.userId;
    const dbAccount = await AccountModel.findOne({userId: userId});
    if (dbAccount) {
        return res.status(400).send({
            error: "Account already exists"
        });
    }
    const Account = await AccountModel.create({userId: userId, balance: 0});
    return res.status(200).send({
        details: Account
    })
})

router.get('/balance', async (req, res) => {
    const userId = req.userId;
    const account = await AccountModel.findOne({userId: userId}, 'balance');
    if(!account){
        return res.status(200).send({account: {balance: "Open An Account"}});
    }
    account.balance = formatBalance(account.balance);
    return res.status(200).send({account: account});
});

router.put('/deposit', async (req, res) => {
    const userId = req.userId;
    const {success, error, data} = AmountZod.safeParse(parseFloat(req.query.amount));
    if (!success) {
        return res.status(400).json({error: error});
    }
    const amount = normalizeAmount(data);
    const account = await AccountModel.findOneAndUpdate({userId: userId}, {$inc: {balance: +amount}}, {
        new: true,
        projection: ['_id', 'userId', 'balance']
    });
    account.balance = formatBalance(account.balance);
    return res.status(200).json({account: account});
})

router.post('/transfer', async (req, res) => {
    const userId = req.userId;
    const body = req.body;
    const {success, error, data} = TransferZod.safeParse(body);
    if (!success) {
        return res.status(400).json({error: error});
    }
    const amount = normalizeAmount(data.amount);
    const session = await mongoose.startSession();

    try {
        await session.withTransaction(async () => {
            const receiver = await AccountModel.findOne({userId: data.to}).session(session);
            if (!receiver) {
                throw new Error("Invalid Account");
            }
            const userAccount = await AccountModel.findOne({userId: userId}).session(session);
            if (userAccount.balance < amount) {
                throw new Error("Insufficient Balance");
            }
            await AccountModel.updateOne({userId: userId}, {$inc: {balance: -amount}}, {session});
            await AccountModel.updateOne({userId: data.to}, {$inc: {balance: amount}}, {session});
        });
        return res.status(200).send({"message": "Transfer Successful"});

    } catch (err) {
        return res.status(400).send({"message": err.message});
    } finally {
        await session.endSession();
        console.log("Amount transfer transaction has ended");
    }
});

module.exports = router;