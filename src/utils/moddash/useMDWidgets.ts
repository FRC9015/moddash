import { NetworkTablesTypeInfos } from "ntcore-ts-client";

import useNTValue from "../nt/useNTValue";

export const useMDWidgets = (tab = "Dashboard") => {
  const defaultValue: string[] = [];
  return useNTValue(
    `/moddash/${tab}/md.widgets`,
    NetworkTablesTypeInfos.kStringArray,
    defaultValue
  );
};
