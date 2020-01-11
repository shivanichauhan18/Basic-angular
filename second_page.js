const express = require('express')
const path = require('path');
var bodyParser = require("body-parser");

app = express()
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/AngularPage',(req,res)=>{
    res.sendFile(path.join(__dirname+'/second_page.html'));
})

app.listen(8000,()=>{
    console.log("8000 pr sunta hai....")
})