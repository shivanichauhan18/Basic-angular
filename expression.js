const express = require('express')
const path = require('path');
var bodyParser = require("body-parser");

app = express()
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/AngularPage',(req,res)=>{
    res.sendFile(path.join(__dirname+'/expression.html'));
})

app.listen(8000,()=>{
    console.log("8001 pr sunta hai....")
})