const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Client = require('./model/client');
const Admin = require('./model/admin');
const Product = require('./model/product');
const addToCart =require('./model/addtocart')
const product = require('./model/product');
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://harshadkd:harshu123@projectdb.2kzrche.mongodb.net/?retryWrites=true&w=majority&appName=Projectdb").then(() => {
  console.log("db conected");
})

app.post("/login", (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;

  Client.findOne({ email:email})
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        }
        else {
          res.json("Invalid Password")  
        }
      }
      else {
        res.json("NO user Existed")
      }
    })
})

//admin

app.post("/admin", (req, res) => {
  const { email, password } = req.body;
  Admin.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Apporved")
        }
        else {
          res.json("Invalid Password")
        }
      }
      else {
        res.json("NO user Existed")
      }
    })
})

//register

app.post("/register", (req, res) => {

  Client.create(req.body)
    .then(client => res.json(client))
    .catch(err => res.json(err))
})

//adminRegister

app.post("/adminreg", (req, res) => {

  Admin.create(req.body)
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
})

//productadd
app.post("/product", (req, res) => {

  Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err))
})

//productdisplay

app.get("/product", (req, res) => {
  Product.find({})
    .then(product => res.json(product))
    .catch(err => console.log(err))
})

//productdisplayhome
app.get("/productsword", (req, res) => {
  Product.find({category:"sword"})
    .then(product => res.json(product))
    .catch(err => console.log(err))
})
app.get("/productpistol", (req, res) => {
  Product.find({category:"pistol"})
    .then(product => res.json(product))
    .catch(err => console.log(err))
})

//productshowcart
app.post("/addtocart/:id", (req, res) => {
  
    product.findById({_id: req.params.id })
    .then(admin =>{ 
      console.log(admin)
      
      addToCart.create(
        {
          title : admin.title,
          price : admin.price,
          count : admin.count,
          description : admin.description,
          url : admin.url,
          category : admin.category
        }
      ).then(cart => res.jeson(cart)).catch(err =>res.json(err))
})
    .catch(err => res.json(err))
})


app.get("/productcart", (req, res) => {
  addToCart.find({})
    .then(product => res.json(product))
    .catch(err => console.log(err))
})


app.delete('/productcart/:id', (req, res) => {
  addToCart.findByIdAndDelete({ _id: req.params.id })
    .then(product => res.json(product))
    .catch(err => console.log(err))
})

//productdelete
app.delete('/product/:id', (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id })
    .then(product => res.json(product))
    .catch(err => console.log(err))
})
//productUpdate
app.put('/product/:id',(req, res) => {
  Product.findByIdAndUpdate({_id : req.params.id},{
    title : req.body.title,
    price : req.body.price,
    count : req.body.count,
    description : req.body.description,
    url : req.body.url
  })
  .then(product => res.json(product)   

)
  .catch(err => console.log(err))
})


app.get('/product/:id', (req, res) => {
  Product.findById({ _id: req.params.id },)
    .then(product => res.json(product))
    .catch(err => console.log(err))
})

app.listen(3000, () => {
  console.log("Server is running")
})