//require library
const mongoose = require("mongoose");

//connect to database
const uri =
    "mongodb+srv://dbUser:1234@cluster0-v6jj2.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri,{'useUnifiedTopology': true, 'useNewUrlParser': true});//getting rid of the warnings

//acquire the connection(to check if it is successful)
const db = mongoose.connection;

//error
db.on("error", console.error.bind(console, "error connecting to db"));

//up and running then print the message
db.once("open", function () {
    console.log("Connected to Database :: MongoDB");
});
module.exports = db;