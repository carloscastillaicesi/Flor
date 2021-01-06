const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

/**Cors */
app.use(cors());
/**Bodyparser Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//DB config

const db = require('./config/keys').dbURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
 console.log("connected to DB");


}).catch((error) => { console.log(error.message) });



const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Running server in port ${port}`));