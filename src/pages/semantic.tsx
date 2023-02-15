import React, { useState } from 'react'
import { Container, Grid, Header, Card } from 'semantic-ui-react'

import PokemonDetails from '@/containers/PokemonDetails/PokemonDetails';
import RecentViewCard from '@/components/PokemonCard/RecentViewCard';
import Placeholder from '@/components/Placeholder/Placeholder';
import PokemonDetailsModal from '@/components/PokemonDetailsModal/PokemonDetailsModal';
import PokemonSearch from '@/containers/PokemonSearch/PokemonSearch';

import { useRouter } from 'next/router'

type ResultItem = {
  title: string
}

type displayList = {
  list?: ResultItem[],
  query?: string,
}

type ParamType = {
  selected?: string
}

const Pokedex = () => {

  const router = useRouter();

  const { selected } = router.query as ParamType;

  const [displayList, setDisplayList] = useState<displayList>({});


  const updateParams = (selected?: string) => {
    const query: ParamType = {};
    if (selected) {
      query.selected = selected
    }
    router.push({
      pathname: '/semantic', query
    }, undefined, { shallow: true })
  }

  const handleSearchResult = (result: displayList, triggerDetails: boolean) => {
    setDisplayList(result);
    updateParams(triggerDetails ? result?.list && result?.list[0]?.title : '')
  }

  return (
    <Container style={{ marginTop: '2em' }}>
      <Header as='h1' dividing>Pokédex</Header>

      <Grid centered columns={15}>
        <Grid.Column mobile={15} tablet={15} computer={15}>
          <PokemonSearch onSearch={handleSearchResult} />
        </Grid.Column>
      </Grid>

      {!displayList.query &&
        <Grid centered columns={15}>
          <Grid.Column mobile={15} tablet={15} computer={15}>
            <Placeholder.Welcome />
          </Grid.Column>
        </Grid>
      }

      {displayList.query && displayList.list && displayList.list.length < 1 &&
        <Grid centered columns={15}>
          <Grid.Column mobile={15} tablet={15} computer={15}>
            <Placeholder.Notfound />
          </Grid.Column>
        </Grid>
      }

      {displayList.query && displayList.list && displayList.list.length > 0 &&
        <Grid centered columns={15}>
          {displayList.list.map(item => (
            <Grid.Column key={item.title} mobile={15} tablet={5} computer={5}>
              <PokemonDetails name={item.title} />
            </Grid.Column>
          ))
          }
        </Grid>
      }

      <Grid centered columns={15}>
        <Grid.Column mobile={15} tablet={15} computer={15}>
          <Header as='h3' >Recently viewed</Header>
          <Card.Group doubling itemsPerRow={8}>
            <RecentViewCard />
            <RecentViewCard />
            <RecentViewCard />
            <RecentViewCard />
            <RecentViewCard />
            <RecentViewCard />
            <RecentViewCard />
            <RecentViewCard />
          </Card.Group>
        </Grid.Column>
      </Grid>

      <PokemonDetailsModal />


    </Container >
  )
}

export default Pokedex