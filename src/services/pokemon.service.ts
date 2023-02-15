import axios, { AxiosResponse } from "axios";
import { ListType, PokemonDetails } from "../shared/pokemon.type";


const fetchPokemonList: () => Promise<AxiosResponse<ListType>> = async () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1500')
}

const fetchPokemonByName: (name: string) => Promise<AxiosResponse<PokemonDetails>> = (name: string) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
}
const methods = {
  fetchPokemonList,
  fetchPokemonByName
}

export default methods;