const mongoose = require('mongoose');

async function connectToDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/paytm');
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
module.exports = {UserModel, AccountModel}