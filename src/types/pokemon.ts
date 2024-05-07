export interface IPokemon {
  id: number;
  name: string;
  types: [
    {
      type: {
        name: string;
        url: string;
      };
    }
  ];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
    };
  };
  stats: Array<{
    base_stat: 40;
    effort: 0;
    stat: {
      name: string;
      url: string;
    };
  }>;
  weight: number;
  height: number;
  base_experience: number;
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    }
  ];
}

export interface IPokemonType {
  id: number;
  name: string;
  pokemon: {
    pokemon: IPokemon;
  }[];
}
