//product

const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    title : String, 
    price: String,
    count: String,
    url: String,
    category: String,
    description:String
})

module.exports = mongoose.model("cartdata",cartSchema);
