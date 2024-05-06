import React from "react";
import Divider from "./Divider";
import ProgressBar from "./ProgressBar";

const stats = [
  {
    id: 1,
    name: "hp",
    value: 45,
  },
  {
    id: 2,
    name: "attack",
    value: 49,
  },
  {
    id: 3,
    name: "defense",
    value: 49,
  },
  {
    id: 4,
    name: "specia attack",
    value: 45,
  },
  {
    id: 5,
    name: "specia defense",
    value: 65,
  },
  {
    id: 6,
    name: "speed",
    value: 65,
  },
];
const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] via-[#D9D9D980] to-[#FFFFFF] px-4">
      <div className=" py-2">
        <h3 className="text-xl font-bold text-center bg-white py-2  ">Stats</h3>
        {stats.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="flex gap-3  justify-center items-center my-2">
              <p className=" capitalize flex-1 text-right">{item.name}</p>
              <ProgressBar value={item.value} />
              <p className="font-semibold flex-1 text-start">{item.value}</p>
            </div>
            {stats.length - 1 !== index && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stats;
