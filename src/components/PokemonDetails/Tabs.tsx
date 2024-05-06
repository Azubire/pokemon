import { useState } from "react";
import { Tab } from "@headlessui/react";
import About from "./About";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = () => {
  const [tabs] = useState([
    {
      id: 1,
      title: "About",
    },
    {
      id: 2,
      title: "Stats",
    },
    {
      id: 3,
      title: "Similar",
    },
  ]);

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.Panels className="mt-2  ">
          <Tab.Panel>
            <About />
          </Tab.Panel>
          <Tab.Panel>Hey 2</Tab.Panel>
          <Tab.Panel>Hey 3</Tab.Panel>
        </Tab.Panels>
        <Tab.List className=" bg-white absolute left-10 right-10 bottom-0 pb-3">
          <div className="flex space-x-1 rounded-full bg-[#E9E9E9] p-2 w-full">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-full py-2.5 text-sm font-medium leading-5",
                    "ring-white/60 focus:outline-none ",
                    selected ? "bg-white shadow" : ""
                  )
                }
              >
                {tab.title}
              </Tab>
            ))}
          </div>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
