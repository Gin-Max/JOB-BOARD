const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : '.env'} )
const PORT = process.env.PORT || 8080


// mongodb connection
connectDB();


// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))
app.use('/', require('./server/routes/routerUser'))

//get
app.get("/login", function(req, res) {
    res.render("login");
  });

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});