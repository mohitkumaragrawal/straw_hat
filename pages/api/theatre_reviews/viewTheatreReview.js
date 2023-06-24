const { getAccessToken, withApiAuthRequired } = require('@auth0/nextjs-auth0');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const viewTheatreReview = async (req, res) => {
  try {
    /*const { accessToken } = getAccessToken(req, res, {
      scopes: ['read:shows']
    });*/
    const { theaterId } = req.body;
    //const theaterId = 1;
    const reviews = await prisma.theaterReview.findMany({ where: { theaterId } });
    console.log(reviews);
    res.status(200).json({
      message: reviews
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

module.exports = viewTheatreReview;
