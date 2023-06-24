const { getAccessToken, withApiAuthRequired } = require('@auth0/nextjs-auth0');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteMovieReview = async (req, res) => {
  try {
    /*const { accessToken } = getAccessToken(req, res, {
      scopes: ['read:shows']
    });*/
    //const userId = '2';
    //const movieId = '3';
    const { userId, movieId } = req.body;
    const del = await prisma.movieReview.deleteMany({ where: { userId, movieId } });
    res.status(200).json({
      message: 'successfully deleted review'
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

module.exports = deleteMovieReview;
