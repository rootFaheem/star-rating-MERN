const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Vote = require("../../models/votes");

router.get("/", (req, res) => {
  Vote.find().then(votes => res.json(votes));
});

router.post("/", (req, res) => {
  const id = req.body._id;

  Vote.findOne({ id: req.body._id }).then(Votes => {
    if (!Votes) {
      const newVote = new Vote({
        totalVotes: req.body.newVote,
        id: req.body.id
      });
    }
  });

  return Vote.findByIdAndUpdate(
    id,
    { $inc: { totalVotes: +req.body.newVote } },
    (err, doc) => {
      if (err) return res.send(500, { error: err });
      return doc;
    }
  )
    .exec()
    .then(data => {
      console.log(data);
      res
        .status(200)
        .json(data)
        .send();
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;
