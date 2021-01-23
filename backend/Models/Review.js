const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({

  Text: {type: String, required: true, default: ''},
  Rating: {type: Number, min: 1, max: 5, required: true}

}, { timestamps: true });

module.exports = ReviewSchema;
