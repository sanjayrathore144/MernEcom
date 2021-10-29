var Router = require('express').Router();
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.use(cors());

var Client = new MongoClient('mongodb+srv://mernecom:mernecom@cluster0.wtjik.mongodb.net/mern_ecom?retryWrites=true&w=majority');

var connection; 

Client.connect((err,db)=>{
    if(!err)
    {
        connection=db;
        console.log("Database connected sucessfully");
    }
    else
    {
        console.log("Database could not connect successfully");
    }
})


Router.get('/', bodyParser.json() , (req,res)=>{
    var productdatabase = connection.db('mern_ecom').collection('subcategory');
    productdatabase.find().toArray((err,docs)=>{
        if(!err){
            res.send({status:"OK" , data: docs});
        }
        else{
            res.send({status:"FAILED" , data:err});
        }
    })
});

Router.get('/:id', bodyParser.json() , (req,res)=>{
    var productdatabase = connection.db('mern_ecom').collection('subcategory');
    productdatabase.find({_id:ObjectId(req.params.id)}).toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",data:docs});
        }
        else
        {
            res.send({status:"failed",data:err});
        }
    })
});

Router.post('/create',bodyParser.json(),(req,res)=>{
    var productdatabase = connection.db('mern_ecom').collection('subcategory');
    console.log("asdas");
    productdatabase.insert(req.body,(err,result)=>{
        console.log("before if");
        if(!err)
        {
            res.send({status:"ok",data:"Subcategory created Successfully"});
        }
        else
        {
            res.send({status:"failed",data:err});
        }
    })
})

module.exports = Router;