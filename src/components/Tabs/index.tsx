import { FC } from "react";

import { Connection } from "./Connected";
import { SettingsDropdown } from "./SettingsDropdown";

export const TabBar: FC = () => {
  return (
    <nav className="flex w-screen bg-white px-2 py-1 outline outline-1 outline-offset-0 outline-gray-100 backdrop-blur-lg">
      <SettingsDropdown>
        <Connection />
      </SettingsDropdown>
    </nav>
  );
};
