import { type FC, createContext } from "react";

import { WidgetRender } from "./WidgetRender";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const TabContext = createContext<string | null>(null);

type Props = {
  tabId: string;
};

export const TabContainer: FC<Props> = ({ tabId }) => {
  return (
    <TabContext.Provider value={tabId}>
      <main className="relative h-full w-screen">
        <WidgetRender />
      </main>
    </TabContext.Provider>
  );
};
