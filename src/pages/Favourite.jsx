import React from "react";
import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";

function FavouritePage() {
  const pokemons = useSelector((state) => state.favouritePokemon.fav);
  return (
    <>
      <PokemonList pokemons={pokemons} type={"fav"} />
    </>
  );
}

export default FavouritePage;
