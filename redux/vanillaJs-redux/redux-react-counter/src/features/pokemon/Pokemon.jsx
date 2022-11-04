import React, { useState } from 'react';
import {
  useGetPokemonByIdQuery,
  useGetPokemonByNameQuery,
} from './pokemon-api';

export default function Pokemon() {
  const [name, setName] = useState('ditto');
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  const { data: pokemonById, err, loading } = useGetPokemonByIdQuery(2);
  console.log(pokemonById);

  return (
    <div>
      <h1>Pokemon</h1>
      <input
        type="text"
        name={name}
        onChange={(e) => setName(e.target.value)}
      />
      {isLoading ? <div>Loading...</div> : data.name}
    </div>
  );
}
