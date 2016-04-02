import { normalize } from 'normalizr';
import 'isomorphic-fetch';
import { BaseURL } from 'utils/constants';

const API_ROOT = BaseURL;

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, option, schema) {
  
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl, option)
    .then(response => {
      if (response.status === 204) {
        return { json: undefined, response: response };
      }
      return response.json().then(json => ({ json, response }));
    }).then(({ json, response }) => {
      if (!response.ok) {
          return Promise.reject(json);
      }

      if (json) {
        let resultObjects;

        if (json.results) {
          console.log("json.results")
          resultObjects = json.results;
        } else {
          console.log("NOT json.results")

          resultObjects = json;
        }
          return Object.assign({}, normalize(resultObjects, schema), {next: json.next});
      } else {
          return {};
      }
    })
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, method, body, types, meta } = callAPI;
console.log("endpoint")
  console.log(endpoint)
  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!method) {
    throw new Error('Specify one of the HTTP method.');
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType }));

  var option = generateOptions(method, body);

  return callApi(endpoint, option, schema).then(
    response => next(actionWith({
      response,
      meta,
      type: successType,
    })),
    error => next(actionWith({
      meta,
      type: failureType,
      error: error.error || 'Something bad happened'
    }))
  )
};

function generateOptions(method, body) {
  var options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Accept": "application/json; charset=UTF-8"
      }
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (body !== undefined) {
    options.body = JSON.stringify(body);
  }
  
  return options;
}
