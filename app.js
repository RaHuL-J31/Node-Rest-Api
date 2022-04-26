const express = require("express");
const mongoose = require("mongoose");
const app = express();
const alienRouter = require("./routes/aliens");
const shopRouter = require("./routes/shop");
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use("/aliens", alienRouter);
app.use("/shop", shopRouter);

mongoose
  .connect(
    "mongodb+srv://root:root123@rest.bmbcm.mongodb.net/telskotutorial?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected");
  })

  .catch((err) => {
    console.log("No Connection");
  });
app.listen(3000);
