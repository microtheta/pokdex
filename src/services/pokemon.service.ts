import axios, { AxiosResponse } from "axios";

interface PokeMonItem {
  name: string,
  url: string,
}

interface ListType {
  count: number,
  results: PokeMonItem[]
}

const fetchPokemonList: () => Promise<AxiosResponse<ListType>> = async () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1500')
}

const fetchPokemonById = (id: number) => {

}
const methods = {
  fetchPokemonList,
  fetchPokemonById
}

export default methods;