import React, { useState } from 'react';
import { Container, Grid, Header, Card } from 'semantic-ui-react';
import RecentViewCard from '@/components/PokemonCard/RecentViewCard';
import PokemonDetailsModal from '@/containers/PokemonDetailsModal/PokemonDetailsModal';
import PokemonSearch from '@/containers/PokemonSearch/PokemonSearch';
import { useRouter } from 'next/router';
import { DisplayListType } from '@/shared/pokemon.type';
import PokemonSearchResult from '@/components/PokemonSearchResult/PokemonSearchResult';

type ParamType = {
  selected?: string
}

const Pokedex = () => {

  const router = useRouter();

  const { selected } = router.query as ParamType;

  const [displayList, setDisplayList] = useState<DisplayListType>({});


  const updateParams = (selected?: string) => {
    const query: ParamType = {};
    if (selected) {
      query.selected = selected
    }
    router.push({
      pathname: '/semantic', query
    }, undefined, { shallow: true })
  }

  const handleSearchResult = (result: DisplayListType, triggerDetails: boolean) => {
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

      <PokemonSearchResult displayList={displayList} onSelect={(name?: string) => updateParams(name)} />

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

      <PokemonDetailsModal name={selected} onClose={updateParams} />

    </Container >
  )
}

export default Pokedex