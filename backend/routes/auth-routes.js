// // /auth/login     post
// // in--> {email, password}
// // out-->{status, data}
// // /auth/register    post
// // in --> {name, email, contact, password}
// // process--> existance
// // out --> {status:"", data:""}

// // /auth/logout
// // /auth/forget-password


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

var Router = require('express').Router();
var app = express();

app.use(cors());



var Client = new MongoClient('mongodb+srv://mernecom:mernecom@cluster0.wtjik.mongodb.net/mern_ecom?retryWrites=true&w=majority');

var connection; 

Client.connect((err,db)=>{
    if(!err)
    {
        connection = db;
        console.log("Database connected sucessfully for Auth");
    }
    else
    {
        console.log("Database could not connect successfully");
    }
})


Router.post('/login', bodyParser.json() , (req,res)=>{
    var productdatabase = connection.db('mern_ecom').collection('user');
    productdatabase.insert(req.body , (err,result)=>{
        if(!err){
            res.send({status:"OK" , data: "Login Successfully"});
        }
        else{
            res.send({status:"FAILED" , data:err});
        }
    })
});

Router.post('/register',bodyParser.json(), (req,res)=>{
    var userAuth = connection.db('mern_ecom').collection('user');
    userAuth.insert(req.body , (err,result)=>{
        if(!err){
            res.send({status:"OK" , data: "Register Successfully"});
        }
        else{
            res.send({status:"FAILED" , data:err});
        }
    })
});


module.exports = Router;



