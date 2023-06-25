import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Link from 'next/link';

// import { Movie, Seats } from '../../constants/models/Movies';
import styles from './Payment.module.css';
// import MoviesContext from '../../context/MoviesContext';

const Tickets = () => {
  //   const { movies, setMovies } = useContext(MoviesContext);
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  let movieSeatDetails = {};
  let bookingChargePerTicket = 20,
    ticketCost,
    bookingFee,
    totalCost;
  //   let bookingChargePerTicket = 200;

  //   const { movieId, seatDetails } = router.query;
  //   const movie = movies.find(mov => mov.id === parseInt(movieId));
  const [movieId,setMovieId]=useState()
  const [cost,setCost]=useState()
  const [seatDetails, setSeatDetails] = useState({
    A: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    B: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    C: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    D: [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    E: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    F: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    G: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  });
  if (seatDetails) {
    // movieSeatDetails = JSON.parse(seatDetails);
    movieSeatDetails = seatDetails;
  }

  useEffect(() => {
    const movieId=localStorage.getItem('movieId')
    console.log(movieId)
    setMovieId(movieId)
    const cost=localStorage.getItem('cost')
    console.log(cost)
    setCost(cost)
    /*const seats=localStorage.getItem('seats')
    console.log(seats)
    setSeatDetails(seats)*/
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setIsTimerCompleted(true);
    }
  },[]);

  const computeSelectedSeats = () => {
    let selectedSeats = [];
    for (let key in movieSeatDetails) {
      movieSeatDetails[key].forEach((seatValue, seatIndex) => {
        if (seatValue === 2) {
          selectedSeats.push(`${key}${seatIndex + 1}`);
        }
      });
    }
    return selectedSeats;
  };

  const RenderSeatDetails = ({ selectedSeats }) => {
    // ticketCost = selectedSeats.length * (movie?.ticketCost || 0);
    ticketCost = selectedSeats.length * 200;
    return (
      <div className={styles.seatDetailsContainer}>
        <div className={styles.seatDetails}>
          {selectedSeats.join(', ')} ({selectedSeats.length} Tickets)
        </div>
        <div className={styles.seatCost}>Rs.{ticketCost}</div>
      </div>
    );
  };

  const RenderBookingCharge = ({ selectedSeats }) => {
    bookingFee = selectedSeats.length * bookingChargePerTicket;
    return (
      <div className={styles.seatDetailsContainer}>
        <div className={styles.seatDetails}>Booking Charge</div>
        <div className={styles.seatCost}>Rs.{cost}</div>
      </div>
    );
  };

  const RenderTotalCharge = ({ selectedSeats }) => {
    totalCost = ticketCost + bookingFee;
    return (
      <div className={styles.seatDetailsContainer}>
        <div className={styles.seatDetails}>Total</div>
        <div className={styles.seatCost}>Rs.{cost}</div>
      </div>
    );
  };

  const modifiedSeatValue = () => {
    let newMovieSeatDetails = { ...movieSeatDetails };
    for (let key in movieSeatDetails) {
      movieSeatDetails[key].forEach((seatValue, seatIndex) => {
        if (seatValue === 2) {
          movieSeatDetails[key][seatIndex] = 1;
        }
      });
    }
    return newMovieSeatDetails;
  };

  const bookThisSeat=async (row,col)=>
  {
      console.log(row,col)
      
      //replace with actual data once everything is set
      const bookingData = {
        userId: 'user1',
        movieId: 'movie1',
        theaterId: 1,
        row: 2,
        column: 5,
      };
  
      try {
        const response = await fetch('/api/booking/newBooking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });
    
        if (!response.ok) {
          throw new Error('Failed to create booking');
        }
    
        const data = await response.json();
        console.log('Booking created:', data);
      } catch (error) {
        console.error('Error creating booking:', error);
      }
  }

  const onConfirmButtonClick = async () => {

    for (const row in seatDetails) {
      for (let col = 0; col < seatDetails[row].length; col++) {
        const seatValue = seatDetails[row][col];
        // console.log(`Seat at row ${row}, column ${col}: ${seatValue}`);
          if(seatValue==2)
          {
            bookThisSeat(row,col+1);
          }
      }
    }
    
    // let movieIndex = movies.findIndex(mov => mov.id === parseInt(movieId));
    let movieIndex = 1;
    // if (movieIndex !== -1 && setMovies) {
    if (movieIndex !== -1) {
      //   movies[movieIndex].seats = modifiedSeatValue();
      //   console.log(movies);
      //   setMovies(movies);
      router.push('/');
    }
  };

  const RenderConfirmButton = () => {
    return (
      <div className={styles.paymentButtonContainer}>
        <Button
          variant="contained"
          disabled={isTimerCompleted}
          className={styles.paymentButton}
          onClick={onConfirmButtonClick}>
          {isTimerCompleted ? 'Confirm Booking' : `Confirm Booking (${seconds})`}
        </Button>
      </div>
    );
  };

  const RenderCard = () => {
    
    let selectedSeats = computeSelectedSeats();
    // let selectedSeats = 10;

    // if (!movie) return <div>loading...</div>;
    return (
      <div className={styles.card}>
        <div className={styles.cardTitleContainer}>
          {/* <Link
            // href={{
            //   pathname: `/seats/${movie?.id}`,
            //   query: { seats: isTimerCompleted ? null : JSON.stringify(seatDetails) }
            // }}
            href="/seats">
            <ArrowBackIcon />
          </Link> */}
          <div className={styles.cardTitle}>BOOKING SUMMARY</div>
        </div>
        {/* <p className={styles.movieName}>{movie.name}</p> */}
        <p className={styles.movieName}>{movieId}</p>
        {/*<RenderSeatDetails selectedSeats={selectedSeats} />*/}
        <RenderBookingCharge selectedSeats={selectedSeats} />
        <hr className={styles.hrStyle} />
        <RenderTotalCharge selectedSeats={selectedSeats} />
        <RenderConfirmButton />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Payment Page</title>
      </Head>
      <div className={styles.container}>
        <RenderCard />
      </div>
    </>
  );
};

export default Tickets;
