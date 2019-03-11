const express = require("express");
const router = express.Router();

const Vote = require("../../models/votes");

router.get("/", (req, res) => {
  Vote.find().then(votes => res.json(votes));
});

router.post("/", (req, res) => {
  var id = req.body._id;
  Vote.findOne({ _id: id }, (err, res) => {
    if (res) {
      if (req.body.newVote) {
        console.log(res.totalVotes);
        res.totalVotes += +req.body.newVote;
        console.log(res.totalVotes);
      }
    }
    res.save(err => {
      if (err) {
        console.log(err);
      }
    });
  }).then(votes => res.json(votes));
});

module.exports = router;
