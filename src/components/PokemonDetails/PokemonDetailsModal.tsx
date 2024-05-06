import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Cover from "./Cover";
import About from "./About";

const types = [
  {
    type: "Fire",
    icon: "🔥",
  },
  {
    type: "Flying",
    icon: "🦋",
  },
];
const PokemonDetailsModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed right-0 top-0 bottom-0 w-1/3 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="min-h-full  p-3 w-full  bg-white">
                {/* Card  */}
                <Cover />
                {/* title  */}
                <h3 className="text-3xl font-bold mt-16 text-center">
                  Charizard
                </h3>
                {/* type  */}
                <div className="flex gap-2 mb-4 justify-center items-center mt-4">
                  {types.map((item) => (
                    <div className="bg-[#EEEEEE] flex gap-2 px-3 rounded-full text-sm">
                      {item.icon} {item.type}
                    </div>
                  ))}
                </div>

                {/* stats  */}
                <About />
                {/* tabs  */}
                {/* <p className="border">Hey</p> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PokemonDetailsModal;
