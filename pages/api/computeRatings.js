const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const computeRatings = async (req, res) => {
  const { id } = req.body;
  try {
    const ratings = await prisma.$queryRaw`select avg("rating") from "MovieReview" where "movieId"=${id}`;
    res.status(200).json({
      ratings
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

module.exports = computeRatings;
