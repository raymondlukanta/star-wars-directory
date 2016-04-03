import { PeopleActionTypes } from '../actions/people'
import { FilmsActionTypes } from '../actions/films'
import { PlanetsActionTypes } from '../actions/Planets'
import { SpeciesActionTypes } from '../actions/Species'
import { StarshipsActionTypes } from '../actions/Starships'
import { VehiclesActionTypes } from '../actions/Vehicles'

export default function pagination(state = {companies_paging:{ids: []}}, action) {
  switch (action.type) {
    case PeopleActionTypes.READ_PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        people_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case FilmsActionTypes.READ_FILMS_SUCCESS:
      return Object.assign({}, state, {
        people_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case PlanetsActionTypes.READ_PLANETS_SUCCESS:
      return Object.assign({}, state, {
        people_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case SpeciesActionTypes.READ_SPECIES_LIST_SUCCESS:
      return Object.assign({}, state, {
        people_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case StarshipsActionTypes.READ_STARSHIPS_SUCCESS:
      return Object.assign({}, state, {
        people_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case VehiclesActionTypes.READ_VEHICLES_SUCCESS:
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

