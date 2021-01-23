const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const reviewsDB = mongoose.connection.useDb("Reviews");
const ReviewSchema = require("../Models/Review");
const Reviews = reviewsDB.model("Review", ReviewSchema);

exports.addReview = async function (text, rating) {
  try {
    let result = await Reviews.create(
      {
        Text: text,
        Rating: rating,
      },
      function (err) {
        if (err) return "Creation failure";
      }
    );
    return "Creation success";
  } catch (err) {
    return "Invalid creation input";
  }
}; 

exports.getAllReviews = async function () {
  result = await Reviews.find({  });
  return result;
}

exports.getReviewsByRating = async function (rating) {
  result = await Reviews.find({ Rating: rating });
  return result;
}
