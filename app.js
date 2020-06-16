const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

// setting up public folder for css,scipt and images
app.use(express.static('./assets'));

//in order for the routes to have access use layouts before 
app.use(expressLayouts);

//extract styles and scripts from sub pages into layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/', require('./routes/index.js')); // or './routes/' 

//setting up views and views engine
app.set('views','./views');
app.set('view engine', 'ejs');

app.listen(port, function(err){
    if(err){
        console.log(`Error while listening to port ${port}`);
    }
    else console.log(`Listening at port ${port}`);
});