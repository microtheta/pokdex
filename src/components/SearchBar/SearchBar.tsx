import React, { useRef, useState } from 'react'
import { Search, Grid, SearchResultData, SearchProps } from 'semantic-ui-react'
import styles from './SearchBar.module.scss';

type SearchResultType = {
  title: string
}

type SearchBarProps = {
  loading?: boolean,
  value?: string,
  onSearchChange?: (event: React.MouseEvent, data: SearchProps) => void,
  results?: SearchResultType[],
  onResultSelect?: (event: React.MouseEvent, data: SearchResultData) => void,
  placeholder?: string,
  onSearch: (event: React.KeyboardEvent | React.MouseEvent, results: SearchResultType[]) => void
}

export default function SearchBar({
  loading = false,
  value = '',
  onSearchChange = () => { return },
  results = [],
  onResultSelect = () => { return },
  placeholder = "",
  onSearch = () => { }
}: SearchBarProps) {

  const searchRef = useRef<any>();

  return (<Grid>
    <Grid.Column width={16}>
      <Search
        role="search-bar-input"
        test-id="search-bar"
        ref={searchRef}
        className={styles.searchBar}
        fluid
        size='big'
        loading={loading}
        onSearchChange={onSearchChange}
        onResultSelect={onResultSelect}
        results={results}
        value={value}
        placeholder={placeholder}
        showNoResults={!loading}
        /* onBlur={(event) => { //TODO: trigger search on blur??
          onSearch(event, results)
        }} */
        input={{
          onKeyPress: (event: React.KeyboardEvent) => {
            if (event.key === 'Enter' && searchRef.current) {
              onSearch(event, results)
              searchRef.current.close()
            }
          }
        }}
      />
    </Grid.Column>
  </Grid>)
}