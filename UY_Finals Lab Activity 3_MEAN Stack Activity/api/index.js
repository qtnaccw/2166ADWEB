var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

//Create an instance of express app
var app=Express();
//Make use of the CORS module
app.use(cors());

//Indicate the connection string from mongodb
var CONNECTION_STRING = "mongodb+srv://fuy:gleipnir86@cluster0.cdxm6tb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Indicate the name of the database
var DATABASENAME = "MyDb";

//instantiate the mongodbclient
var database;

//create a listener
app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log(`Connected!`);
    })
})

app.get('/api/books/GetBooks',(req, res) => {
    database.collection("books").find({}).toArray((error,result)=>{
        res.send(result);
    })
})

app.post('/api/books/AddBook', multer().none(), async (req, res) => {
    try {
        const numOfDocs = await database.collection("books").countDocuments();
        await database.collection("books").insertOne({
            id: (numOfDocs + 1).toString(),
            title: req.body.title,
            description: req.body.description, // Add description field
            price: req.body.price // Add price field
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Failed to add book" });
    }
});

app.delete('/api/books/DeleteBook', (req, res)=>{
    database.collection("books").deleteOne({
        id:req.query.id
    });
    res.json("Deleted successfully!");
})