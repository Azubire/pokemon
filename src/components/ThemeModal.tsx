import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import bg from "@/assets/bg.png";

const ThemeModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-sm transform overflow-hidden rounded-2xl  text-left align-middle shadow-xl transition-all"
                style={{
                  backgroundImage: `linear-gradient(rgba(246, 246, 246, 0.95), rgba(246, 246, 246, 0.95)), url(${bg})`,
                }}
              >
                <Dialog.Title
                  as="h3"
                  className="bg-[rgba(255,255,255,0.70)] text-lg font-bold leading-6 text-gray-900 shadow-md p-3.5 text-center"
                >
                  Choose Theme
                </Dialog.Title>
                <div className="mt-2 flex p-6 justify-center items-center gap-3">
                  {["bg-[#E85382]", "bg-[#39BADF]", "bg-[#E1A725]"].map(
                    (theme) => (
                      <button
                        key={theme}
                        className="flex items-center border border-gray-500 p-1 rounded-full cursor-pointer hover:scale-105 duration-300"
                      >
                        <div
                          className={`rounded-full ${theme} p-2 w-10 h-10`}
                          // onClick={() => setShowThemeModal(true)}
                        >
                          <span className="sr-only">toggle theme</span>
                        </div>
                      </button>
                    )
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ThemeModal;
