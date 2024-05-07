import React from "react";
import Divider from "./Divider";
import ProgressBar from "./ProgressBar";
import { useAppSelector } from "@/hooks/redux";

const Stats = () => {
  const { pokemon } = useAppSelector((state) => state.pokemons);

  return (
    <section className="bg-gradient-to-r from-[#FFFFFF] via-[#D9D9D980] to-[#FFFFFF] px-4">
      <div className=" py-2">
        <h3 className="text-xl font-bold text-center bg-white py-2  ">Stats</h3>
        {pokemon?.stats.map(({ stat, base_stat }, index) => (
          <React.Fragment key={stat.name}>
            <div className="flex gap-3  justify-center items-center my-2">
              <p className=" capitalize flex-1 text-right">{stat.name}</p>
              <ProgressBar value={base_stat} />
              <p className="font-semibold flex-1 text-start">{base_stat}</p>
            </div>
            {pokemon?.stats.length - 1 !== index && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
