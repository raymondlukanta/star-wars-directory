import { CALL_API } from '../middlewares/api';
import { Schemas } from 'utils/schemas';

import keyMirror from 'keymirror';

export const StarshipsActionTypes = keyMirror({
  READ_STARSHIPS_REQUEST: null, READ_STARSHIPS_SUCCESS: null, READ_STARSHIPS_FAILURE: null, 
  READ_STARSHIP_REQUEST: null, READ_STARSHIP_SUCCESS: null, READ_STARSHIP_FAILURE: null, 
  })

function fetchReadStarshipsList(page) {
  return {
    [CALL_API]: {
      types: [ StarshipsActionTypes.READ_STARSHIPS_REQUEST, StarshipsActionTypes.READ_STARSHIPS_SUCCESS, StarshipsActionTypes.READ_STARSHIPS_FAILURE ],
      endpoint: `starships/?page=${page}`,
      method: 'GET',
      schema: Schemas.STARSHIPS_ARRAY
    }
  };
}

export function loadReadStarshipsList(page) {
  return (dispatch, getState) => {
    return dispatch(fetchReadStarshipsList(page));
  };
}

function fetchReadStarship(starshipId) {
  return {
    [CALL_API]: {
      types: [ StarshipsActionTypes.READ_STARSHIP_REQUEST, StarshipsActionTypes.READ_STARSHIP_SUCCESS, StarshipsActionTypes.READ_STARSHIP_FAILURE ],
      endpoint: `starships/${starshipId}/`,
      method: 'GET',
      schema: Schemas.STARSHIPS
    }
  };
}

export function loadReadStarship(starshipId) {
  return (dispatch, getState) => {
    return dispatch(fetchReadStarship(starshipId));
  };
}

