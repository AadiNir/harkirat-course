const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aadinir:Aamod123@cluster0.sszhzlo.mongodb.net/")
const User = new mongoose.model('User-schema',new mongoose.Schema(
    {
        username:String,
        password:String,
        firstname:String,
        lastname:String
    }
));
const Accounts = new mongoose.model('Accounts-schema',new mongoose.Schema(
    {
        userId: mongoose.Schema.Types.ObjectId,
        balance: Number
    }
))
module.exports = {
    User,
    Accounts
}