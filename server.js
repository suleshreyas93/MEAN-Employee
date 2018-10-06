const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const configRoutes = require("./server/routes");
const db = "mongodb://shreyas:shreyas0393@ds119523.mlab.com:19523/employeedemo";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

mongoose.connect(db, { useNewUrlParser: true },function(error){
    if(error){
        console.log("Error connecting to database");
    }

    console.log("Successfully connected");
});

app.use(express.static(path.join(__dirname,"dist")));

configRoutes(app);

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"dist/index.html"));
});




app.listen(3000, function(){
    console.log("Server running on port 3000...");
});