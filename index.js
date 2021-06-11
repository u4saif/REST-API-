const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const app = express();
const port= process.env.PORT || 3000;
// Fix the CORS Error 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//Using bodyParser MiddleWare to parse the req to json
app.use(bodyParser.json());
//accessing the env variables
require("dotenv/config");

//Import  Routes 
const postRoute= require("./routes/post");
app.use(postRoute);

//Routes in the server
app.get("/", (req, res) => {
  res.send("The project is running ....");
});

//connect to db
mongoose.connect(
   process.env.authKey,
  { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.warn("Connected to DB.");
});

//Start the app at port 3000
app.listen(port, () => {
  console.log("App is running at port ..",port);
});
 