const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',(req, res) => res.render('index',{name: 'Leminh'}));
app.get('/users',(req, res) => res.render('users/index',{
    users: [
        {id: 1, name: 'Le Minh'},
        {id: 2, name: 'Quynh Nga'}
    ]
}));

app.listen(port, ()=>console.log(`Example app listtening on port ${port}`));