import React, { useState } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import styles from './SearchBar.module.scss';

const source = [{
  title: "faker.company.companyName()",
}]

export default function SearchBar({
  placeholder=""
}: {
  placeholder?: string
}) {

  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [results, setResults] = useState<any>([]);

  const handleResultSelect = (e: any, { result }: { result: { title: string } }) => {
    setValue(result.title)
  }

  const handleSearchChange = (e: any, { value: currentVal }: any) => {
    setIsLoading(true);
    setValue(currentVal);

    setTimeout(() => {
      if (value.length < 1) {
        setIsLoading(false);
        setResults([]);
        return
      }
      setIsLoading(false);
      setResults(() => source.filter((s) => s.title.includes(value)));
    }, 300)
  }

  return (<Grid>
    <Grid.Column width={16}>
      <Search
        className={styles.searchBar}
        fluid
        size='big'
        loading={isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
        placeholder={placeholder}
      />
    </Grid.Column>
    {/* <Grid.Column width={10}>
      <Segment>
        <Header>State</Header>
        <pre style={{ overflowX: 'auto' }}>
          {JSON.stringify({ isLoading, value, results }, null, 2)}
        </pre>
        <Header>Options</Header>
        <pre style={{ overflowX: 'auto' }}>
          {JSON.stringify(source, null, 2)}
        </pre>
      </Segment>
    </Grid.Column> */}
  </Grid>)
}