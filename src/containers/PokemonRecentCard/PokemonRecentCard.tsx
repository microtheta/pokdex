import usePokemonDetails from "@/hooks/usePokemonDetails";
import RecentViewCard from "@/components/PokemonCard/RecentViewCard";
import { Header } from "semantic-ui-react";

export default function PokemonRecentCard({name, onSelect}: {name:string, onSelect: Function}) {
  const {isLoading, data, isError} = usePokemonDetails(name);

  if(isLoading) {
    return null
  }
  if(isError) {
    return <Header as='h4'>Unable to fetch data.</Header>
  }
  return <RecentViewCard data={data} onSelect={onSelect}/>
}