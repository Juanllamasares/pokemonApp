import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  isLoading: false,
  pokemons: [],
  capturedPokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, { payload }) => {
      state.pokemons = payload.pokemons;
      state.page = payload.page;
      state.isLoading = false;
    },
    setCapturedPokemons:(state,{payload})=>{
      state.capturedPokemons = payload
    },
    setNewCapturedPokemon:(state,{payload})=>{
      state.capturedPokemons.push(payload.capturedPokemon);
    },
    deleteCapturedPokemon:(state,{payload})=>{
      state.capturedPokemons = state.capturedPokemons.filter(poke=>poke!==payload)
    }
  },
});

export const {
  loadingPokemons,
  setPokemons,
  setNewCapturedPokemon,
  deleteCapturedPokemon,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
