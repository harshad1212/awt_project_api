
const mongoose = require('mongoose')

//client

const clientSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String
})
module.exports = mongoose.model("clientdata",clientSchema);