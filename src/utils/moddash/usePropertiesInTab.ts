import { useContext } from "react";

import { TabContext } from "@/components/Tab/TabContainer";

import { useBaseMDProperties } from "./useBaseMDProperties";

export const usePropertiesInTab = (widgetName: string) => {
  const tabId = useContext(TabContext);
  if (!tabId) throw new Error("No TabProvider Found");

  const properties = useBaseMDProperties(widgetName, tabId);
  // console.log(widgetName, { properties, tabId });
  return properties;
};
