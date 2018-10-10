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

let server = app.listen(8000, () => {
    console.log("app running on port.", server.address().port);
});

const db = "test";
let uri = "mongodb+srv://jerry:Kissakala@cluster0-gharm.mongodb.net/" + db;

const accessToken = Math.random().toString(36);

app.get("/authorized", (req, res, next) => {
    if (req && req.query.token === accessToken) {
        
    } 
});

app.get("/login", (req, res, next) => {
    MongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log("connection failed");

        } else if (client) {
            console.log("Connected successfully to server");
        }
        let collection = client.db("test").collection("kokeet");

        let params = {
            username: req.query.username,
            password: req.query.password
        };

        collection.findOne({ username: params.username }, function (err, result) {
            if (params.password === result.password) {
                res.json(accessToken);
            }
        });

        client.close();
    });
});

app.post("/signup", (req, res, next) => {
    MongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log("connection failed");

        } else if (client) {
            console.log("Connected successfully to server");
        }
        let collection = client.db("test").collection("kokeet");

        let account = {
            username: req.body.username,
            password: req.body.password
        };

        console.log(account, "user");

        let accountExists = false;

        collection.findOne({ username: account.username }, function (err, result) {
            if (result && result.username === account.username) {
                accountExists = true;
            }
        });

        if (!accountExists) {
            collection.insertOne(account, function (err, record) {
                if (err) {
                    console.log("error")
                }
                if (record) {
                    console.log("new user added");
                }
            });
        }
        client.close();
    });
});


app.get("/api/:title", (req, res, next) => {
    MongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log("connection failed");

        } else if (client) {
            console.log("Connected successfully to server");
        }
        let collection = client.db("test").collection("kokeet");

        let query = req.params.title;

        collection.find({ title: query }).toArray(function (err, docs) {
            res.json(docs);
        });

        client.close();
    });
});

app.get("/url", (req, res, next) => {
    MongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log("connection failed");

        } else if (client) {
            console.log("Connected successfully to server");
        }
        let collection = client.db("test").collection("kokeet");

        collection.find({}).toArray(function (err, docs) {
            res.json(docs);
        });

        client.close();
    });
});

app.post("/url", (req, res, next) => {
    console.log("app.post");
    MongoClient.connect(uri, function (err, client) {
        if (err) {
            console.log("connection failed");

        } else if (client) {
            console.log("Connected successfully to server");
        }
        let collection = client.db("test").collection("kokeet");

        let document = {
            title: req.body.title,
            description: req.body.description
        };

        collection.insertOne(document, function (err, record) {
            if (err) {
                console.log("error")
            }
            if (record) {
                console.log("Record added as " + record._id);
            }
        });
        client.close();
    });
});