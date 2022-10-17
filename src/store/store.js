import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { pokeApi } from "./pokemonsRTK/pokeApi";
import pokemonSlice from "./pokemonsWithSlice/pokemonSlice";


export const store = configureStore({
    reducer : {
        auth: authSlice,
        pokemons : pokemonSlice,
        [pokeApi.reducerPath] : pokeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeApi.middleware),

})