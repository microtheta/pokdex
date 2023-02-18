import { PokemonDetails } from "@/shared/pokemon.type";

export const getImageSrc = (data?: PokemonDetails) => {
  const imgs = data?.sprites.other;
  if (imgs?.dream_world.front_default) {
    return imgs?.dream_world.front_default
  }
  else if (imgs?.['official-artwork'].front_default) {
    return imgs?.['official-artwork'].front_default
  }
  else {
    return '/no_image.png'
  }
}