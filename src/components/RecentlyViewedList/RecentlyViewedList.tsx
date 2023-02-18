import { Grid, Header, Card } from 'semantic-ui-react';
import PokemonRecentCard from '@/containers/PokemonRecentCard/PokemonRecentCard';

export default function RecentlyViewedList({ recentViewed, handleSelect }: { recentViewed: string[], handleSelect: Function }) {
  if (recentViewed.length < 1) {
    return null
  }
  return (
    <Grid centered columns={15}>
      <Grid.Column mobile={15} tablet={15} computer={15}>
        <Header as='h3'>Recently viewed</Header>
        <Card.Group doubling itemsPerRow={8}>
          {
            recentViewed.map(item => <PokemonRecentCard key={item} name={item} onSelect={handleSelect} />)
          }
        </Card.Group>
      </Grid.Column>
    </Grid>)
}
