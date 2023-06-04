import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);z

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Flight Schedule</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.airline} - {flight.origin} to {flight.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;