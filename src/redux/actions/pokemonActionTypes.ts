import { Interface } from "readline";

export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";

interface PokemonLoading {
    type: typeof POKEMON_LOADING;
}