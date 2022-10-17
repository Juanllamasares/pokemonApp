import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (id)=>({
        url: `pokemon/${id}`
      })
    })
  })
})

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokeApi;