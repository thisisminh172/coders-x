const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// console.log(shortid.generate());
const port = 3000;

var userRoute = require('./routes/user.route');
const { functionsIn } = require('./db');

// Set some defaults (required if your JSON file is empty)


app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/',(req, res) => res.render('index',{name: 'Leminh'}));

app.use('/users',userRoute);



app.listen(port, ()=>console.log(`Example app listtening on port ${port}`));