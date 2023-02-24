import Feed from '@/components/Feed/Feed'
import { Grid, Segment } from 'semantic-ui-react'


export default function Home() {
  return (
    <Grid columns='equal'>

      <Grid.Row>
        <Grid.Column>
          <Segment>Home </Segment>
          <Segment>Tweets</Segment>
        </Grid.Column>

        <Grid.Column width={6}>
          <Feed />
        </Grid.Column>

        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  )
}
