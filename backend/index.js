const express = require('express');

const dotenv = require('dotenv').config();

const cors = require('cors');

const countryRouter = require('./routers/CountryRouter.js');

const app = express();

const port = process.env.PORT || 4200;

//Middlewares

app.use(express.json());

app.use(cors());

//Connection to port

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
});

//Routes

app.use('/', countryRouter);

module.exports = app;