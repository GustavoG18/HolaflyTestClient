import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavContext } from "../context/NavContext";
import { useState } from "react";

const navigation = [
  { name: "Active & Pendings", current: true },
  { name: "Expired", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { setNav } = useNavContext();
  const [navigationState, setNavigationState] = useState(navigation);

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5a27d14e0000ff0005b28c01/0x0.png"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2022/08/holafly-logo.svg"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigationState.map((item) => (
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "border-rose-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                          )}
                          onClick={() => {
                            if (item.name === "Active & Pendings") {
                              setNavigationState((prev) => {
                                const cloneState = [...prev];
                                cloneState[0].current = true;
                                cloneState[1].current = false;
                                return cloneState;
                              });
                              setNav("active&pending");
                            } else {
                              setNavigationState((prev) => {
                                const cloneState = [...prev];
                                cloneState[1].current = true;
                                cloneState[0].current = false;
                                return cloneState;
                              });
                              setNav("expired");
                            }
                          }}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Log out
                    </button>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigationState.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      className={classNames(
                        item.current
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                      )}
                      onClick={() => {
                        if (item.name === "Active & Pendings") {
                          setNavigationState((prev) => {
                            const cloneState = [...prev];
                            cloneState[0].current = true;
                            cloneState[1].current = false;
                            return cloneState;
                          });
                          setNav("active&pending");
                        } else {
                          setNavigationState((prev) => {
                            const cloneState = [...prev];
                            cloneState[1].current = true;
                            cloneState[0].current = false;
                            return cloneState;
                          });
                          setNav("expired");
                        }
                      }}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4 flex justify-center">
                  <button
                    type="submit"
                    className="flex w-80 justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log out
                  </button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Navbar;
