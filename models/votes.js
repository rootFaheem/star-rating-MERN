const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VotesSchema = new Schema({
  totalVotes: {
    type: Number,
    required: true
  },
  userName: {
    type: String
    // required: true
  }
});

module.exports = Vote = mongoose.model("Votes", VotesSchema);
