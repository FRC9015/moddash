import {
  NetworkTablesTypeInfo,
  NetworkTablesTypeInfos,
} from "ntcore-ts-client";

import { NTTopicTypes } from "@/types/nt";

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
  const useMDProperty = <T extends NTTopicTypes>(
    key: string,
    ntType: NetworkTablesTypeInfo,
    defaultValue: T
  ) =>
    useNTValue<T>(
      `/moddash/${tabName}/${widgetName}/md.${key}`,
      ntType,
      defaultValue
    );

  const ntPosition = useMDProperty(
    "x_y",
    NetworkTablesTypeInfos.kIntegerArray,
    [0, 0]
  );
  const ntDimensions = useMDProperty(
    "h_w",
    NetworkTablesTypeInfos.kIntegerArray,
    [0, 0]
  );

  return {
    displayName: useMDProperty(
      "displayName",
      NetworkTablesTypeInfos.kString,
      ""
    ),
    type: useMDProperty("type", NetworkTablesTypeInfos.kString, ""),
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
