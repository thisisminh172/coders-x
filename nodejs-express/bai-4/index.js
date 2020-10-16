//console.log(process.env);
require('dotenv').config();
// console.log(process.env.SESSION_SECRET);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// console.log(shortid.generate());
const port = 3000;

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
const { functionsIn } = require('./db');
// Set some defaults (required if your JSON file is empty)
var sessionMiddleware = require('./middleware/session.middleware');

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

//app.use(cookieParser('fasfafasdrew123123'));
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.static('public'));
app.use(sessionMiddleware);

app.get('/',(req, res) => res.render('index',{name: 'Leminh'}));


app.use('/users',userRoute);
app.use('/auth',authRoute);
app.use('/products',productRoute);
app.use('/cart',cartRoute);

app.listen(port, ()=>console.log(`Example app listtening on port ${port}`));