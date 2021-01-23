var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const reviewsDB = mongoose.connection.useDb('Reviews');

const DemoReviewSchema = require('../Models/DemoReview.js');
const DemoReviews = reviewsDB.model('DemoReview', DemoReviewSchema);


router.get('/reviews/:rating', async function (req, res) {
    let rating = req.params.rating;
    result = await DemoReviews.find({ Rating: rating });
    res.send(result);
}); 

router.get('/reviews/', async function (req, res) {
  result = await DemoReviews.find();
  res.send(result);
}); 

router.post('/reviews/:text/:rating', function (req, res) {
    let text = req.params.text;
    let rating = req.params.rating;
    let result = DemoReviews.create({ Text: text, Rating: rating }, function (err) {
        if (err) res.send('Failure');
      });
    
    res.send('Success');
  });

/**
 * Exporting the router allows us to access it from index.js where the server is started
 */
module.exports = router;