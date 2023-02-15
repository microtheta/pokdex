import React from 'react'
import { Container, Grid, Header, Card } from 'semantic-ui-react'
import SearchBar from '@/components/SearchBar/SearchBar';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import RecentViewCard from '@/components/PokemonCard/RecentViewCard';
import Placeholder from '@/components/Placeholder/Placeholder';
import Loading from '@/components/PokemonCard/LoadingCard';
import PokemonDetailsModal from '@/components/PokemonDetailsModal/PokemonDetailsModal';

const ThemingLayout = () => (
  <Container style={{ marginTop: '2em' }}>
    <Header as='h1' dividing>Pokédex</Header>

    <Grid centered columns={15}>
      <Grid.Column mobile={15} tablet={15} computer={15}>
        <SearchBar placeholder='Search for your favorite pokémon... ' />
      </Grid.Column>
    </Grid>

    <Grid centered columns={15}>
      <Grid.Column mobile={15} tablet={15} computer={15}>
        <Placeholder.Welcome />
      </Grid.Column>
    </Grid>
    
    <Grid centered columns={15}>
      <Grid.Column mobile={15} tablet={15} computer={15}>
        <Placeholder.Notfound />
      </Grid.Column>
    </Grid>

    <Grid centered columns={15}>
    <Grid.Column mobile={15} tablet={5} computer={5}>
        <Loading />
      </Grid.Column>
    </Grid>

    <Grid centered columns={15} >
      <Grid.Column mobile={15} tablet={5} computer={5}>
        <PokemonCard />
      </Grid.Column>
      <Grid.Column mobile={15} tablet={5} computer={5}>
        <PokemonCard />
      </Grid.Column>
      <Grid.Column mobile={15} tablet={5} computer={5}>
        <PokemonCard />
      </Grid.Column>
    </Grid>

    <Grid centered columns={15}>
      <Grid.Column mobile={15} tablet={15} computer={15}>
        <Header as='h3' >Recently viewed</Header>
        <Card.Group doubling itemsPerRow={6}>
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

export default ThemingLayout