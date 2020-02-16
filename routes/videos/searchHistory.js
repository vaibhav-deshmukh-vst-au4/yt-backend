const express = require("express");
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const searchHistorySchema = {
  searchTerm: {
    type: String,
    required: true
  }
}
const SearchHistory = mongoose.model("searchHistory", searchHistorySchema);

// To get all user search history
router.get("/", async (req, res, next) => {
  try {
    let history = await SearchHistory.find();
    res.json({
      status: true,
      data: history
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// To post in user search history
router.post("/", async (req, res, next) => {
  try {
    let { searchTerm } = req.body;
    // let history = await db().collection("history").insertOne({ searchTerm });
    let history = await SearchHistory.create({ searchTerm });
    res.json({
      status: true,
      data: history
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// To clear entire search history
router.delete("/all", async (req, res, next) => {
  try {
    // let history = await db().collection("history").drop();
    await SearchHistory.deleteMany();
    res.json({
      status: true,
      message: "Deleted all successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// To delete one item from search history
router.delete("/:id", async (req, res, next) => {
  try {
    console.log("req.body.params", req.params);
    let { id } = req.params;
    // let history = await db().collection("history").deleteOne({ _id: ObjectID(id) });
    await SearchHistory.deleteOne({ _id: ObjectID(id) });
    res.json({
      status: true,
      message: "Successfully deleted"
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
