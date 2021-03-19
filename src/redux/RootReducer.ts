import {combineReducers} from "redux";
import pokemonReducer from "./reducers/PokemonReducer";
import userReducer from "./reducers/usersReducer"

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  users: userReducer

});

export default RootReducer