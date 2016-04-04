import { CALL_API } from '../middlewares/api';
import { Schemas } from 'utils/schemas';

import keyMirror from 'keymirror';

export const PeopleActionTypes = keyMirror({
  READ_PEOPLE_REQUEST: null, READ_PEOPLE_SUCCESS: null, READ_PEOPLE_FAILURE: null, 
  READ_PERSON_REQUEST: null, READ_PERSON_SUCCESS: null, READ_PERSON_FAILURE: null, 
  })

function fetchReadPeopleList(page) {
  return {
    [CALL_API]: {
      types: [ PeopleActionTypes.READ_PEOPLE_REQUEST, PeopleActionTypes.READ_PEOPLE_SUCCESS, PeopleActionTypes.READ_PEOPLE_FAILURE ],
      endpoint: `people/?page=${page}`,
      method: 'GET',
      schema: Schemas.PEOPLE_ARRAY
    }
  };
}

export function loadReadPeopleList(page) {
  return (dispatch, getState) => {
    return dispatch(fetchReadPeopleList(page));
  };
}

function fetchReadPerson(personId) {
  return {
    [CALL_API]: {
      types: [ PeopleActionTypes.READ_PERSON_REQUEST, PeopleActionTypes.READ_PERSON_SUCCESS, PeopleActionTypes.READ_PERSON_FAILURE ],
      endpoint: `people/${personId}/`,
      method: 'GET',
      schema: Schemas.PEOPLE
    }
  };
}

export function loadReadPerson(personId) {
  return (dispatch, getState) => {
    return dispatch(fetchReadPerson(personId));
  };
}

