require('dotenv').config({ path: './.env.local' });

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();
const port = process.env.API_PORT || 3001;
const baseUrl = process.env.AUTH0_BASE_URL;
const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;

const reviewRouter = require('./pages/api/reviews_backend/reviewRouter');
const theatreReviewRouter = require('./pages/api/theatre_reviews/theatreReviewRouter');
const showMovies = require('./pages/api/showMovies');
const computeRatings = require('./pages/api/computeRatings');

if (!baseUrl || !issuerBaseUrl) {
  throw new Error('Please make sure that the file .env.local is in place and populated');
}

/*if (!audience) {
  console.log('AUTH0_AUDIENCE not set in .env.local. Shutting down API server.');
  process.exit(1);
}*/

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: baseUrl }));

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`
  }),
  audience: audience,
  issuer: `${issuerBaseUrl}/`,
  algorithms: ['RS256']
});

app.get('/api/shows', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!'
  });
});

app.use('/api/movieReview', reviewRouter);
app.use('/api/theaterReview', theatreReviewRouter);
app.get('/api/showMovies', showMovies);
app.post('/api/computeRatings', computeRatings);

const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));
process.on('SIGINT', () => server.close());
