import merge from 'lodash/object/merge'

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import pagination from './pagination'

function entities(state = {}, action) {
	if (action.response && (action.response.entities || action.meta)) {
    return merge({}, state, action.response.entities);
	}
	return state;
};

const rootReducer = combineReducers({
  routing: routeReducer,
  entities,
  pagination,
});

export default rootReducer;
