import { NetworkTables } from "ntcore-ts-client";
import { ReactNode, createContext } from "react";
import { useEffect, useState } from "react";

type NTContextType = NetworkTables | null;

export const NTContext = createContext<NTContextType>(null);

type NTProviderProps = {
  children?: ReactNode;
  port?: number;
  uri?: string;
};

const ntConnError = new Error(
  "A uri must be provided to create a network tables connection"
);

/**
 * Used to give the rest of the application access to the network tables connection. This component should be placed at the top of the component tree.
 * Pass in either a uri or a team number to create a network tables connection. If a uri is provided, the connection will be created using that uri. If a team number is provided, the connection will be created using the team number. If a uri is provided, the team number will be ignored.
 *
 * @param uri The uri of the network tables server
 * @param port The port of the network tables server. Defaults to 5810
 * @returns
 */
export default function NTProvider({
  children = null,
  uri,
  port,
}: NTProviderProps) {
  const [ntConnection, setNtConnection] = useState<NetworkTables | null>(null);

  useEffect(() => {
    // Create a network tables connection if one doesn't exist
    if (ntConnection === null) {
      if (uri) {
        setNtConnection(NetworkTables.getInstanceByURI(uri, port));
      } else {
        throw ntConnError;
      }
    } else if (uri) {
      ntConnection.changeURI(uri, port);
    } else {
      throw ntConnError;
    }
  }, [uri, port]);

  return (
    <NTContext.Provider value={ntConnection}>
      {ntConnection ? children : null}
    </NTContext.Provider>
  );
}
