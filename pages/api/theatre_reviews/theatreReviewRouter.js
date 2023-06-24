const express = require('express');
const router = express.Router();
const addTheatreReview = require('./addTheatreReview');
const deleteTheatreReview = require('./deleteTheatreReview');
const viewTheatreReview = require('./viewTheatreReview');

router.post('/add', addTheatreReview);
router.post('/delete', deleteTheatreReview);
router.post('/view', viewTheatreReview);

module.exports = router;
