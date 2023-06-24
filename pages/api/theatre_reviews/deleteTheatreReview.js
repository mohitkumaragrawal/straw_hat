const { getAccessToken, withApiAuthRequired } = require('@auth0/nextjs-auth0');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteTheatreReview = async (req, res) => {
  try {
    /*const { accessToken } = getAccessToken(req, res, {
      scopes: ['read:shows']
    });*/
    const userId = '2';
    const theaterId = 2;
    //const { userId, theaterId } = req.body;
    const del = await prisma.theaterReview.deleteMany({ where: { userId, theaterId } });
    res.status(200).json({
      message: 'successfully deleted review'
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

module.exports = deleteTheatreReview;
