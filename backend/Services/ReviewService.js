const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const reviewsDB = mongoose.connection.useDb("Reviews");
const ReviewSchema = require("../Models/Review");
const Reviews = reviewsDB.model("Review", ReviewSchema);

exports.addReview = async function (address, text, rating, social, sanitation, lat, lng) {
  console.log("here i am in Review Service creating a review")
  try {
    let result = await Reviews.create(
      {
        Address: address,
        Text: text,
        Rating: rating,
        Social: social,
        Sanitation: sanitation,
        Lat: lat,
        Lng: lng,
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
  result = await Reviews.find({});
  return result;
};

exports.getReviewsByPlaceId = async function (placeId) {
  result = await Reviews.find({ PlaceId: placeId });
  return result;
};

exports.getReviewsByRating = async function (rating) {
  result = await Reviews.find({ Rating: rating });
  return result;
};
