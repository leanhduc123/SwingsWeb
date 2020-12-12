const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const authenticate = require('./middleware/authenticate');
const http = require('http');
const port = 5000;

const adminRoutes = require('./routes/admins');
//const categoryRoutes = require('./routes/categories');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
//const cartItemRoutes = require('./routes/cartItems');
const orderRoutes = require('./routes/orders');

mongoose.connect('mongodb://localhost/backend', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
    extended: false 
}))

// parse application/json
app.use(bodyParser.json())

app.use('/admin', adminRoutes);
//app.use('/category', categoryRoutes);
app.use('/', userRoutes); 
app.use('/products', productRoutes);
//app.use('/cart', authenticate, cartItemRoutes);
app.use('/order', authenticate, orderRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})


const server = http.createServer(app);

server.listen(port);