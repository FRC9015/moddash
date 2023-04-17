import { FlagIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

import { useFMSValues } from "@/utils/nt/useFMSValues";

export const Alliance: FC = () => {
  const { isRedAlliance, stationNumber } = useFMSValues();
  return (
    <div className="m-1 inline-flex w-24 border-spacing-0 items-center justify-center rounded border-2 border-gray-200 p-1 text-sm">
      {isRedAlliance ? (
        <span className="inline-flex items-center font-medium text-[#ED1C24]">
          <FlagIcon className="mr-2  h-6 w-auto " /> Red {stationNumber}
        </span>
      ) : (
        <span className="inline-flex items-center font-medium text-[#0066B3]">
          <FlagIcon className="mr-2  h-6 w-auto " /> Blue {stationNumber}
        </span>
      )}
    </div>
  );
};
