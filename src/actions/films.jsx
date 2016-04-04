import { CALL_API } from '../middlewares/api';
import { Schemas } from 'utils/schemas';

import keyMirror from 'keymirror';

export const FilmsActionTypes = keyMirror({
  READ_FILMS_REQUEST: null, READ_FILMS_SUCCESS: null, READ_FILMS_FAILURE: null, 
  READ_FILM_REQUEST: null, READ_FILM_SUCCESS: null, READ_FILM_FAILURE: null, 
  })

function fetchReadFilmsList(page) {
  return {
    [CALL_API]: {
      types: [ FilmsActionTypes.READ_FILMS_REQUEST, FilmsActionTypes.READ_FILMS_SUCCESS, FilmsActionTypes.READ_FILMS_FAILURE ],
      endpoint: `films/?page=${page}`,
      method: 'GET',
      schema: Schemas.FILMS_ARRAY
    }
  };
}

export function loadReadFilmsList(page) {
  return (dispatch, getState) => {
    return dispatch(fetchReadFilmsList(page));
  };
}

function fetchReadFilm(filmId) {
  return {
    [CALL_API]: {
      types: [ FilmsActionTypes.READ_FILM_REQUEST, FilmsActionTypes.READ_FILM_SUCCESS, FilmsActionTypes.READ_FILM_FAILURE ],
      endpoint: `films/${filmId}/`,
      method: 'GET',
      schema: Schemas.FILMS
    }
  };
}

export function loadReadFilm(filmId) {
  return (dispatch, getState) => {
    return dispatch(fetchReadFilm(filmId));
  };
}

