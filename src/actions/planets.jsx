import { CALL_API } from '../middlewares/api';
import { Schemas } from 'utils/schemas';

import keyMirror from 'keymirror';

export const PlanetsActionTypes = keyMirror({
  READ_PLANETS_REQUEST: null, READ_PLANETS_SUCCESS: null, READ_PLANETS_FAILURE: null, 
  READ_PLANET_REQUEST: null, READ_PLANET_SUCCESS: null, READ_PLANET_FAILURE: null, 
  })

function fetchReadPlanetsList(page) {
  return {
    [CALL_API]: {
      types: [ PlanetsActionTypes.READ_PLANETS_REQUEST, PlanetsActionTypes.READ_PLANETS_SUCCESS, PlanetsActionTypes.READ_PLANETS_FAILURE ],
      endpoint: `planets/?page=${page}`,
      method: 'GET',
      schema: Schemas.PLANETS_ARRAY
    }
  };
}

export function loadReadPlanetsList(page) {
  return (dispatch, getState) => {
    return dispatch(fetchReadPlanetsList(page));
  };
}

function fetchReadPlanet(planetId) {
  return {
    [CALL_API]: {
      types: [ PlanetsActionTypes.READ_PLANET_REQUEST, PlanetsActionTypes.READ_PLANET_SUCCESS, PlanetsActionTypes.READ_PLANET_FAILURE ],
      endpoint: `planets/${planetId}/`,
      method: 'GET',
      schema: Schemas.PLANETS
    }
  };
}

export function loadReadPlanet(planetId) {
  return (dispatch, getState) => {
    return dispatch(fetchReadPlanet(planetId));
  };
}

