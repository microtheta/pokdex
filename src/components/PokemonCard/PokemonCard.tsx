import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styles from './PokemonCard.module.scss';

const PokemonCard = () => (
  <Card fluid link>
    <Image fluid className={styles.cardImage} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' wrapped ui={false} alt="image" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default PokemonCard