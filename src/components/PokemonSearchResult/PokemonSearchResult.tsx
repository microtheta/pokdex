import { Grid } from 'semantic-ui-react';
import { DisplayListType } from '@/shared/pokemon.type';
import Placeholder from '@/components/Placeholder/Placeholder';
import PokemonDetails from '@/containers/PokemonDetailsCard/PokemonDetailsCard';
import { ReactElement } from 'react';

export default function PokemonSearchResult({
  displayList,
  onSelect
}: { displayList: DisplayListType, onSelect: Function }) {
  let component: ReactElement | undefined = undefined;

  if (!displayList.query) {
    component = (
      <Grid.Column mobile={15} tablet={15} computer={15}>
        <Placeholder.Welcome />
      </Grid.Column>
    )
  }


  if (displayList.query && displayList.list && displayList.list.length < 1) {
    component = (
      <Grid.Column mobile={15} tablet={15} computer={15}>
        <Placeholder.Notfound />
      </Grid.Column>
    )
  }

  if (displayList.query && displayList.list && displayList.list.length > 0) {
    component = (
      <>{
        displayList.list.map(item => (
          <Grid.Column key={item.title} mobile={15} tablet={5} computer={5}>
            <PokemonDetails name={item.title} onSelect={onSelect} />
          </Grid.Column>
        ))}
      </>
    )
  }

  return (<Grid centered columns={15}> {component} </Grid>)
}