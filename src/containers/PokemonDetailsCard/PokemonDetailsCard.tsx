import usePokemonDetails from "@/hooks/usePokemonDetails";
import LoadingCard from '@/components/PokemonCard/LoadingCard';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { Header } from "semantic-ui-react";

export default function PokemonDetails({ name, onSelect }: { name: string, onSelect: Function }) {
  const { isLoading, data, isError } = usePokemonDetails(name);

  if (isLoading) {
    return <LoadingCard />
  }
  if(isError) {
    return <Header as='h4'>Error in fetching data.</Header>
  }
  return <PokemonCard data={data} onClick={() => onSelect(name)} />
}