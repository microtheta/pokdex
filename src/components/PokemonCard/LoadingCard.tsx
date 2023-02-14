import { Placeholder, Card } from 'semantic-ui-react'

const Loading = () => (
  <Card fluid>
    <Placeholder>
      <Placeholder.Image square />
    </Placeholder>
    <Card.Content>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length='very short' />
          <Placeholder.Line length='medium' />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length='short' />
        </Placeholder.Paragraph>
      </Placeholder>
    </Card.Content>
    <Card.Content extra>
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line length='short' />
        </Placeholder.Paragraph>
      </Placeholder>
    </Card.Content>
  </Card>
)
export default Loading;