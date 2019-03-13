const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Vote = require("../../models/votes");

router.get("/", (req, res) => {
  Vote.find().then(votes => res.json(votes));
});

router.post("/", (req, res) => {
  const newVote = new Vote({
    totalVotes: req.body.newVote,
    userName: req.body.userName
  });
  newVote.save().then(votes => res.json(votes));
});

module.exports = router;
