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
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
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
