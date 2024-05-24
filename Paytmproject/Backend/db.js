const mongoose = require('mongoose');
try{
mongoose.connect("mongodb+srv://aadinir:Aamod123@cluster0.sszhzlo.mongodb.net/");
console.log("connection sucessfull")
}catch(err){
    console.log("connection unsuccessfull");
}
const User =  mongoose.model('User-schema',new mongoose.Schema(
    {
        username:String,
        password:String,
        firstname:String,
        lastname:String
    }
));
const Accounts = mongoose.model('Accounts-schema',new mongoose.Schema(
    {
        userId: mongoose.Schema.Types.ObjectId,
        balance: Number
    }
))
module.exports = {
    User,
    Accounts
}