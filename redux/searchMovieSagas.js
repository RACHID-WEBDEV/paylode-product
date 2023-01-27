import { takeLatest, put, fork, call } from 'redux-saga/effects';
import { fetchSearchMovies, fetchMovie } from './api';
import { getSearchMovies, setSearchMovies, getSearchMovie, setSearchMovie } from './feature/searchAllMovieSlice';

function* onLoadSearchMoviesAsync({ payload }) {
  try {
    const searchMovieName = payload;
    const response = yield call(fetchSearchMovies, searchMovieName);
    if (response.status === 200) {
      yield put(setSearchMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadSearchMovieAsync({ payload }) {
  try {
    const movieId = payload;
    const response = yield call(fetchMovie, movieId);
    if (response.status === 200) {
      yield put(setSearchMovie({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadSearchMovies() {
  yield takeLatest(getSearchMovies.type, onLoadSearchMoviesAsync);
}

function* onLoadSearchMovie() {
  yield takeLatest(getSearchMovie.type, onLoadSearchMovieAsync);
}
export const searchMoviesSagas = [fork(onLoadSearchMovies), fork(onLoadSearchMovie)];
