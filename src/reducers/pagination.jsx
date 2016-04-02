import { PeopleActionTypes } from '../actions/people'

export default function pagination(state = {companies_paging:{ids: []}}, action) {
  switch (action.type) {
    case PeopleActionTypes.READ_PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        people_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    default:
      return state
  }
}

