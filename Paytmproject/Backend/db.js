const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aadinir:Aamod123@cluster0.sszhzlo.mongodb.net/")
const usrschema = new mongoose.model('User-schema',new Schema(
    {
        username:String,
        password:String,
        firstname:String,
        lastname:String
    }
));
module.exports = {
    usrschema
}