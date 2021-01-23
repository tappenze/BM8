


/* DO NOT USE */





const mongoose = require("mongoose");

const DemoReviewSchema = new mongoose.Schema({
//   User: { type: mongoose.Schema.Types.ObjectId, required: [true, 'UserID required!'] },
//   Address: {type: String, required: [true, 'Address required!'] },
//   Quantity: { type: Number, required: [true, 'Quantity required!']},
//   Price: { type: Number, required: [true, 'Price required!'] },
//   Comments: {type: String},
//   PaymentCollected: {type: Boolean, required: true, default: false},

  Text: {type: String, required: true, default: ''},
  Rating: {type: Number, min: 1, max: 5, required: true}

}, { timestamps: true });

module.exports = DemoReviewSchema;
