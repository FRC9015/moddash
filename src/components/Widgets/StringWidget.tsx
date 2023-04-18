import { NetworkTablesTypeInfos } from "ntcore-ts-client";

import { usePropertiesInTab } from "@/utils/moddash/usePropertiesInTab";
import { useStateInTab } from "@/utils/moddash/useStateInTab";

import { type Widget } from "./utils";

// eslint-disable-next-line react/prop-types
export const StringWidget: Widget = ({ widgetName }) => {
  const properties = usePropertiesInTab(widgetName);
  const [ntValue, setNTValue] = useStateInTab(
    widgetName,
    "value",
    NetworkTablesTypeInfos.kString,
    "" as string
  );

  return (
    <div className="relative h-full w-full border-spacing-0 rounded border-2 border-gray-200 bg-white p-2 ">
      <label
        htmlFor={widgetName}
        className="block overflow-hidden whitespace-nowrap text-sm font-medium leading-6 text-gray-900"
      >
        {properties.displayName}
      </label>
      <div className="relative mt-2">
        <input
          type="text"
          name={widgetName}
          id={widgetName}
          value={ntValue}
          onChange={(e) => setNTValue(e.target.value)}
          className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default StringWidget;
