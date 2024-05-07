import { IPokemon } from "@/types/pokemon";
import ColorThief from "colorthief";

// get image
export const getImageURL = (pokemon: IPokemon) => {
  return pokemon?.sprites?.other?.dream_world?.front_default;
};

// randomly generate unique id
export const generateUniqueId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// type icons mapping
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

// convert rgb to hex
export const rgbToHex = (r: number, g: number, b: number) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

// get lighter color from dominant  color
const lightenHexColor = (color: number[], amount: number) => {
  const rgb = color.map((c) => Math.min(Math.floor(c * (1 + amount)), 255));
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

//get darker color from dominant color
function darkenHexColor(color: number[], amount: number) {
  const rgb = color.map((c) => Math.max(Math.floor(c * (1 - amount)), 0));
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

// get dominant color from image
export const getDominantColor = (imageUrl: string): Promise<number[]> => {
  const colorThief = new ColorThief();
  const img = new Image();
  img.src = imageUrl;
  img.crossOrigin = "Anonymous";

  return new Promise((resolve) => {
    if (img.complete) {
      resolve(colorThief.getColor(img) as number[]);
    } else {
      img.addEventListener("load", function () {
        resolve(colorThief.getColor(img) as number[]);
      });
    }
  });
};

// get light and dark colors
export const getLightAndDarkColors = async (imageUrl: string) => {
  const colors = await getDominantColor(imageUrl);

  const lightHexColor = lightenHexColor(colors, 0.2);
  const darkHexColor = darkenHexColor(colors, 0.2);

  return { light: lightHexColor, dark: darkHexColor };
};
