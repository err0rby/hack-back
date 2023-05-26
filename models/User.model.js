const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:String,
    surname:String,
    login:String,
    password:String,
    bankCard:String,
    raiting:String,
    phone:Number,
    mail:String,
})

const User = mongoose.model("User", UserSchema);

module.exports = User