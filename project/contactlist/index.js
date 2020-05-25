//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/ContactList');

//on true connectior
mongoose.connection.on('connected', ()=>{
    console.log('Connected to mongo db ok');
});

//no connection
mongoose.connection.on('error', (err)=>{
    if(err)
    {
        console.log('Erroe in db connection: '+ err);
    }
    console.log('Failed to mongo db ok');
});

//port number
const port = 3000;

//adding mddleware
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

//testing
app.get('/',(req,res)=>{
    res.send('google');
});

app.listen(port, function(){
    console.log('Server started at port: '+port);
});