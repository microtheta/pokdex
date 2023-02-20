import { PokemonDetails } from '@/shared/pokemon.type';
import { getImageSrc } from '@/utils/pokemonImage';

describe('Extract pokemon image from details data', () => {
  it('should return no image when there is no sprite in data', () => {
    const img = getImageSrc()
    expect(img).toBe('/no_image.png');
  })
  it('should return dream_world front_default from sprite when present', () => {
    const inputData = {
      sprites: {
        other: {
          dream_world: {
            front_default: 'front_image'
          }
        }
      }
    } as PokemonDetails
    const img = getImageSrc(inputData)
    expect(img).toBe('front_image');
  })
  it('should return official-artwork from sprite when front image is not present', () => {
    const inputData = {
      sprites: {
        other: {
          dream_world: {
            front_default: ''
          },
          'official-artwork': {
            front_default: 'art_work'
          }
        }
      }
    } as PokemonDetails
    const img = getImageSrc(inputData)
    expect(img).toBe('art_work');
  })
})