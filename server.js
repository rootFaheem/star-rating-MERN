const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const votes = require("./routes/api/votes");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("db connected"))
  .catch(err => console.log(err));

app.use("/api/votes", votes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
