import { useState, useEffect } from 'react';
// import { db } from '../../utils/firebaseConfig';
// import { doc, getDoc } from 'firebase/firestore/lite';
import Link from 'next/link';
// import { toast } from 'react-toastify';
// import Loading from '../../components/loading';
import styles from './showmovie.module.css';
import { Typography } from '@mui/material';
// import Carousels from '../../components/carousel';

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
  const [removeMovie, setRemoveMovie] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className={styles.container}>
      <div className={styles.main_cont}>
        <div className={styles.poster_cont}>
          {/* <img className={styles.poster} src={movie.images[0]} alt="poster" id="poster" /> */}
          <img
            className={styles.poster}
            src="https://images.bauerhosting.com/legacy/empire-images/articles/5ca1ec3f133d503e3a486a2e/avengers-russian-crop.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
            alt="poster"
            id="poster"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.info}>
            <div className={styles.title}>
              {/* <p id="name">{movie.name}</p> */}
              <h1 id="name">Avengers: Endgame</h1>
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
                After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite
                and assemble again to reinvigorate their trounced allies and restore balance.
              </Typography>
            </div>
            <div className={styles.tag}>
              <ul className={styles.ul}>
                {/* {movie.tag.map((tag, index) => (
                  <li key={index} className={styles.li}>
                    <span>{tag}</span>
                  </li>
                ))} */}
                <li className={styles.li}>Action</li>
                <li className={styles.li}>Adeventure</li>
              </ul>
            </div>
            <div className={styles.main}>
              <label htmlFor="director" className={styles.label}>
                director:
              </label>
              <ul className={styles.ul}>
                {/* {movie.director.map((director, index) => (
                  <li key={index} className={styles.li}>
                    <span>{director}</span>
                  </li>
                ))} */}
                <li className={styles.li}>Anthony Russo</li>
              </ul>
            </div>
            <div className={styles.main}>
              <label htmlFor="writers" className={styles.label}>
                writers:
              </label>
              <ul className={styles.ul}>
                {/* {movie.writers.map((writers, index) => (
                  <li key={index} className={styles.li}>
                    <span>{writers}</span>
                  </li>
                ))} */}
                <li className={styles.li}>Christopher Markus</li>
              </ul>
            </div>
            <div className={styles.rating}>
              {/* <p id="rating">❤️ {movie.rating}/10</p> */}
              <Typography
                variant="p"
                style={{
                  fontSize: '1rem'
                }}>
                ❤️ 8.4/10
              </Typography>
            </div>
            <div className={styles.duration}>
              {/* <p id="duration" className={styles.dur}>
                {movie.duration}
              </p> */}
              <p id="duration" className={styles.dur}>
                3h 2m
              </p>
            </div>
            <div className={styles.release}>
              <label htmlFor="release" className={styles.label}>
                release
              </label>
              {/* <p id="release">{movie.release}</p> */}
              <p id="release">26 April 2019</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href={`/seats`}>
            <h2 className={styles.book}>Book Ticket</h2>
          </Link>
        </div>
      </div>
      {/* <div className={styles.about}>
        <h2>About Movie:</h2>
        <div className={styles.main}>
          <label htmlFor="stars" className={styles.label}>
            stars:
          </label>
          <ul className={styles.ul}>
            {movie.stars.map((stars, index) => (
              <li key={index} className={styles.li}>
                <span>{stars}</span>
              </li>
            ))}
            <li className={styles.li}>Robert Downey Jr.</li>
            <li className={styles.li}>Chris Evans</li>
            <li className={styles.li}>Mark Ruffalo</li>
          </ul>
        </div>
        <div className={styles.gall_main}>
          <label htmlFor="trailer" className={styles.gall_label}>
            trailer
          </label>
          <iframe
            className={styles.tariler}
            src={`https://www.youtube.com/embed/${movie.trailer}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
        <div className={styles.gall_main}>
          <label htmlFor="image" className={styles.gall_label}>
            Images
          </label>
          <div className={styles.car}>
            <Carousels images={movie.images} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

// export async function getServerSideProps({ params: { id } }) {
//   return { props: { id } };
// }

export default Movie;
