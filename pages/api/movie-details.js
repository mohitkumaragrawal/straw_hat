export default async function (req, res) {
  const movieToSearch =
    req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.movie
      ? req.body.queryResult.parameters.movie
      : 'The Godfather';

  const API_KEY = process.env.OMDB_API_KEY;
  const reqUrl = encodeURI(`http://www.omdbapi.com/?t=${movieToSearch}&apikey=${API_KEY}`);

  const responseFromAPI = await fetch(reqUrl);
  const movie = await responseFromAPI.json();

  let dataToSend =
    movieToSearch === 'The Godfather'
      ? `I don't have the required info on that. Here's some info on 'The Godfather' instead.\n`
      : '';
  dataToSend += `${movie.Title} is a ${movie.Actors} starer ${movie.Genre} movie, released in ${movie.Year}. It was directed by ${movie.Director}`;

  return res.json({
    speech: dataToSend,
    displayText: dataToSend,
    source: 'get-movie-details'
  });
}
