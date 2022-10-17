import { pokemonApi } from "../../api/pokemonApi";
import { deleteCapturedPokemon, loadingPokemons,setNewCapturedPokemon,setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(loadingPokemons());

    const { data } = await pokemonApi.get(
      `pokemon?limit=6&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};

export const capturePokemon = (pokemon)=>{
  return async (dispatch)=>{
    await dispatch(setNewCapturedPokemon({capturedPokemon:pokemon}))
    alert(`Capturaste a ${pokemon}`);
  }
}


export const deletePokemon = (pokemon)=>{
  return async (dispatch)=>{
    await dispatch(deleteCapturedPokemon(pokemon));
  }
}

