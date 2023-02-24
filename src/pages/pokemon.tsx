import React, { useEffect, useState } from 'react';
import { Container, Grid, Header, Card, Divider } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import PokemonDetailsModal from '@/containers/PokemonDetailsModal/PokemonDetailsModal';
import PokemonSearch from '@/containers/PokemonSearch/PokemonSearch';
import PokemonSearchResult from '@/components/PokemonSearchResult/PokemonSearchResult';

import { DisplayListType } from '@/shared/pokemon.type';
import RecentlyViewedList from '@/components/RecentlyViewedList/RecentlyViewedList';
import Head from 'next/head';

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
    //add this name on top the list and pick first 8 items
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
      pathname: '/', query
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
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokédex - Search and view information about pokemon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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

        <RecentlyViewedList recentViewed={recentViewed} handleSelect={handleSelect} />

        <PokemonDetailsModal name={selected} onClose={updateParams} />

      </Container>
    </>
  )
}

export default Pokedex