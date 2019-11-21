const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const router = express.Router();
var mysql = require('mysql');



// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "12345",
//   database: "username"

// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


app.get("/Science",function(req,res){
  res.sendFile(__dirname + '/Science.html');});
app.get('/Football',function(req,res) {
  res.sendFile(__dirname + '/Football.html');});

  app.get("/SaveToDB",function(req,res){
     
     var d = new Date();//create time stamp
     var time = d.toLocaleTimeString();
 
     var user_name = req.url;//Adjust the url request to name and intrest
     var field_name=req.url;
     user_name = user_name.replace("+"," ");
     var n = user_name.indexOf("=");
     var r = user_name.indexOf("&")
     user_name = user_name.substring(n+1,r);
     var m=field_name.indexOf("&");
     field_name = field_name.substring(m+1);
     field_name = field_name.replace("inter=","");
    

    var sql = "INSERT INTO intrests (date,name, field) VALUES ("  + "'" + time + "'" +
     ",'"+ user_name+ "'," +  "'" + field_name + "'" + ")";
   

    
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    res.redirect('/Science');
    });

app.use(function(req, res) {
  res.status(404).end('404 NOT FOUND');
});

app.listen(8080,function(){
console.log("connected on port 8080");



});













