import { type FC } from "react";

import { Alliance } from "./Alliance";
import { Connection } from "./Connected";
import { SettingsDropdown } from "./SettingsDropdown";
import { TabButtons } from "./TabButtons";

export const TabBar: FC = () => {
  return (
    <nav className="flex h-[52px] w-screen bg-white px-2 py-1 outline outline-1 outline-offset-0 outline-gray-100 backdrop-blur-lg">
      <div className=" w-[15.5rem] shrink-0">
        <SettingsDropdown>
          <Connection />
        </SettingsDropdown>
        <Alliance />
      </div>
      <TabButtons />
    </nav>
  );
};
