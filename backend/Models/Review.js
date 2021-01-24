const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({

  Address: {type: String, required: true},
  Text: {type: String, required: true, default: ''},
  Rating: {type: Number, min: 0, max: 5, required: true},
  Social: {type: Number, min: 0, max: 5, required: true},
  Sanitation: {type: Number, min: 0, max: 5, required: true},
  Lat: {type: Number, required: true},
  Lng: {type: Number, required: true}

}, { timestamps: true });

module.exports = ReviewSchema;
