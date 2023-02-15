
import pokemonService from '@/services/pokemon.service';

import {
  useQuery,
} from 'react-query';

export default function usePokemonList() {
  
  const query = useQuery('pokemonList', async () => {
    const data = await pokemonService.fetchPokemonList();
    return data.data.results.map((item) => ({title: item.name}));
  }, {
    refetchOnWindowFocus: false,
  })

  return query
}