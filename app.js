const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./routes");

const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

mongoose.connect('mongodb://localhost:27017/todo').then(() => {
  console.log('succes conncect database');
}).catch((err) => console.log("error connect mongo db"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
