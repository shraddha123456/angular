var express = require('express');
 var app= express();

//hosting static files
app.use(express.static(__dirname+'/' ));




app.get('/',function(req,res){
 res.redirect('/views/index.html');
 });
 
 

 app.listen(3000,function(req,res){
     console.log("listening to port 3000: localhost:3000");
 });