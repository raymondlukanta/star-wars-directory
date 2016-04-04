import { CALL_API } from '../middlewares/api';
import { Schemas } from 'utils/schemas';

import keyMirror from 'keymirror';

export const VehiclesActionTypes = keyMirror({
  READ_VEHICLES_REQUEST: null, READ_VEHICLES_SUCCESS: null, READ_VEHICLES_FAILURE: null, 
  READ_VEHICLE_REQUEST: null, READ_VEHICLE_SUCCESS: null, READ_VEHICLE_FAILURE: null, 
  })

function fetchReadVehiclesList(page) {
  return {
    [CALL_API]: {
      types: [ VehiclesActionTypes.READ_VEHICLES_REQUEST, VehiclesActionTypes.READ_VEHICLES_SUCCESS, VehiclesActionTypes.READ_VEHICLES_FAILURE ],
      endpoint: `vehicles/?page=${page}`,
      method: 'GET',
      schema: Schemas.VEHICLES_ARRAY
    }
  };
}

export function loadReadVehiclesList(page) {
  return (dispatch, getState) => {
    return dispatch(fetchReadVehiclesList(page));
  };
}

function fetchReadVehicle(vehicleId) {
  return {
    [CALL_API]: {
      types: [ VehiclesActionTypes.READ_VEHICLE_REQUEST, VehiclesActionTypes.READ_VEHICLE_SUCCESS, VehiclesActionTypes.READ_VEHICLE_FAILURE ],
      endpoint: `vehicles/${vehicleId}/`,
      method: 'GET',
      schema: Schemas.VEHICLES
    }
  };
}

export function loadReadVehicle(vehicleId) {
  return (dispatch, getState) => {
    return dispatch(fetchReadVehicle(vehicleId));
  };
}

