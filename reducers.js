// actions.js

// Aksi untuk melakukan pencarian jadwal pesawat
export const searchFlights = (origin, destination, date) => {
    return {
      type: 'SEARCH_FLIGHTS',
      payload: {
        origin,
        destination,
        date
      }
    };
  };
  
  // Aksi untuk menyimpan hasil pencarian jadwal pesawat
  export const searchFlightsSuccess = flights => {
    return {
      type: 'SEARCH_FLIGHTS_SUCCESS',
      payload: flights
    };
  };
  
  // Aksi untuk menampilkan pesan kesalahan saat pencarian gagal
  export const searchFlightsFailure = error => {
    return {
      type: 'SEARCH_FLIGHTS_FAILURE',
      payload: error
    };
  };  