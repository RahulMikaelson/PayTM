const {DB_URI} = require('../config');
const mongoose = require('mongoose');

async function connectToDB() {
    await mongoose.connect(DB_URI);
}


connectToDB().catch((err) => {
    console.log(err);
});


const userSchema  = new mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    password:String,
});
const UserModel = mongoose.model('User',userSchema,'User');

const AccountSchema= new mongoose.Schema({
    userId: String,
    balance: Number,
});
const AccountModel = mongoose.model('Account',AccountSchema,'Account');

module.exports = {mongoose,UserModel, AccountModel}