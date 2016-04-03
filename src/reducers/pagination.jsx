import { PeopleActionTypes } from '../actions/people'
import { FilmsActionTypes } from '../actions/films'
import { PlanetsActionTypes } from '../actions/planets'
import { SpeciesActionTypes } from '../actions/species'
import { StarshipsActionTypes } from '../actions/starships'
import { VehiclesActionTypes } from '../actions/vehicles'

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
        films_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case PlanetsActionTypes.READ_PLANETS_SUCCESS:
      return Object.assign({}, state, {
        planets_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case SpeciesActionTypes.READ_SPECIES_LIST_SUCCESS:
      return Object.assign({}, state, {
        species_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case StarshipsActionTypes.READ_STARSHIPS_SUCCESS:
      return Object.assign({}, state, {
        starships_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    case VehiclesActionTypes.READ_VEHICLES_SUCCESS:
      return Object.assign({}, state, {
        vehicles_paging:{
          ids: action.response.result,
          next_url: action.response.next
        }
      })
    default:
      return state
  }
}

