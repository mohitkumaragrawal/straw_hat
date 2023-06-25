import { useState, useEffect } from 'react';
// import { db } from '../../utils/firebaseConfig';
// import { doc, getDoc } from 'firebase/firestore/lite';
import Link from 'next/link';
// import { toast } from 'react-toastify';
// import Loading from '../../components/loading';
import styles from './showmovie.module.css';
import { Button, Input, Rating, Typography } from '@mui/material';
// import Carousels from '../../components/carousel';

import { useRouter } from 'next/router';

const Movie = props => {
  //   const state = {
  //     name: '',
  //     tag: [],
  //     description: '',
  //     director: [],
  //     writers: [],
  //     stars: [],
  //     rating: '',
  //     poster: [],
  //     images: [],
  //     trailer: '',
  //     duration: '',
  //     release: Date,
  //     limit: '',
  //     active: Boolean
  //   };
  // const router = useRouter()
  // const { id } = router.query;
  //   const [movie, setMovie] = useState(state);
  //   const [removeMovie, setRemoveMovie] = useState(false);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(async () => {
  //     try {
  //       setLoading(true);
  //       const res = await getDoc(doc(db, 'movies', `${props.id}`));
  //       setMovie(res.data());
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       return toast.error(error.message);
  //     }
  //   }, []);

  const router = useRouter();

  const id = router.query.id;
  const [movie, setMovie] = useState({ genres: [], image: {} });
  const [rating, setRating] = useState();
  const [reviews, setReviews] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState('');

  async function loadData() {
    let data = await fetch(`https://api.tvmaze.com/shows/${id}`, { method: 'get' });
    data = await data.json();
    console.log(data);
    setMovie(data);

    let rating = await fetch(`http://localhost:3000/api/computeRatings`, {
      method: 'post',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    rating = await rating.json();
    console.log(rating.ratings[0].avg);
    setRating(rating.ratings[0].avg);

    let reviews = await fetch('http://localhost:3000/api/getReviews', {
      method: 'post',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    reviews = await reviews.json();
    console.log(reviews.reviews);
    setReviews(reviews.reviews);
  }

  useEffect(() => {
    loadData();
  }, []);

  const userId = 3;
  async function handleSubmit() {
    console.log(userRating, userReview);
    let result = await fetch('http://localhost:3000/api/reviews_backend/addMovieReview', {
      method: 'post',
      body: JSON.stringify({ userId, movieId: id, rating: userRating, review: userReview }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    if (result) alert('successfully added rating and review');
  }

  return (
    <div className={styles.container} style={{ height: '100%' }}>
      <div className={styles.main_cont}>
        <div
          className={styles.poster_cont}
          style={{
            backgroundImage: `url(${movie.image.medium})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          {/* <img className={styles.poster} src={movie.images[0]} alt="poster" id="poster" /> */}
          {/*<img
            className={styles.poster}
            src={movie.image.medium}
            alt="poster"
            id="poster"
            height='100%'
  />*/}
        </div>
        <div className={styles.details}>
          <div className={styles.info}>
            <div className={styles.title}>
              {/* <p id="name">{movie.name}</p> */}
              <h1 id="name">{movie.name}</h1>
              {/* <p id="limit" className={styles.limit}>
                {movie.limit}+
              </p> */}
              <p id="limit" className={styles.limit}>
                18+
              </p>
            </div>
            <div className={styles.desc}>
              {/* <p id="description">{movie.description}</p> */}
              <Typography
                variant="p"
                style={{
                  fontSize: '1rem'
                }}>
                {movie.summary}
              </Typography>
            </div>
            <div className={styles.tag}>
              <ul className={styles.ul}>
                {/* {movie.tag.map((tag, index) => (
                  <li key={index} className={styles.li}>
                    <span>{tag}</span>
                  </li>
                ))} */}
                {movie.genres.map(item => (
                  <li>{`  ${item} `}</li>
                ))}
              </ul>
            </div>
            {/*<div className={styles.main}>
              <label htmlFor="director" className={styles.label}>
                director:
              </label>
              <ul className={styles.ul}>
                {/* {movie.director.map((director, index) => (
                  <li key={index} className={styles.li}>
                    <span>{director}</span>
                  </li>
                ))}
                <li className={styles.li}></li>
              </ul>
            </div>
            <div className={styles.main}>
              <label htmlFor="writers" className={styles.label}>
                writers:
              </label>
              <ul className={styles.ul}>
                {movie.writers.map((writers, index) => (
                  <li key={index} className={styles.li}>
                    <span>{writers}</span>
                  </li>
                ))}
                <li className={styles.li}>Christopher Markus</li>
              </ul>
            </div>*/}
            <div className={styles.rating}>
              {<p id="rating">❤️ {rating}/10</p>}
              <Typography
                variant="p"
                style={{
                  fontSize: '1rem'
                }}>
                ❤️
              </Typography>
            </div>
            <div className={styles.duration}>
              {/* <p id="duration" className={styles.dur}>
                {movie.duration}
              </p> */}
              <p id="duration" className={styles.dur}>
                {movie.averageRuntime} minutes
              </p>
            </div>
            <div className={styles.release}>
              <label htmlFor="release" className={styles.label}>
                release
              </label>
              {/* <p id="release">{movie.release}</p> */}
              <p id="release">{movie.premiered}</p>
            </div>
            <div>
              <ul>
                {reviews.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <Rating sx={{ fontSize: '40px' }} onChange={e => setUserRating(e.target.value)}></Rating>
            <br></br>
            Write a review<br></br>
            <Input onChange={e => setUserReview(e.target.value)}></Input>
            <Button onClick={handleSubmit}>Submit review</Button>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href={`/seats`}>
            <h2 className={styles.book}>Book Ticket</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
