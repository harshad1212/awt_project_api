//product

const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    title : String, 
    price: String,
    count: String,
    url: String,
    category: String,
    description:String
})

module.exports = mongoose.model("Productdetails",productSchema);
