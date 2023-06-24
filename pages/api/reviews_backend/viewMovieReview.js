const { getAccessToken, withApiAuthRequired } = require('@auth0/nextjs-auth0');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const viewMovieReview = async (req, res) => {
  try {
    /*const { accessToken } = getAccessToken(req, res, {
      scopes: ['read:shows']
    });*/
    const { movieId } = req.body;
    //const movieId = '3';
    const reviews = await prisma.movieReview.findMany({ where: { movieId } });
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

module.exports = viewMovieReview;
