const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getReviews = async (req, res) => {
  const { id } = req.body;
  try {
    const reviews = await prisma.$queryRaw`select "review" from "MovieReview" where "movieId"=${id} limit 3`;
    res.status(200).json({
      reviews
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

module.exports = getReviews;
