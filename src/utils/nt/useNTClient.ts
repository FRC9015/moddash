import { type NetworkTables } from "ntcore-ts-client";
import { useContext } from "react";

import { NTContext } from "./NTProvider";

const useNTClient = () => {
  const client = useContext(NTContext);

  if (!client)
    throw new Error(
      "No NTProvider found. Please wrap your application in an NTProvider"
    );

  return client as NetworkTables;
};

export default useNTClient;
