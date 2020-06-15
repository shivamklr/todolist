const express = require('express');
const port = 8000;
const app = express();

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