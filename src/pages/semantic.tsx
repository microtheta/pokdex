import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Card, Divider } from 'semantic-ui-react';
import PokemonRecentCard from '@/containers/PokemonRecentCard/PokemonRecentCard';
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


  const [recentViewed, setRecentViewed] = useState<string[]>([])

  useEffect(() => {
    const localList = localStorage.getItem('recentViewList') || '[]';
    setRecentViewed(JSON.parse(localList))
  }, [])

  const updateRecentView = (name: string) => {
    const updatedList = [...recentViewed];
    const existingIndex = recentViewed.indexOf(name);
    if (existingIndex > -1) {
      updatedList.splice(existingIndex, 1)
    }
    updatedList.unshift(name);
    const viewList = updatedList.splice(0, 8);
    setRecentViewed(viewList);
    localStorage.setItem('recentViewList', JSON.stringify(viewList))
  }


  const updateParams = (selected?: string) => {
    const query: ParamType = {};
    if (selected) {
      query.selected = selected;
      updateRecentView(selected)
    }
    router.push({
      pathname: '/semantic', query
    }, undefined, { shallow: true })
  }

  const handleSearchResult = (result: DisplayListType, triggerDetails: boolean) => {
    setDisplayList(result);
    updateParams(triggerDetails ? result?.list && result?.list[0]?.title : '')
  }

  const handleSelect = (name?: string) => {
    updateParams(name);
  }

  return (
    <Container style={{ marginTop: '2em' }}>
      <Header as='h1' dividing>Pokédex</Header>

      <Grid centered columns={15}>
        <Grid.Column mobile={15} tablet={15} computer={15}>
          <PokemonSearch onSearch={handleSearchResult} />
        </Grid.Column>
      </Grid>

      <PokemonSearchResult displayList={displayList} onSelect={handleSelect} />
      <Divider hidden />
      <Divider hidden />
      {recentViewed.length > 0 &&
        <Grid centered columns={15}>
          <Grid.Column mobile={15} tablet={15} computer={15}>
            <Header as='h3'>Recently viewed</Header>
            <Card.Group doubling itemsPerRow={8}>
              {
                recentViewed.map(item => <PokemonRecentCard key={item} name={item} onSelect={handleSelect} />)
              }
            </Card.Group>
          </Grid.Column>
        </Grid>
      }

      <PokemonDetailsModal name={selected} onClose={updateParams} />

    </Container>
  )
}

export default Pokedex