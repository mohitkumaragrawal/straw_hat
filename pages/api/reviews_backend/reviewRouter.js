const express = require('express');
const addMovieReview = require('./addMovieReview');
const deleteMovieReview = require('./deleteMovieReview');
const viewMovieReview = require('./viewMovieReview');
const router = express.Router();

router.post('/addMovieReview', addMovieReview);
router.post('/deleteMovieReview', deleteMovieReview);
router.post('/viewMovieReview', viewMovieReview);

module.exports = router;
