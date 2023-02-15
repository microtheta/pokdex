
import pokemonService from '@/services/pokemon.service';

import {
  useQuery,
} from 'react-query';

export default function usePokemonDetails(name:string) {
  
  const query = useQuery(`pokemonDetailsFor${name}`, async () => {
    const data = await pokemonService.fetchPokemonByName(name);
    return data.data;
  }, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return query
}