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
const UserModel = mongoose.model('User',userSchema);

module.exports = {UserModel}