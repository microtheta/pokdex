
import SearchBar from '@/components/SearchBar/SearchBar';
import usePokemonList from '@/hooks/usePokemonList';
import PageLoader from '@/components/PageLoader/PageLoader';
import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { ResultItem, DisplayListType } from '@/shared/pokemon.type';

type PokemonSearchProps = {
  onSearch?: (result: DisplayListType, triggerDetails: boolean) => void,
  maxResults?: number
}

export default function PokemonSearch({
  onSearch = () => { },
  maxResults = 3
}: PokemonSearchProps) {
  const { isLoading, data, isError } = usePokemonList();

  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<{ title: string }[]>([]);

  const getFilteredList = (query: string) => {
    return data?.filter((s) => s.title.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())) || []
  }

  const handleFilter = (query: string) => {

    setResults(() => {
      if (query.length < 1) {
        return []
      }
      const list = getFilteredList(query)
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
    setSearchQuery(data.result.title);
    setResults([data.result])
    onSearch({ query: data.result.title, list: [data.result] }, true)
    setTimeout(() => {
      const activeElem = document.activeElement as HTMLElement;
      activeElem?.blur()
    },0)
  }

  const handleSearch = (e: any, results: ResultItem[]) => {
    const list = getFilteredList(searchQuery)
    onSearch({ query: searchQuery, list: list.slice(0, maxResults) }, false) //list.length === 1
  }

  if (isLoading) {
    return <PageLoader />
  }

  if(isError) {
    return <div>There was an error while fetching the data.</div>
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