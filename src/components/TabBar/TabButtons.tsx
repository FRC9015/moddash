import { Link } from "@swan-io/chicane";
import clsx from "clsx";
import { type FC } from "react";

import { router } from "@/router";
import { useMDTabs } from "@/utils/moddash/useMDTabs";

export const TabButtons: FC = () => {
  const tabs = useMDTabs();
  return (
    <div className=" flex grow flex-row flex-nowrap space-x-2 border-l-2 border-l-gray-200 px-2">
      {tabs.map((tabName) => (
        <Link
          key={tabName}
          to={router.Tab({ tab: tabName })}
          className={clsx(
            "my-auto rounded border-2 border-gray-200 p-1 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          )}
        >
          {tabName}
        </Link>
      ))}
    </div>
  );
};
