
export interface NameUrlEntry {
  name: string,
  url: string,
}

export interface ListType {
  count: number,
  results: NameUrlEntry[]
}

export interface PokemonDetails {
  abilities?: AbilitiesEntity[];
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  species: NameUrlEntry
  sprites: Sprites;
  stats?: StatsEntity[];
  types?: TypesEntity[];
  weight: number;
}
export interface AbilitiesEntity {
  ability: NameUrlEntry[]
  is_hidden: boolean;
  slot: number;
}

export interface Sprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other: {
    dream_world: OtherSpritesEntry,
    home: OtherSpritesEntry,
    'official-artwork': OtherSpritesEntry
  }
}
export interface OtherSpritesEntry {
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}
export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: NameUrlEntry;
}
export interface TypesEntity {
  slot: number;
  type: NameUrlEntry;
}
