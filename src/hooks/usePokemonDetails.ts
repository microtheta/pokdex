
import pokemonService from '@/services/pokemon.service';

import {
  useQuery,
} from 'react-query';

/**
 * Custom hook fetches the pokemon details and caches it locally using useQuery
 * @param name Name of the pokemon to get details
 * @returns query of QueryResult type i.e. {isLoading, isError, data} 
 */

export default function usePokemonDetails(name: string) {

  const query = useQuery(['pokemonDetails', name], async () => {
    const data = await pokemonService.fetchPokemonByName(name);
    return data.data;
  }, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return query
}