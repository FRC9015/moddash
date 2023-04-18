import { type NetworkTablesTypeInfo } from "ntcore-ts-client";
import { useContext } from "react";

import { TabContext } from "@/components/Tab/TabContainer";
import { type NTTopicTypes } from "@/types/nt";

import useNTState from "../nt/useNTState";

export const useStateInTab = <T extends NTTopicTypes>(
  widgetName: string,
  key: string,
  ntType: NetworkTablesTypeInfo,
  defaultValue: T
) => {
  const tabId = useContext(TabContext);
  if (!tabId) throw new Error("No TabProvider Found");

  return useNTState<T>(
    `/moddash/${tabId}/${widgetName}/${key}`,
    ntType,
    defaultValue
  );
};
