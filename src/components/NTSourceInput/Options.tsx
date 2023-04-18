import clsx from "clsx";
import { type FC, type ReactNode } from "react";

import {
  type InputOption,
  useSelectNTConnection,
} from "@/state/useSelectNTConnection";

type Tab = {
  name: string;
  value: InputOption;
};

const tabs: Tab[] = [
  { name: "roboRIO", value: "rio" },
  { name: "Simulation", value: "localhost" },
];

export const NTInputOptions: FC<{ children?: ReactNode }> = ({ children }) => {
  const { inputOption, setInputOption } = useSelectNTConnection();
  return (
    <div className="flex flex-col self-start rounded-md bg-white bg-opacity-10 p-2">
      <nav className="flex space-x-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setInputOption(tab.value)}
            className={clsx(
              tab.value === inputOption
                ? "bg-white bg-opacity-10 "
                : "bg-white bg-opacity-0 hover:bg-opacity-10",
              "rounded-md px-3 py-2 text-sm font-medium transition-all ease-in-out"
            )}
            aria-current={tab.value === inputOption ? "page" : undefined}
          >
            {tab.name}
          </button>
        ))}
      </nav>
      {children}
    </div>
  );
};
