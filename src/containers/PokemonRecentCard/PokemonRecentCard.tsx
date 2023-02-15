import usePokemonDetails from "@/hooks/usePokemonDetails";
import RecentViewCard from "@/components/PokemonCard/RecentViewCard";

export default function PokemonRecentCard({name, onSelect}: {name:string, onSelect: Function}) {
  const {isLoading, data} = usePokemonDetails(name);

  if(isLoading) {
    return null
  }
  return <RecentViewCard data={data} onSelect={onSelect}/>
}