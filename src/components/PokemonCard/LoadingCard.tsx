import { Placeholder, Card } from 'semantic-ui-react'
import styles from './PokemonCard.module.scss';

const Loading = () => (
  <Card fluid>
    <Placeholder>
      <Placeholder.Image square className={styles.cardImage} />
    </Placeholder>
    <Card.Content className={styles.details}>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length='very short' />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length='short' />
        </Placeholder.Paragraph>
        <Placeholder.Header>
          <Placeholder.Line length='long' />
        </Placeholder.Header>
      </Placeholder>
    </Card.Content>
    <Card.Content extra className={styles.extraContent}>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length='short' />
        </Placeholder.Header>
      </Placeholder>
    </Card.Content>
  </Card>
)
export default Loading;