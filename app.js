const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();
// DB Connection Code
const config = require('./config/database');
mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true });

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

//{ Passport Middleware }
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

//Static Route
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => {
    console.log("Server Started at Port 3000");
});

app.get("/", (req, res) =>{
    res.send("Invalid Endpoint");
});

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});