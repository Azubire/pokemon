import Divider from "./Divider";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] via-[#D9D9D980] to-[#FFFFFF] ">
      <div className=" pt-2">
        <h3 className="text-xl font-bold text-center bg-white py-2  ">About</h3>
        <div className="flex gap-3  justify-center mt-4">
          <p className="text-center">Height </p>

          <p className="text-center font-semibold">1.7 m </p>
        </div>
        <Divider />
        <div className="flex gap-3  justify-center">
          <p className="text-center">weight </p>

          <p className="text-center font-semibold">1.7 m </p>
        </div>
        <Divider />
        <div className="flex gap-3 mb-4 justify-center ">
          <p className="text-center">Ability </p>

          <p className="font-semibold  text-start ">
            <ul className="list-disc ms-5 ">
              <li> Fire </li>
              <li> Flying </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
