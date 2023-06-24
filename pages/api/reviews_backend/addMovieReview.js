//const { getAccessToken, withApiAuthRequired } = require('@auth0/nextjs-auth0');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addMovieReview = async (req, res) => {
  try {
    /*const { accessToken } = await getAccessToken(req, res, {
      scopes: ['read:shows']
    });*/
    //console.log(req);

    const { userId, movieId, rating, review } = req.body;

    const userExists = await prisma.movieReview.findMany({ where: { userId, movieId } });

    if (!userExists) {
      const add = await prisma.movieReview.create({ data: { userId, movieId, rating, review } });
    } else {
      const update = await prisma.movieReview.updateMany({ where: { userId, movieId }, data: { rating, review } });
    }
    res.status(200).json({
      message: 'successfully added/updated movie review'
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

module.exports = addMovieReview;
