const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes.js');

const app = express();

mongoose.connect('mongodb+srv://samuel:leonel1234@cluster0-fmbdx.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)


app.listen(3333);