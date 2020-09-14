import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonAsync } from "../store/actions/PokemonActions";
import PokemonList from "../components/PokemonList";

function Energy() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonAsync("https://api.pokemontcg.io/v1/cards"));
  }, []);

  const pokemons = useSelector((state) => state.fetchPokemon.pokemons);

  return (
    <>
      <PokemonList pokemons={pokemons} type={"energy"} />
    </>
  );
}

export default Energy;
