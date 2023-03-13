import { useQuery } from "@tanstack/react-query";

import useNTClient from "./useNTClient";

export const CONNECT_STATE = {
  Connected: "connected",
  Connecting: "connecting",
  Disconnected: "disconnected",
} as const;

/**
 * Detailed info on the state of the robot NetworkTables connection
 * @param refreshMs How frequently to refresh the state
 * @returns {@link CONNECT_STATE}
 */
const useNTConnectionState = (refreshMs?: number) => {
  const client = useNTClient();

  const query = useQuery({
    queryKey: ["nt-connect-state"],
    queryFn: () => {
      if (client.isRobotConnected()) {
        return CONNECT_STATE.Connected;
      } else {
        if (client.isRobotConnecting()) {
          return CONNECT_STATE.Connecting;
        } else {
          return CONNECT_STATE.Disconnected;
        }
      }
    },
    initialData: CONNECT_STATE.Disconnected,
    refetchInterval: refreshMs ?? 200,
  });

  return { connected: query.data };
};

export default useNTConnectionState;
