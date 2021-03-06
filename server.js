const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://jessiejtaylor:Jcrewjt12#$@ds139884.mlab.com:39884/heroku_k479s4jt",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
