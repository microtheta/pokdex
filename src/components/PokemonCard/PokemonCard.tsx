import { PokemonDetails } from '@/shared/pokemon.type';
import React from 'react'
import { Card, Icon, Image, List, Header, Label, Divider } from 'semantic-ui-react';
import { getImageSrc } from '@/utils/pokemonImage';
import styles from './PokemonCard.module.scss';


const PokemonCard = ({
  data,
  onClick
}: {
  data?: PokemonDetails,
  onClick?: Function
}) => {



  return (
    <div role='result-card' onClick={() => onClick ? onClick() : ''} className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Card fluid >
            <Image fluid className={styles.cardImage} src={getImageSrc(data)} wrapped ui={false} alt={data?.name} />
            <Card.Content className={styles.details}>
              <Card.Header className={styles.name}>{data?.name}</Card.Header>
              <Card.Meta>
                <span>{data?.species.name}</span>
              </Card.Meta>
              <Card.Description>
                <Label>
                  Height
                  <Label.Detail>{data?.height}</Label.Detail>
                </Label>

                <Label>
                  Weight
                  <Label.Detail>{data?.weight}</Label.Detail>
                </Label>

                <Label>
                  Experience
                  <Label.Detail>{data?.base_experience}</Label.Detail>
                </Label>

              </Card.Description>
            </Card.Content>
            <Card.Content extra className={styles.extraContent}>
              <a>
                <Icon name='hashtag' />
                {data?.id}
              </a>
            </Card.Content>
          </Card>
        </div>
        <div className={styles.flipCardBack}>
          <Card fluid>
            <Card.Content className={styles.meta}>

              <Image
                floated='left'
                size='mini'
                src={getImageSrc(data)}
                alt={data?.name}
              />
              <Card.Header className={styles.name}>{data?.name}</Card.Header>
              <Card.Meta>{data?.species.name}</Card.Meta>

              <Card.Description className={styles.stats}>
                <Divider horizontal>
                  <Header as='h4'>
                    <Icon name='chart bar outline' />
                    Statistics
                  </Header>
                </Divider>
                <List divided verticalAlign='middle'>
                  {
                    data?.stats?.map(stat => (
                      <List.Item key={stat.stat.name}>
                        <List.Content floated='right'>
                          <Label circular>{stat.base_stat}</Label>
                        </List.Content>

                        <List.Content className={styles.name}>{stat.stat.name}</List.Content>
                      </List.Item>
                    ))
                  }

                </List>
              </Card.Description>
            </Card.Content>

          </Card>
        </div>
      </div>
    </div>

  )
}

export default PokemonCard