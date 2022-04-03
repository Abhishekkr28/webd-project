const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

DB_URI = 'mongodb+srv://Tester_1:test123@cluster0.llnh4.mongodb.net/Database?retryWrites=true&w=majority';
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connected to db"))
    .catch(err => console.log(err));

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})