import { GET_POKEMONS, ADD_FAVOURITE_POKEMON, DETAIL_POKEMON } from "./types";

export const getPokemon = (pokemons) => {
  return {
    type: GET_POKEMONS,
    payload: pokemons,
  };
};

export const getPokemonAsync = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getPokemon(data.cards));
      })
      .catch(console.log);
  };
};

export const addFavouritePokemon = (pokemon) => {
  return {
    type: ADD_FAVOURITE_POKEMON,
    payload: pokemon,
  };
};

export const detailPokemon = (pokemon) => {
  return {
    type: DETAIL_POKEMON,
    payload: pokemon,
  };
};
