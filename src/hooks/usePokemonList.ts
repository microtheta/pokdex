
import pokemonService from '@/services/pokemon.service';

import {
  useQuery,
} from 'react-query';

/**
 *
 * Custom hook to get list of all pokemon using useQuery
 * @returns QueryResult type i.e. {isLoading, isError, data} 
 */

export default function usePokemonList() {

  const query = useQuery('pokemonList', async () => {
    const data = await pokemonService.fetchPokemonList();
    return data.data.results.map((item) => ({ title: item.name }));
  }, {
    refetchOnWindowFocus: false,
  })

  return query
}