var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;
var authRouter = require('./routes/auth-routes');
var userRouter = require('./routes/user-routes');
var categoryRouter = require('./routes/categorie-routes');
var createSubcategoryRouter = require('./routes/subcategory');

var app = express();

app.use(cors());
app.use('/auth' , authRouter);
app.use('/user' , userRouter);
app.use('/categories' , categoryRouter);
app.use('/subcategory' , createSubcategoryRouter);
var Client = new MongoClient('mongodb+srv://mernecom:mernecom@cluster0.wtjik.mongodb.net/mern_ecom?retryWrites=true&w=majority');

var connection; 

Client.connect((err,db)=>{
    if(!err)
    {
        connection = db;
        console.log("Database connected sucessfully");
    }
    else
    {
        console.log("Database could not connect successfully");
    }
})


app.get('/user',(req,res)=>{
    var productdatabase = connection.db('mern_ecom').collection('user');
    productdatabase.find().toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",data:docs});
        }
        else
        {
            res.send({status:"failed",data:err});
        }
    })
})

app.get('/user/:id',(req,res)=>{
    var productdatabase = connection.db('mern_ecom').collection('user');
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
}) 





app.listen(3000,()=>{
    console.log("Server running on port 3000");
})