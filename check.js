const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const router = express.Router();
var mysql = require('mysql');


app.get("/Science",function(req,res){
    res.sendFile(__dirname + '/Science.html');});
  app.get('/Football',function(req,res) {
    res.sendFile(__dirname + '/Football.html');});
    app.get("/SaveToDB",function(req,res){
      console.log(req.url);
      res.redirect('/Science');
      });
  
  app.use(function(req, res) {
    res.status(404).end('404 NOT FOUND');
  });