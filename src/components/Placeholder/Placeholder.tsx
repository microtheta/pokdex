import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'

const Welcome = () => (
  <Segment placeholder>
    <Header icon>
      <Image className='icon' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="pikachu" />
      <div>Welcome to Pokédex. Search for your favorite pokémon from search box above.</div>
    </Header>
  </Segment>
)

const Notfound = () => (
  <Segment placeholder>
    <Header icon>
      <Image style={{ height: 135 }} className='icon' src="./no_icon_red.svg" alt="notfound" />
      <div>We can not find any pokémon matching your search query. </div>
    </Header>
  </Segment>
)


const modules = {
  Welcome,
  Notfound
}

export default modules;