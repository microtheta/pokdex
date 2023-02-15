
import SearchBar from '@/components/SearchBar/SearchBar';
import usePokemonList from '@/hooks/usePokemonList';
import PageLoader from '@/components/PageLoader/PageLoader';
import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';

type SearchResultType = {
  title: string
}


type displayListType = {
  list?: SearchResultType[],
  query?: string,
}

type PokemonSearchProps = {
  onSearch?: (result: displayListType, triggerDetails: boolean) => void
}

export default function PokemonSearch({
  onSearch = () => { },
}: PokemonSearchProps) {
  const { isLoading, data } = usePokemonList();

  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<{ title: string }[]>([]);

  const handleFilter = (query: string) => {
    console.log('searching for', query)
    setResults(() => {
      if (query.length < 1) {
        return []
      }
      const list = data?.filter((s) => s.title.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())) || []
      return list.slice(0, 5);
    })
    setIsSearching(false);
  }

  const searchFn = useDebounce(handleFilter)


  const handleSearchChange = (e: any, { value }: any) => {

    setIsSearching(true);
    setSearchQuery(value);
    //when search is cleared, remove results immediately else debounce searching
    if (value.length < 1) {
      handleFilter(value)
      onSearch({ query: '', list: [] }, false)
    } else {
      searchFn(value)
    }

  }


  const handleResultSelect = (e: any, data: any) => {
    console.log('resultSelect')
    setSearchQuery(data.result.title);
    console.log('display card for and open modal', [data.result])
    setResults([data.result])
    onSearch({ query: data.result.title, list: [data.result] }, true)

  }

  const handleSearch = (e: any, results: SearchResultType[]) => {

    const list = results.slice(0, 3);
    onSearch({ query: searchQuery, list }, list.length === 1)

    console.log('display search for', results.slice(0, 3))
  }

  if (isLoading) {
    return <PageLoader />
  }

  return <SearchBar
    loading={isSearching}
    value={searchQuery}
    onSearchChange={handleSearchChange}
    onResultSelect={handleResultSelect}
    onSearch={handleSearch}
    results={results}
    placeholder='Search for your favorite pokémon... ' />

}