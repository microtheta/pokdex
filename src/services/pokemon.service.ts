import axios, { AxiosResponse } from "axios";
import { ListType, PokemonDetails } from "../shared/pokemon.type";

const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI || 'https://pokeapi.co/api/v2';

/**  
 * @returns promise that resolves to a list of all pokemon
 */
const fetchPokemonList: () => Promise<AxiosResponse<ListType>> = async () => {
  return axios.get(`${BASE_URI}/pokemon/?limit=1500`)
}


/**  
 * @param name Name of the pokemon to get its details
 * @returns promise that resolves to a given pokemon details
 */
const fetchPokemonByName: (name: string) => Promise<AxiosResponse<PokemonDetails>> = (name: string) => {
  return axios.get(`${BASE_URI}/pokemon/${name}/`)
}

const methods = {
  fetchPokemonList,
  fetchPokemonByName
}

export default methods;