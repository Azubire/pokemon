export const generateUniqueId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const typeIcons: Record<string, string> = {
  normal: "🌎",
  fire: "🔥",
  water: "💧",
  electric: "⚡️",
  grass: "🌿",
  ice: "🧊",
  fighting: "⚔️",
  poison: "☠️",
  ground: "⛰️",
  flying: "🦋",
  psychic: "🧠",
  bug: "🐛",
  rock: "🛑",
  ghost: "👻",
  steel: "🔭",
  dragon: "🐉",
  dark: "🌑",
  fairy: "🧚‍♀️",
};
