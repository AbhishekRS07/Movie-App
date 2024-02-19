import React, { useState, useEffect } from 'react';

const MovieSeatBooking = ({selectedSeats,setSelectedSeats}) => {
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(10); // Default ticket price, change as needed

  useEffect(() => {
    populateUI();
  }, []); // Empty dependency array to run only once on component mount

  useEffect(() => {
    updateSelectedCount();
  }, [selectedSeats, ticketPrice]); // Run whenever selectedSeats or ticketPrice change

  // Save selected movie index and price
  const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  };

  // Update total and count
  const updateSelectedCount = () => {
    const selectedSeatsCount = selectedSeats.length;
    const totalCount = selectedSeatsCount * ticketPrice;

    document.getElementById('count').innerText = selectedSeatsCount;
    document.getElementById('total').innerText = totalCount;
  };

  // Get data from local storage and populate UI
  const populateUI = () => {
    const selectedSeatsFromLocalStorage = JSON.parse(localStorage.getItem('selectedSeats'));
    const selectedMovieIndexFromLocalStorage = localStorage.getItem('selectedMovieIndex');

    if (selectedSeatsFromLocalStorage) {
      setSelectedSeats(selectedSeatsFromLocalStorage);
    }

    if (selectedMovieIndexFromLocalStorage) {
      setSelectedMovieIndex(selectedMovieIndexFromLocalStorage);
    }
  };

  // Movie select event
  const handleMovieSelectChange = (e) => {
    setTicketPrice(+e.target.value);
    setSelectedMovieIndex(e.target.selectedIndex);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  };

  // Seat click event
  const handleSeatClick = (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      const seatIndex = [...document.querySelectorAll('.row .seat')].indexOf(e.target);
      const updatedSelectedSeats = [...selectedSeats];
      e.target.classList.toggle('selected');

      if (updatedSelectedSeats.includes(seatIndex)) {
        updatedSelectedSeats.splice(updatedSelectedSeats.indexOf(seatIndex), 1);
      } else {
        updatedSelectedSeats.push(seatIndex);
      }

      setSelectedSeats(updatedSelectedSeats);
      localStorage.setItem('selectedSeats', JSON.stringify(updatedSelectedSeats));
    }
  };

  return (
    <div className="movie-seat-booking">
      <select id="movie" onChange={handleMovieSelectChange} value={ticketPrice}>
        <option value="10">Avengers: Endgame ($10)</option>
        <option value="12">Joker ($12)</option>
        <option value="8">Toy Story 4 ($8)</option>
        <option value="9">The Lion King ($9)</option>
      </select>

      <div className="container" onClick={handleSeatClick}>
        {/* Seat rows and seats go here based on the provided HTML */}




        <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>

      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>

      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>

    <div className="container">
      <div className="screen"></div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
      </div>
    </div>


      </div>

      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
      </p>
    </div>
  );
};

export default MovieSeatBooking;
