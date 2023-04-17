import { useContext } from "react";

import { TabContext } from "@/components/Tab/TabContainer";

import { useMDWidgets } from "./useMDWidgets";

export const useWidgetsInTab = () => {
  const tabId = useContext(TabContext);
  if (!tabId) throw new Error("No TabProvider Found");
  return useMDWidgets(tabId);
};
