import React from "react";
import Divider from "./Divider";

const about = [
  {
    id: 1,
    name: "height",
    value: <p className="text-start flex-1 font-bold">1.9 m</p>,
  },
  {
    id: 2,
    name: "weight",
    value: <p className="text-start flex-1 font-bold">1.9 m</p>,
  },
  {
    id: 3,
    name: "ability",
    value: (
      <ul className="list-inside list-disc text-start flex-1 font-bold">
        <li> Fire </li>
        <li> Flying </li>
      </ul>
    ),
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] via-[#D9D9D980] to-[#FFFFFF]">
      <div className=" pt-2">
        <h3 className="text-xl font-bold text-center bg-white py-2  ">About</h3>
        {about.map((item) => (
          <React.Fragment key={item.id}>
            <div className="flex gap-5  justify-center items-center my-2">
              <p className=" capitalize flex-1 text-right">{item.name}</p>
              {item.value}
            </div>
            <Divider />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;
