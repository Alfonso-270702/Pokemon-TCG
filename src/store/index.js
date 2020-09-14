import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { favouritePokemon, fetchPokemon, detailPokemons } from "./reducers";

const combine = combineReducers({
  favouritePokemon,
  fetchPokemon,
  detailPokemons,
});
const store = createStore(combine, applyMiddleware(thunk));

export default store;
