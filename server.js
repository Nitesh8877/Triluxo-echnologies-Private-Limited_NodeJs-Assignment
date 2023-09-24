const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('./routes/book.routes')(app)

app.listen(4004,()=>{
    console.log(`application started this port number: 4004`)
})