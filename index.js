const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const addItems = require('./helpers/addItems')
const app = express()

//MongoDB Connect URI
const DB='mongodb+srv://faraz:12345@cluster0.lkjvp.mongodb.net/studentApi?retryWrites=true&w=majority'

//connect to Database
mongoose.connect(DB, {
    useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:false
}).then(() =>{
    console.log("Connected to DB")
}).catch((err) =>{
    console.log("Error found")
})


// MIDDLEWARE
app.use(bodyParser.json())

// ADD ITEMS TO DATABASE
// use only one time otherwise it will create copy in db
// addItems()

// ROUTES
const routes = require('./routes')
routes(app)


// LISTEN ON PORT 3000
app.listen('3000', () => {
	console.log('server started at port 3000')
})