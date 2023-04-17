import { NetworkTablesTypeInfos } from "ntcore-ts-client";
import { FC } from "react";

import { useBaseMDProperties } from "@/utils/moddash/useBaseMDProperties";
import useNTValue from "@/utils/nt/useNTValue";

type Props = {
  tabId: string;
};

const Page: FC<Props> = () => {
  const mode = useBaseMDProperties("mode");
  const modedata = useNTValue(
    "/moddash/Dashboard/mode/value",
    NetworkTablesTypeInfos.kString,
    "init"
  );
  return (
    <div>
      <div>{JSON.stringify(mode)}</div>
      <div>{JSON.stringify(modedata)}</div>
    </div>
  );
};

export default Page;
