
 function middleware() {
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

    return app;
} 