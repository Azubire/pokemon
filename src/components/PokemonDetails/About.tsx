import React from "react";
import Divider from "./Divider";
import { useAppSelector } from "@/hooks/redux";
import { generateUniqueId } from "@/utils";

const About = () => {
  const { pokemon } = useAppSelector((state) => state.pokemons);
  const about = [
    {
      id: generateUniqueId(),
      name: "height",
      value: <p className="text-start flex-1 font-bold">{pokemon?.height}m </p>,
    },
    {
      id: generateUniqueId(),
      name: "weight",
      value: <p className="text-start flex-1 font-bold">{pokemon?.weight}kg</p>,
    },
    {
      id: generateUniqueId(),
      name: "ability",
      value: (
        <ul className="list-inside list-disc text-start flex-1 font-bold">
          {pokemon?.abilities?.map((ability) => (
            <li key={ability.ability.url}>{ability.ability.name}</li>
          ))}
        </ul>
      ),
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] via-[#D9D9D980] to-[#FFFFFF] px-4">
      <div className=" py-2">
        <h3 className="text-xl font-bold text-center bg-white py-2  ">About</h3>
        {about.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="flex gap-5  justify-center items-center my-2">
              <p className=" capitalize flex-1 text-right">{item.name}</p>
              {item.value}
            </div>
            {about.length - 1 !== index && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;
