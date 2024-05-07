import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Cover from "./Cover";
import Tabs from "./Tabs";
import { useAppSelector } from "@/hooks/redux";
import { typeIcons } from "@/utils";

const PokemonDetailsModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const { pokemon } = useAppSelector((state) => state.pokemons);
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={`relative z-30 ${theme}`}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed right-0 top-0 bottom-0 w-1/3 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-60"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="min-h-full  p-3 w-full  bg-white overflow-y-auto h-full ">
                {/* Card  */}
                <Cover onClose={() => setIsOpen(false)} />
                <div className="">
                  {/* title  */}
                  <h3 className="text-3xl font-bold mt-10 text-center">
                    {pokemon?.name}
                  </h3>
                  {/* type  */}
                  <div className="flex gap-2 mb-4 justify-center items-center mt-4">
                    {pokemon?.types?.map((type) => (
                      <div
                        key={type.type.url}
                        className="bg-[#EEEEEE] flex gap-2 px-3 rounded-full text-sm"
                      >
                        <span>{typeIcons[type.type.name]}</span>
                        <span>{type.type.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* tabs  */}
                  <Tabs />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PokemonDetailsModal;
