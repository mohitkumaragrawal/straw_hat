//const { getAccessToken, withApiAuthRequired } = require('@auth0/nextjs-auth0');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addTheatreReview = async (req, res) => {
  try {
    /*const { accessToken } = await getAccessToken(req, res, {
      scopes: ['read:shows']
    });*/
    //console.log(req);

    const { userId, rating, review, theaterId } = req.body;

    const userExists = await prisma.theaterReview.findMany({ where: { userId, theaterId } });

    if (!userExists) {
      const add = await prisma.theaterReview.create({ data: { userId, rating, review, theaterId } });
    } else {
      const update = await prisma.theaterReview.updateMany({ where: { userId, theaterId }, data: { rating, review } });
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

module.exports = addTheatreReview;
