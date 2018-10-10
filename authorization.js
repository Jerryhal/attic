var MongoClient = require('mongodb').MongoClient;
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

let server = app.listen(9000, () => {
    console.log("app running on port.", server.address().port);
});

// const db = "test";
// let uri = "mongodb+srv://jerry:Kissakala@cluster0-gharm.mongodb.net/" + db;

// let accessToken = Math.random().toString(36);



// app.get("/authorize", (req, res, next) => {
//   console.log("terve");
    
//     if (req && req.query.token === accessToken) {
//         res.send("hip heu");
//     } 
// });

// app.get("/authorized", (req, res, next) => {
//     if (req && req.query.token === accessToken) {
        
//     } 
// });

