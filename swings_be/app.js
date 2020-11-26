require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const port = 3000;

const RouterUser = require("./routers/User")
const RouterProduct = require("./routers/Product")

// Kết nối database
mongoose.connect('mongodb://localhost/Log-in', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(function() {
    console.log("Successfully connected to the database");    
}).catch(function(err) {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(RouterUser)
app.use(RouterProduct)


app.listen(port, function(){
    console.log("Server listening port",+port)
})