import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * RTK new query api
 * @param <Object>
 */
export const pokemonApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonById: builder.query({
      query: (id) => `/type/${id}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonByIdQuery } =
  pokemonApiSlice;
