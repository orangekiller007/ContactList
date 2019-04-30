var express=require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var cors=require('cors')
var path=require('path')


var app= express();

//port 
const port=3001;

const route=require('./routes/route');

//connect to db
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection

mongoose.connection.on('connected' ,()=>{
    console.log('connected to contactlist db at 27017');
})

//on error on connection
mongoose.connection.on('error' ,(err)=>{
    if(err){
        console.log('Error is db connection '+err)
    }
})

//middleware parse data
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')))

//calling route.js for all /api req
app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('foobar');
})

app.listen(port,()=>{
    console.log('server started at port:'+port)
});


