// actions.js

// Aksi untuk melakukan pencarian jadwal pesawat
export const searchFlight = (origin, destination, date) => {
    return async (dispatch) => {
      try {
        // Mengirim permintaan HTTP ke API untuk melakukan pencarian
        const response = await fetch(`https://api.example.com/flights?origin=${origin}&destination=${destination}&date=${date}`);
        const data = await response.json();
  
        // Jika data berhasil diterima, kirim aksi berhasil dengan data hasil pencarian
        dispatch({
          type: 'SEARCH_FLIGHT_SUCCESS',
          payload: data,
        });
      } catch (error) {
        // Jika terjadi error, kirim aksi gagal dengan pesan error
        dispatch({
          type: 'SEARCH_FLIGHT_FAILURE',
          payload: error.message,
        });
      }
    };
  };
  
  // Aksi untuk menambahkan jadwal pesawat
  export const addFlight = (flightData) => {
    return async (dispatch) => {
      try {
        // Mengirim permintaan HTTP ke API untuk menambahkan jadwal pesawat
        const response = await fetch('https://api.example.com/flights', {
          method: 'POST',
          body: JSON.stringify(flightData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
  
        // Jika data berhasil ditambahkan, kirim aksi berhasil dengan data jadwal pesawat baru
        dispatch({
          type: 'ADD_FLIGHT_SUCCESS',
          payload: data,
        });
      } catch (error) {
        // Jika terjadi error, kirim aksi gagal dengan pesan error
        dispatch({
          type: 'ADD_FLIGHT_FAILURE',
          payload: error.message,
        });
      }
    };
  };
  
  // Aksi untuk menghapus jadwal pesawat
  export const deleteFlight = (flightId) => {
    return async (dispatch) => {
      try {
        // Mengirim permintaan HTTP ke API untuk menghapus jadwal pesawat
        await fetch(`https://api.example.com/flights/${flightId}`, {
          method: 'DELETE',
        });
  
        // Jika penghapusan berhasil, kirim aksi berhasil dengan ID jadwal pesawat yang dihapus
        dispatch({
          type: 'DELETE_FLIGHT_SUCCESS',
          payload: flightId,
        });
      } catch (error) {
        // Jika terjadi error, kirim aksi gagal dengan pesan error
        dispatch({
          type: 'DELETE_FLIGHT_FAILURE',
          payload: error.message,
        });
      }
    };
  };
  
  // Aksi untuk mengedit jadwal pesawat
  export const editFlight = (flightId, updatedData) => {
    return async (dispatch) => {
      try {
        // Mengirim permintaan HTTP ke API untuk mengedit jadwal pesawat
        const response = await fetch(`https://api.example.com/flights/${flightId}`, {
          method: 'PUT',
          body: JSON.stringify(updatedData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
  
        // Jika pengeditan berhasil, kirim aksi berhasil dengan data jadwal pesawat yang diperbarui
        dispatch({
          type: 'EDIT_FLIGHT_SUCCESS',
          payload: data,
        });
      } catch (error) {
        // Jika terjadi error, kirim aksi gagal dengan pesan error
        dispatch({
          type: 'EDIT_FLIGHT_FAILURE',
          payload: error.message,
        });
      }
    };
  };
  