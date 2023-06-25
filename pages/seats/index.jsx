import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import MoviesContext from '../../context/MoviesContext';
// import { Movie, Seats } from '../../constants/models/Movies';
import styles from './Seats.module.css';

const SeatsPage = () => {
  //   const { movies } = useContext(MoviesContext);
  const router = useRouter();
  let selectedSeats = [];
  const [movieId, setMovieId] = useState();
  const [theatres, setTheatres] = useState([]);
  const [theaterId, setTheaterId] = useState('');
  const [seatDetails, setSeatDetails] = useState({
    A: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    B: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    C: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    D: [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    E: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    F: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    G: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  });

  //   useEffect(() => {
  //     if (!seats) {
  //       clearSelectedSeats();
  //     }
  //   }, []);
  useEffect(() => {
    console.log('use effect');
    const movieId = router.query.movie;
    setMovieId(movieId);

    const getAllTheaters = async () => {
      try {
        const response = await fetch('/api/theatre/getTheatres');
        if (!response.ok) {
          throw new Error('Failed to fetch theatres');
        }
        const theatresData = await response.json();
        console.log(theatresData);
        setTheatres(theatresData);
      } catch (error) {
        console.error('Error fetching theatres:', error);
        throw error;
      }
    };
    getAllTheaters();
  }, []);

  const clearSelectedSeats = () => {
    let newMovieSeatDetails = { ...seatDetails };
    for (let key in seatDetails) {
      seatDetails[key].forEach((seatValue, seatIndex) => {
        if (seatValue === 2) {
          seatDetails[key][seatIndex] = 0;
        }
      });
    }
    setSeatDetails(newMovieSeatDetails);
  };

  const onSeatClick = (seatValue, rowIndex, key) => {
    console.log(seatValue, rowIndex, key);
    if (seatDetails) {
      if (seatValue === 1 || seatValue === 3) {
        return;
      } else if (seatValue === 0) {
        seatDetails[key][rowIndex] = 2;
      } else {
        seatDetails[key][rowIndex] = 0;
      }
    }
    setSeatDetails({ ...seatDetails });
  };

  /**
   * 0 - Not booked
   * 1 - Booked
   * 2 - Selected
   * 3 - Blocked
   */
  const getClassNameForSeats = seatValue => {
    let dynamicClass;
    if (seatValue === 0) {
      dynamicClass = styles.seatNotBooked;
    } else if (seatValue === 1) {
      dynamicClass = styles.seatBooked;
    } else if (seatValue === 2) {
      dynamicClass = styles.seatSelected;
    } else {
      dynamicClass = styles.seatBlocked;
    }
    return `${styles.seats} ${dynamicClass}`;
  };

  const RenderSeats = () => {
    let seatArray = [];
    for (let key in seatDetails) {
      let colValue = seatDetails[key].map((seatValue, rowIndex) => (
        <span key={`${key}.${rowIndex}`} className={styles.seatsHolder}>
          {rowIndex === 0 && <span className={styles.colName}>{key}</span>}
          <span className={getClassNameForSeats(seatValue)} onClick={() => onSeatClick(seatValue, rowIndex, key)}>
            {rowIndex + 1}
          </span>
          {seatDetails && rowIndex === seatDetails[key].length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </span>
      ));
      seatArray.push(colValue);
    }
    return <div className={styles.seatsLeafContainer}>{seatArray}</div>;
  };

  const SelectTheatre = () => {
    const handleChange = event => {
      setTheaterId(event.target.value);
    };

    return (
      <div>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="select-theatre">Select Theatre</InputLabel>
          <Select
            labelId="select-theatre"
            id={theaterId}
            value={theaterId}
            onChange={handleChange}
            sx={{
              my: 5
            }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {theatres.map(theatre => (
              <MenuItem value={theatre.id}>{theatre.name}</MenuItem>
            ))}

            {/* <MenuItem value={10}>Theatre 1</MenuItem>
            <MenuItem value={20}>Theatre 2</MenuItem>
            <MenuItem value={30}>Theatre 3</MenuItem> */}
          </Select>
        </FormControl>
      </div>
    );
  };
  const RenderPaymentButton = () => {
    selectedSeats = [];
    for (let key in seatDetails) {
      seatDetails[key].forEach((seatValue, seatIndex) => {
        if (seatValue === 2) {
          selectedSeats.push(`${key}${seatIndex + 1}`);
        }
      });
    }
    // console.log("length",selectedSeats.length)
    if (selectedSeats.length) {
      //console.log(seatDetails)
      //console.log((selectedSeats.length*200).toString())
      localStorage.setItem('cost', (selectedSeats.length * 200).toString());
      localStorage.setItem('theaterId', theaterId);
      localStorage.setItem('seats', JSON.stringify(seatDetails));
      // console.log(JSON.parse(localStorage.getItem('seats')));
      return (
        // <Link href={{ pathname: '/payment', query: { movieId: movie?.id, seatDetails: JSON.stringify(seatDetails) } }}>
        <Link href={`/payment?movie=${movieId}`}>
          <div className={styles.paymentButtonContainer}>
            <Button variant="contained" href="#contained-buttons" className={styles.paymentButton}>
              {/* Pay Rs.{selectedSeats.length * (movie?.ticketCost || 0)} */}
              Pay Rs.{selectedSeats.length * (200 || 0)}
            </Button>
          </div>
        </Link>
      );
    } else {
      return <></>;
    }
  };

  //   if (!movie) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>Seats</title>
      </Head>
      <div className={styles.seatsContainer}>
        <h1>{movieId}</h1>
        {/* <p>theatre</p> */}
        <SelectTheatre />
        {seatDetails && <RenderSeats />}
        <RenderPaymentButton />
      </div>
    </>
  );
};

export default SeatsPage;
