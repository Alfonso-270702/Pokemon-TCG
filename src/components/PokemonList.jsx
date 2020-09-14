import React from "react";
import PokemonCard from "./PokemonCard";
import { Row } from "react-bootstrap";

function PokemonList(props) {
  const { pokemons, type } = props;
  return (
    <Row className="mt-4">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} type={type} />
      ))}
    </Row>
  );
}

export default PokemonList;
