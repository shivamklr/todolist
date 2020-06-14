const express = require('express');
const port = 8000;
const app = express();

app.listen(port, function(err){
    if(err){
        console.log(`Error while listening to port ${port}`);
    }
    else console.log(`Listening at port ${port}`);
});