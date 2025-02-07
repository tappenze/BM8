var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const path = require("path");
const ReviewSchema = require("../Models/Review");

const ReviewService = require(path.resolve(
  __dirname,
  "../Services/ReviewService.js"
));

router.get("/reviews/all", async function (req, res) {
  result = await ReviewService.getAllReviews();
  res.send(result);
});


// router.get('/reviews/:rating', async function (req, res) {
//   let rating = req.params.rating;
//   result = await ReviewService.getReviewsByRating(rating);
//   res.send(result);
// });

router.get("/reviews/:placeId", async function (req, res) {
  let placeId = req.params.placeId;
  result = await ReviewService.getReviewsByPlaceId(placeId);
  res.send(result);
});

// router.post('/reviews/:placeId/:text/:rating', async function (req, res) {
//   let placeId = req.params.placeId;
//   let text = req.params.text;
//   let rating = req.params.rating;
//   let result = await ReviewService.addReview(placeId, text, rating);
//   res.send(result);
// });

// I dont want to erase what you did
router.post(
  '/reviews/:address/:text/:rating/:social/:sanitation/:lat/:lng',
  async function (req, res) {
    console.log("in the post function");
    let address = req.params.address;
    let text = req.params.text;
    let rating = req.params.rating;
    let social = req.params.social;
    let sanitation = req.params.sanitation;
    let lat = req.params.lat;
    let lng = req.params.lng;
    let result = await ReviewService.addReview(
      address,
      text,
      rating,
      social,
      sanitation,
      lat,
      lng
    );
    res.send(result);
    console.log(result);
  }
);

/**
 * Exporting the router allows us to access it from index.js where the server is started
 */
module.exports = router;
