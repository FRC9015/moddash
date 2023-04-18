import { NetworkTablesTypeInfos } from "ntcore-ts-client";

import { usePropertiesInTab } from "@/utils/moddash/usePropertiesInTab";
import { useValueInTab } from "@/utils/moddash/useValueInTab";

import { Widget } from "./utils";

// eslint-disable-next-line react/prop-types
export const BooleanDisplayWidget: Widget = ({ widgetName }) => {
  const properties = usePropertiesInTab(widgetName);
  const value = useValueInTab(
    widgetName,
    "value",
    NetworkTablesTypeInfos.kBoolean,
    false
  );
  const trueColor = useValueInTab(
    widgetName,
    "md.trueColor",
    NetworkTablesTypeInfos.kString,
    "#fff000"
  );
  const falseColor = useValueInTab(
    widgetName,
    "md.falseColor",
    NetworkTablesTypeInfos.kString,
    "#fff000"
  );

  return (
    <div className="relative flex h-full w-full border-spacing-0 flex-col rounded border-2 border-gray-200 bg-white p-2 ">
      <div className="block shrink-0 grow-0 overflow-hidden whitespace-nowrap text-sm font-medium leading-6 text-gray-900">
        {properties.displayName}
      </div>
      <div className="relative flex h-min w-full grow">
        <svg
          className="absolute h-full w-full rounded"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill={value ? trueColor : falseColor}
          />
        </svg>
      </div>
    </div>
  );
};

export default BooleanDisplayWidget;
