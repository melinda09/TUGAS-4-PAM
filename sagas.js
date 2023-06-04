// sagas.js

import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Worker Saga untuk melakukan pencarian jadwal pesawat
function* searchFlightsSaga(action) {
  try {
    const { origin, destination, date } = action.payload;
    const response = yield call(axios.get, `https://api.example.com/flights?origin=${origin}&destination=${destination}&date=${date}`);
    yield put(searchFlightsSuccess(response.data));
  } catch (error) {
    yield put(searchFlightsFailure(error.message));
  }
}

// Watcher Saga untuk memantau aksi SEARCH_FLIGHTS
export function* watchSearchFlights() {
  yield takeLatest('SEARCH_FLIGHTS', searchFlightsSaga);
}