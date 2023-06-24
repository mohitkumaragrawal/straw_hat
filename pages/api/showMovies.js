const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const showMovies = async (req, res) => {
  try {
    const movies = prisma.$queryRaw('select distinct movieId from "TheaterMovie"');
    res.status(200).json({
      message: movies
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

module.exports = showMovies;
