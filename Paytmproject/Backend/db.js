//  function User(){
 const mongoose = require('mongoose');
//  mongoose.connect("mongodb+srv://aadinir:Aamod123@cluster0.sszhzlo.mongodb.net/?retryWrites=true&w=majority")
 const User = mongoose.model("User",{
    Username:String,
    FirstName:String,
    LastName:String,
    Password:String 
 })
// }
module.exports={
    User
};