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
    console.log(userId, movieId, rating, review);

    const userExists =
      await prisma.$queryRaw`Select * from "MovieReview" where "userId"=${userId} and "movieId"=${movieId}`;

    if (!userExists) {
      const add = await prisma.$queryRaw`Insert into "MovieReview" values (${userId},${movieId},${rating},${review})`;
      console.log(add);
    } else {
      const update =
        await prisma.$queryRaw`update "MovieReview" set "rating"=${rating} and "review"=${review} where "userId"=${userId} and "movieId"=${movieId}`;
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
