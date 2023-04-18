import { Menu, Transition } from "@headlessui/react";
import { Link } from "@swan-io/chicane";
import classNames from "clsx";
import { type FC, Fragment, type ReactNode } from "react";

import { router } from "@/router";
import { useSelectNTConnection } from "@/state/useSelectNTConnection";

export const SettingsDropdown: FC<{ children: ReactNode }> = ({ children }) => {
  const setModalOpen = useSelectNTConnection((state) => state.setModalOpen);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>{children}</Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => setModalOpen(true)}
                >
                  Change connection
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={router.Home()}
                  className={classNames(
                    active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Go home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
