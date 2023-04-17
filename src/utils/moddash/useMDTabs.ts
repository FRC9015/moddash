import { NetworkTablesTypeInfos } from "ntcore-ts-client";

import useNTValue from "../nt/useNTValue";

export const useMDTabs = () => {
  const defaultValue: string[] = [];
  return useNTValue(
    "/moddash/md.tabs",
    NetworkTablesTypeInfos.kStringArray,
    defaultValue
  );
};
