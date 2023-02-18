import { PokemonDetails } from '@/shared/pokemon.type';
import { getImageSrc } from '@/utils/pokemonImage';
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import styles from './PokemonCard.module.scss';

const RecentViewCard = ({ data, onSelect }: { data?: PokemonDetails, onSelect: Function }) => (
  <Card fluid onClick={() => onSelect(data?.name)}>
    <Image fluid className={styles.recentCardImage} src={getImageSrc(data)} wrapped ui={false} alt={data?.name} />
    <Card.Content>
      <Card.Header>{data?.name}</Card.Header>
    </Card.Content>
  </Card>


)

export default RecentViewCard