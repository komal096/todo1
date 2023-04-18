const express = require('express');
const port = 8080;
const app = express();
const expressLayouts = require('express-ejs-layouts');

// connection to mongoDBdatabase
const db = require('./config/mongoose');

app.use(express.static('./assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// it is use to handle middle ware here we are using express.urlencoded to use the parser
app.use(express.urlencoded());

// use express router
app.use('/',require('./routes/routes'))

// setup the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error! ${err}`);
    }
    console.log(`Server is up and running successfully on port: ${port}`);
})