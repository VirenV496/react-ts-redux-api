import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from '../actions/usertype'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  const reducer = (state = initialState, action:any) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer




  /* 
interface DefaultStateI {
  loading: boolean,
  pokemon?: PokemonType
}

const defaultState: DefaultStateI = {
  loading: false
};

const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes) : DefaultStateI => { */
/*     interface DefaultStateI {
      
        loading: boolean,
        users: [],
        error: ''
      }


const reducer = (state:  DefaultStateI = defaultState) */