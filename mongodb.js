const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/farmers-engine";

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(async (res) => {
  console.log("Mongo connection established successfully!");
}, err => {
  console.log("Mongo connection established unsuccessfully", err);
});
