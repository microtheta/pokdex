import React from 'react'
import { Card, Icon, Image, List, Header, Label, Divider } from 'semantic-ui-react'
import styles from './PokemonCard.module.scss';


const PokemonCard = ({ name }: { name: string }) => (
  <div className={styles.flipCard}>
    <div className={styles.flipCardInner}>
      <div className={styles.flipCardFront}>
        <Card fluid >
          <Image fluid className={styles.cardImage} src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' wrapped ui={false} alt="image" />
          <Card.Content className={styles.details}>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span>species.name</span>
            </Card.Meta>
            <Card.Description>
              <Label>
                Height
                <Label.Detail>23</Label.Detail>
              </Label>

              <Label>
                Width
                <Label.Detail>23</Label.Detail>
              </Label>


              <Label>
                Weight
                <Label.Detail>23</Label.Detail>
              </Label>

            </Card.Description>
          </Card.Content>
          <Card.Content extra className={styles.extraContent}>
            <a>
              <Icon name='hashtag' />
              28
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
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
              alt="image"
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>

            <Card.Description className={styles.stats}>
              <Divider horizontal>
                <Header as='h4'>
                  <Icon name='chart bar outline' />
                  Statistics
                </Header>
              </Divider>
              <List divided verticalAlign='middle'>
                <List.Item>
                  <List.Content floated='right'>
                    <Label circular >11</Label>
                  </List.Content>

                  <List.Content>Lena</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='right'>
                    <Label circular >11</Label>
                  </List.Content>

                  <List.Content>Lindsay</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='right'>
                    <Label circular >11</Label>
                  </List.Content>

                  <List.Content>Mark</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='right'>
                    <Label circular >11</Label>
                  </List.Content>

                  <List.Content>Molly</List.Content>
                </List.Item>
              </List>
            </Card.Description>
          </Card.Content>
          {/* <Card.Content extra>

          </Card.Content> */}
        </Card>
      </div>
    </div>
  </div>

)

export default PokemonCard