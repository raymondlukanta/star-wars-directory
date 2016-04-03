import { CALL_API } from '../middlewares/api';
import { Schemas } from 'utils/schemas';

import keyMirror from 'keymirror';

export const SpeciesActionTypes = keyMirror({
  READ_SPECIES_LIST_REQUEST: null, READ_SPECIES_LIST_SUCCESS: null, READ_SPECIES_LIST_FAILURE: null, 
  READ_SPECIES_REQUEST: null, READ_SPECIES_SUCCESS: null, READ_SPECIES_FAILURE: null, 
  })

function fetchReadSpeciesList(page) {
  return {
    [CALL_API]: {
      types: [ SpeciesActionTypes.READ_SPECIES_LIST_REQUEST, SpeciesActionTypes.READ_SPECIES_LIST_SUCCESS, SpeciesActionTypes.READ_SPECIES_LIST_FAILURE ],
      endpoint: `species/?page=${page}`,
      method: 'GET',
      schema: Schemas.SPECIES_ARRAY
    }
  };
}

export function loadReadSpeciesList(page) {
  return (dispatch, getState) => {
    return dispatch(fetchReadSpeciesList(page));
  };
}

function fetchReadSpecies(speciesId) {
  return {
    [CALL_API]: {
      types: [ SpeciesActionTypes.READ_SPECIES_REQUEST, SpeciesActionTypes.READ_SPECIES_SUCCESS, SpeciesActionTypes.READ_SPECIES_FAILURE ],
      endpoint: `species/${speciesId}/`,
      method: 'GET',
      schema: Schemas.SPECIES
    }
  };
}

export function loadReadSpecie(speciesId) {
  return (dispatch, getState) => {
    return dispatch(fetchReadSpecies(speciesId));
  };
}
