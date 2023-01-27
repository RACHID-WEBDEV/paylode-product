import { all } from 'redux-saga/effects';
import { moviesSagas } from './movieSagas';
import { searchMoviesSagas } from './searchMovieSagas';

export default function* rootSaga() {
  yield all([...moviesSagas, ...searchMoviesSagas]);
}
