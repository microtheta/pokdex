import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styles from './PokemonCard.module.scss';

const RecentViewCard = () => (
  <Card fluid >
    <Image fluid  className={styles.recentCardImage} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' wrapped ui={false} alt="image" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
    </Card.Content>

  </Card>


)

export default RecentViewCard