import usePokemonDetails from "@/hooks/usePokemonDetails";
import LoadingCard from '@/components/PokemonCard/LoadingCard';
import PokemonCard from '@/components/PokemonCard/PokemonCard';

export default function PokemonDetails({name, onSelect}: {name:string, onSelect: Function}) {
  const {isLoading, data} = usePokemonDetails(name);

  if(isLoading) {
    return <LoadingCard />
  }
  return <PokemonCard data={data} onClick={() => onSelect(name)} />
}