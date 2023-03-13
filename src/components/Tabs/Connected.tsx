import { SignalIcon, SignalSlashIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import { match } from "ts-pattern";

import useNTConnectionState from "@/utils/nt/useNTConnectionState";

export const Connection: FC = () => {
  const { connected } = useNTConnectionState();
  return (
    <div className="m-1 inline-flex w-[8.5rem] border-spacing-0 justify-between rounded border-2 border-gray-200 p-1 text-sm hover:cursor-pointer hover:bg-gray-300">
      {match(connected)
        .with("connected", () => (
          <>
            <SignalIcon className=" mr-2 h-5 w-auto text-green-600" /> Connected{" "}
          </>
        ))
        .with("connecting", () => (
          <>
            <SignalIcon className=" mr-2 h-5 w-auto text-yellow-600" />{" "}
            Connecting{" "}
          </>
        ))
        .with("disconnected", () => (
          <>
            <SignalSlashIcon className=" mr-2 h-5 w-auto text-red-600" />{" "}
            Disconnected{" "}
          </>
        ))
        .otherwise(() => null)}
    </div>
  );
};
