const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes.js');
const cors = require('cors');

const app = express();

mongoose.connect('url_mongo_atlas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333);