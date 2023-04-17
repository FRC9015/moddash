import { NetworkTablesTypeInfos } from "ntcore-ts-client";

import useNTValue from "../nt/useNTValue";

type BaseMDProperties = (
  widgetName: string,
  tabName?: string
) => {
  position: {
    x: number;
    y: number;
  };
  dimensions: {
    height: number;
    width: number;
  };
  type: string;
  displayName: string;
};

export const useBaseMDProperties: BaseMDProperties = (
  widgetName,
  tabName = "Dashboard"
) => {
  const prefix = (key: string) => `/moddash/${tabName}/${widgetName}/${key}`;

  const ntPosition = useNTValue(
    prefix("md.x_y"),
    NetworkTablesTypeInfos.kIntegerArray,
    [-1, -1]
  );
  const ntDimensions = useNTValue(
    prefix("md.h_w"),
    NetworkTablesTypeInfos.kIntegerArray,
    [-1, -1]
  );

  return {
    displayName: useNTValue(
      prefix("md.displayName"),
      NetworkTablesTypeInfos.kString,
      "default" as string
    ),
    type: useNTValue(
      prefix("md.type"),
      NetworkTablesTypeInfos.kString,
      "default" as string
    ),
    position: {
      x: ntPosition[0],
      y: ntPosition[1],
    },
    dimensions: {
      height: ntDimensions[0],
      width: ntDimensions[1],
    },
  };
};
